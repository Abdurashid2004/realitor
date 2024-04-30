const {MongoClient} = require('mongodb');
const TreeInspector = require('./tree-inspector');
const {TreeNodeTypes} = require('./tree-types');

const defaultOptions = {useNewUrlParser: true};

const connect = (url, options) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, Object.assign(defaultOptions, options), (err, driver) => {
      if(err) {
        reject(err);
        return null;
      }
      const builder = new TreeInspector(driver);
      resolve(builder);
    });
  });
};

module.exports = {
  connect, TreeNodeTypes, TreeInspector
};
