const _ = require('lodash');
const {TreeNodeTypes} = require('../tree-types');


const inspectConfigs = (driver) => {
  return new Promise(resolve => {
    const adminDB = driver.db('admin');
    const configTree = {
      name: 'Config Servers',
      type: TreeNodeTypes.CONFIG,
      configs: []
    };
    adminDB
      .command({getShardMap: 1})
      .then(shardMap => {
        if (shardMap.map && shardMap.map.config) {
          const confHosts = shardMap
            .map
            .config
            .split('/')[1]
            .split(',');
          confHosts.map(conf => {
            configTree
              .configs
              .push({name: conf, type: TreeNodeTypes.CONFIG});
          });
          resolve(configTree);
        }
      })
      .catch(err => {
        console.error('failed to get shard map ', err);
        resolve(configTree);
      });
  }).catch(err => {
    console.log('cant run get shard map command ', err);
  });
}

const inspectShards = (driver) => {
  return new Promise(resolve => {
    const collection = driver
      .db('config')
      .collection('shards');
    collection
      .find()
      .toArray((err, docs) => {
        const shardsTree = {
          name: 'Shards',
          type: TreeNodeTypes.SHARDS
        };
        shardsTree.shards = [];
        _.map(docs, doc => {
          const shards = doc
            .host
            .split(',');
          if (shards && shards.length > 1) {
            let shardRepName = '';
            const nameSplit = shards[0].split('/');
            if (nameSplit.length > 1) {
              shardRepName = nameSplit[0];
              shards[0] = nameSplit[1];
            }
            const shardTree = {
              name: shardRepName,
              type: TreeNodeTypes.SHARDS
            };
            shardTree.shards = _.map(shards, shard => {
              return {name: shard, type: TreeNodeTypes.SHARD};
            });
            shardsTree
              .shards
              .push(shardTree);
          } else {
            shardsTree
              .shards
              .push({name: shards});
          }
        });
        return resolve(shardsTree);
      });
  }).catch(err => {
    console.error('get all shards error', err);
    throw new errors.BadRequest(err);
  });
}

const inspectMongos = (driver) => {
  return new Promise(resolve => {
    const collection = driver
      .db('config')
      .collection('mongos');
    collection
      .find({})
      .toArray((err, docs) => {
        const shardsTree = {
          type: TreeNodeTypes.ROUTER,
          routers: []
        };
        _.map(docs, doc => {
          shardsTree
            .routers
            .push({name: doc._id, type: TreeNodeTypes.MONGOS});
        });
        resolve(shardsTree);
      });
  }).catch(err => {
    console.error('get all mongos error', err);
    throw new errors.BadRequest(err);
  });
};

module.exports = {
  inspectConfigs, inspectShards, inspectMongos
};
