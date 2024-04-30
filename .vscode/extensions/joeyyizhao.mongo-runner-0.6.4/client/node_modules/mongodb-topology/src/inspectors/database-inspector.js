const _ = require("lodash");
const { TreeNodeTypes } = require("../tree-types");

const getCollectionAttributes = (driver, db, collection) => {
  return driver
    .db(db)
    .collection(collection)
    .find({}, { limit: 20 })
    .toArray()
    .then(docs => {
      if (!docs) {
        return [];
      }
      const uniqueKeys = docs.reduce((accumulator, field) => {
        _.keys(field).forEach(f => {
          if (accumulator.indexOf(f) < 0) {
            accumulator.push(f);
          }
        });
        return accumulator;
      }, []);
      if (!uniqueKeys) {
        return [];
      }
      const fields = uniqueKeys.map(field => ({
        name: field,
        type: TreeNodeTypes.FIELD
      }));
      return fields;
    });
};

/**
 * inspect the index under a collection
 *
 * @param db  db driver instance
 * @param col the collection instance
 */
const inspectIndex = (col, data) => {
  return new Promise(resolve => {
    col.indexes((err, indexes) => {
      if (!indexes) {
        resolve();
        return;
      }
      const idx = indexes.filter(index => {
        return index.name !== "";
      });
      const result = idx.map(index => {
        return { name: index.name, type: TreeNodeTypes.INDEX };
      });
      if (result.length === 0) {
        resolve(null);
      } else {
        data.indexes = result;
      }
      resolve();
    });
  }).catch(err => {
    console.error("failed to get index", err);
  });
};

/**
 * inspect the given database
 *
 * @param db  the database driver instance
 * @param name  the name of the database need to be inspected.
 * @returns {Promise} resolve the databse json object
 */
const inspectDatabase = (db, name) => {
  return new Promise(resolve => {
    db.db(name)
      .collections()
      .then(collections => {
        const dbData = {
          name,
          type: TreeNodeTypes.DATABASE
        };
        dbData.collections = _.map(collections, col => {
          return {
            name: col.collectionName,
            type: TreeNodeTypes.COLLECTION,
            dbName: name
          };
        });
        dbData.collections = _.sortBy(dbData.collections, "name");
        return { dbData, collections };
      })
      .then(value => {
        const promises = [];
        const { dbData, collections } = value;
        collections.map(col => {
          promises.push(
            inspectIndex(
              col,
              _.find(dbData.collections, { name: col.collectionName })
            )
          );
        });
        return Promise.all(promises).then(() => {
          resolve(dbData);
        });
      })
      .catch(err => console.error(err));
  });
};

const dbCommand = (driver, db, cmd) => {
  return driver.db(db).command(cmd);
};

const buildInfo = driver => {
  return dbCommand(driver, "admin", { buildInfo: 1 });
};

const serverStats = driver => {
  return dbCommand(driver, "admin", { serverStatus: 1 });
};

module.exports = {
  /**
   * discover all databases in a mongodb instance
   */
  inspectDatabases(driver, options) {
    const adminDb = driver.db("admin").admin();
    return new Promise((resolve, _reject) => {
      const inspectResult = {
        databases: [],
        type: TreeNodeTypes.DATABASE
      };
      adminDb
        .listDatabases()
        .then(dbs => {
          const promises = [];
          // inspect into each database
          dbs.databases.map(database => {
            promises.push(inspectDatabase(driver, database.name));
          });
          Promise.all(promises)
            .then(values => {
              inspectResult.databases = _.sortBy(values, "name");
              resolve(inspectResult);
            })
            .catch(err => {
              console.error("failed to inspect database ", err);
            });
        })
        .catch(err => {
          console.error('get error:', err);
          if (options.currentDb) {
            inspectDatabase(driver, options.currentDb).then(value => {
              inspectResult.databases = [value];
              resolve(inspectResult);
            }).catch(err1 => console.error('failed to query current db ', err1));
          }
        });
    }).catch(err => {
      console.error("get an error ", err);
      return new Error(err);
    });
  },
  buildInfo,
  serverStats,
  getCollectionAttributes
};
