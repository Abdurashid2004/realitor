const {launchSingleInstance, getRandomPort, killMongoInstance} = require('mlaunch-node');
const assert = require('assert');
const {connect} = require('../src');
const {MongoClient} = require('mongodb');
const _ = require('lodash');

describe('test build database tree', () => {

  const mongoDbPort = getRandomPort();
  const url = `mongodb://localhost:${mongoDbPort}/admin`;
  const user = 'testuser1';
  const password = '123456';

  beforeAll((done) => {
    launchSingleInstance(mongoDbPort, `--auth --username ${user} --password ${password}`);
    setTimeout(() => {
      MongoClient.connect(url, {useNewUrlParser: true, auth: {user, password}}, (err, driver) => {
        if (err) {
          console.log(err);
          assert.fail(err);
          return null;
        }
        let proms = [];
        proms.push(driver.db('testdb1').createCollection('testcol1_1'));
        proms.push(driver.db('testdb1').createCollection('testcol1_2'));
        proms.push(driver.db('testdb2').createCollection('testcol2_1'));
        proms.push(driver.db('testdb2').createCollection('testcol2_2'));
        Promise
          .all(proms)
          .then((res) => {
            proms = [];
            proms.push(driver.db('testdb1').collection('testcol1_1').createIndex('idx1', {name: 1}));
            proms.push(driver.db('testdb1').collection('testcol1_2').createIndex('idx1', {name: 1}));
            proms.push(driver.db('testdb2').collection('testcol2_1').createIndex('idx1', {name: 1}));
            proms.push(driver.db('testdb2').collection('testcol2_2').createIndex('idx1', {name: 1}));
            return Promise.all(proms);
          }).then(() => {
            const adminDb = driver.db('admin');
            return adminDb.addUser('user1', '123456', {roles:  [{
              role : "userAdmin",
              db   : 'test'
              }]});
          })
          .then(() => done());
      });
    }, 3000);
  }, 10000);

  afterAll(() => {
    killMongoInstance(mongoDbPort);
  });

  test('test build database tree', (done) => {
    connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.inspectDatabases();
    }).then((dbs) => {
      console.log(dbs);
      const myDbs = _.filter(dbs.databases, db => db.name.indexOf('testdb') >= 0);
      console.log('mydbs:', myDbs[0])
      assert.equal(myDbs[0].name, 'testdb1');
      assert.equal(myDbs[0].type, 'database');
      assert.equal(myDbs[1].name, 'testdb2');
      assert.equal(myDbs[1].type, 'database');
      assert.equal(myDbs[0].collections[0].name, 'testcol1_1');
      assert.equal(myDbs[0].collections[0].type, 'collection');
      assert.equal(myDbs[0].collections[0].dbName, 'testdb1');
      assert.equal(myDbs[0].collections[1].name, 'testcol1_2');
      assert.equal(myDbs[0].collections[1].type, 'collection');
      assert.equal(myDbs[0].collections[1].dbName, 'testdb1');
      assert.equal(myDbs[1].collections[0].name, 'testcol2_1');
      assert.equal(myDbs[1].collections[0].type, 'collection');
      assert.equal(myDbs[1].collections[1].name, 'testcol2_2');
      assert.equal(myDbs[1].collections[1].type, 'collection');
      assert.equal(myDbs[0].collections[0].indexes[0].name, '_id_');
      assert.equal(myDbs[0].collections[0].indexes[1].name, 'idx1_1');
      assert.equal(myDbs[0].collections[0].indexes[0].type, 'index');
      assert.equal(myDbs[0].collections[1].indexes[0].name, '_id_');
      assert.equal(myDbs[0].collections[1].indexes[1].name, 'idx1_1');
      assert.equal(myDbs[0].collections[1].indexes[0].type, 'index');
      assert.equal(myDbs[1].collections[0].indexes[1].name, 'idx1_1');
      assert.equal(myDbs[1].collections[0].indexes[0].type, 'index');
      assert.equal(myDbs[1].collections[1].indexes[1].name, 'idx1_1');
      assert.equal(myDbs[1].collections[1].indexes[0].type, 'index');
      done();
    }).catch(err => {
      console.error(err);
      assert.equal(err, undefined);
      done();
    });
  });

  xtest('test build roles', (done) => {
    connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.inspectRoles();
    }).then((roles) => {
      console.log('roles :', roles);
      done();
    });
  });

  test('test users', (done) => {
    connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.inspectUsers();
    }).then((users) => {
      assert.equal(users.users.length > 0, true);
      assert.equal(users.users[1].user, 'user1');
      assert.equal(users.users[1].db, 'admin');
      assert.equal(users.users[1].type, 'users');
      assert.equal(users.users[0].user, 'testuser1');
      assert.equal(users.users[0].db, 'admin');
      assert.equal(users.users[0].type, 'users');
      done();
    });
  });

  test('test database build info', (done) => {
    connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.buildInfo();
    }).then((buildInfo) => {
      assert.equal(buildInfo.ok, 1);
      assert.notEqual(buildInfo.version, undefined);
      done();
    });
  });

  test('test database server status', (done) => {
    connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.serverStats();
    }).then((stats) => {
      assert.equal(stats.ok, 1);
      done();
    });
  });

  test('test get collection attributes', (done) => {
    connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.getCollectionAttributes('testdb1', 'testcol1_1');
    }).then((fields) => {
      assert.equal(Array.isArray(fields), true);
      done();
    });
  });
});
