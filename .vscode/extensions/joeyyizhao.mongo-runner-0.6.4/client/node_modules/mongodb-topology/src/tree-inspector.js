const _ = require('lodash');
const mongodb = require('mongodb');
const EventEmitter = require('events');

const { TreeNodeTypes } = require('./tree-types');
const {
  inspectRoles,
  inspectUsers,
  databaseInspector,
  inspectReplicaset,
  shardInspector
} = require('./inspectors/');
const { ServerListener } = require('./listener');
class TreeInspector {
  constructor(driver) {
    this.driver = driver;
    this.eventEmitter = new EventEmitter();
  }

  /**
   *
   * @param {*} options {serverStateChange: true}
   */
  inspect(options = { serverStateChange: true, currentDb: '' }) {
    if (options.serverStateChange) {
      const listener = new ServerListener();
      listener.on('reinspect', () => {
        this.inspect(options).then(tree =>
          this.eventEmitter.emit('treeChanged', tree)
        );
      });
      listener.startListen(this.driver);
    }
    return this.inspectMongo(options);
  }

  inspectMongo(options) {
    const driver = this.driver;
    const proms = [
      this.inspectDatabases(options),
      this.inspectUsers(),
      // this.inspectRoles(),
      this.inspectReplicaMembers()
    ];

    if (driver.topology.constructor == mongodb.Mongos) {
      console.log('inspect mongo os');
      proms.push(this.inspectShards());
      proms.push(this.inspectConfigs());
      proms.push(this.inspectMongos());
    }
    return new Promise((resolve, reject) => {
      Promise.all(proms)
        .then(value => {
          const results = value.filter(v => {
            return v !== null && v !== undefined;
          });
          const dbs = _.find(
            results,
            i => i.type === TreeNodeTypes.DATABASE
          ) || { databases: [] };
          const users = _.find(
            results,
            i => i.type === TreeNodeTypes.USERS
          ) || { users: [] };
          const roles = _.find(
            results,
            i => i.type === TreeNodeTypes.ROLES
          ) || { roles: [] };
          const replicaset = _.find(
            results,
            i => i.type === TreeNodeTypes.REPLICASET
          ) || { roles: [] };
          const shards = _.find(
            results,
            i => i.type === TreeNodeTypes.SHARDS
          ) || { roles: [] };
          const configs = _.find(
            results,
            i => i.type === TreeNodeTypes.CONFIG
          ) || { roles: [] };
          const routers = _.find(
            results,
            i => i.type === TreeNodeTypes.ROUTER
          ) || { roles: [] };
          const tree = _.pickBy(
            {
              databases: dbs.databases,
              users: users.users,
              roles: roles.roles,
              replicaset: replicaset.replicaset,
              shards: shards.shards,
              configs: configs.configs,
              routers: routers.routers
            },
            v => v !== undefined && v !== null
          );
          resolve(tree);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  /**
   * discover all databases in a mongodb instance
   */
  inspectDatabases(options) {
    return databaseInspector.inspectDatabases(this.driver, options);
  }

  buildInfo() {
    return databaseInspector.buildInfo(this.driver);
  }

  serverStats() {
    return databaseInspector.serverStats(this.driver);
  }

  /**
   * query users from mongodb instance
   *
   * @param db
   */
  inspectUsers() {
    return inspectUsers(this.driver);
  }

  inspectRoles() {
    return inspectRoles(this.driver);
  }

  inspectReplicaMembers() {
    return inspectReplicaset(this.driver);
  }

  inspectConfigs() {
    return shardInspector.inspectConfigs(this.driver);
  }

  inspectShards() {
    return shardInspector.inspectShards(this.driver);
  }

  inspectMongos() {
    return shardInspector.inspectMongos(this.driver);
  }

  addTreeChangedListener(l) {
    this.eventEmitter.on('treeChanged', l);
  }

  getCollectionAttributes(db, collection) {
    return databaseInspector.getCollectionAttributes(
      this.driver,
      db,
      collection
    );
  }

  getCollectionIndexes(dbName, colName) {
    return this.driver
      .db(dbName)
      .collection(colName)
      .indexes();
  }

  createIndex(dbName, colName, idxParam) {
    return new Promise((resolve, reject) => {
      this.driver
        .db(dbName)
        .collection(colName)
        .createIndex(idxParam, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
    });
  }

  deleteIndex(dbName, colName, idxName) {
    return new Promise((resolve, reject) => {
      this.driver
        .db(dbName)
        .collection(colName)
        .dropIndex(idxName, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
    });
  }

  createCollection(dbName, colName, option = {}) {
    return this.driver.db(dbName).collection(colName, option);
  }

  getQueryObjectFromJsonExt(jsonExt) {
    const keys = _.keys(jsonExt);
    const json = {};
    keys.forEach(key => {
      const pattern = /ObjectId\(([0-9a-zA-Z]*)\)/;
      const match = pattern.exec(jsonExt[key]);
      if (match && match.length > 0) {
        json[key] = new mongodb.ObjectId(match[1]);
      } else {
        json[key] = jsonExt[key];
      }
    });
    return json;
  }

  simpleQuery(dbName, colName, query, options) {
    const jsonQuery = this.getQueryObjectFromJsonExt(query);
    return this.driver
      .db(dbName)
      .collection(colName)
      .find(jsonQuery, { limit: 20 })
      .toArray();
  }

  deleteCollection(dbName, colName) {
    return this.driver.db(dbName).dropCollection(colName);
  }

  deleteDatabase(dbName) {
    return this.driver.db(dbName).dropDatabase();
  }
}

TreeInspector.ChangeEvents = {
  serverDescriptionChange: true,
  serverOpening: true,
  serverClosed: true,
  topologyOpening: true,
  topologyClosed: true,
  topologyDescriptionChanged: true,
  serverHeartbeatStarted: true,
  serverHeartbeatSucceeded: true,
  serverHeartbeatFailed: true
};

module.exports = TreeInspector;
