const {MongoClient, ObjectID} = require('mongodb');

const mongodbTopology = require('../src');

const options = {auth: {user: 'admin', password: ''}};
mongodbTopology.connect('mongodb://ds225902.mlab.com:25902/homesoft', options)
.then((inspector) => {
    // inspector.addTreeChangedListener((e) => {
    //     console.log('get new data:', e);
    // })
    // return inspector.simpleQuery('test', 'test', {'price': 1});
    return inspector.inspect({currentDb: 'homesoft'});
})
.then((data) => {
    console.log('get data:');
    console.log(((data)));
});



// MongoClient.connect('mongodb://localhost:27017', (err, driver) => {
//     if(err) {
//       reject(err);
//       return null;
//     }
//     driver.db('report').collection('test').find({}, {limit: 20}).toArray()
//     .then(d => console.log(d));
//   });