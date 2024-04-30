const {MongoClient} = require('mongodb');
const fs = require('fs');

const options = {
  sslCert: fs.readFileSync( "/Users/joeyzhao/tmp/mongodb.pem"),
  sslKey: fs.readFileSync( "/Users/joeyzhao/tmp/mongodb-cert.key"),
  ssl: true,
};

MongoClient.connect('mongodb://localhost:27018', options, (err, driver) => {
    if(err) {
      console.error(err);
      return null;
    }
    driver.db('report').collection('test').find({}, {limit: 20}).toArray()
    .then(d => console.log(d));
  });