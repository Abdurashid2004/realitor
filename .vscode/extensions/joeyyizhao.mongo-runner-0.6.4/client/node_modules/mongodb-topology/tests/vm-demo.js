const {MongoClient} = require('mongodb');
const DBSandBox = require('../src/vm');

MongoClient.connect('mongodb://localhost:27017', (err, driver) => {
  const sandBox = new DBSandBox(driver);
  const log= sandBox.runNativeDBCode('admin', `
    db.admin().listDatabases((err, dbs) => {
      console.log(dbs);
    })
  `);
  console.log(log);
}); 
