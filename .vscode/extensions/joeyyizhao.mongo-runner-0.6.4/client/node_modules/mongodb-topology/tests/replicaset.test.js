const {launchReplicaSet, getRandomPort, killMongoInstance} = require('mlaunch-node');
const assert = require('assert');
const {connect} = require('../src');
const {MongoClient} = require('mongodb');
const _ = require('lodash');

describe('insepct replica set members', () => {
  const mongoDbPort = getRandomPort();
  const nodes = 3;
  const url = `mongodb://localhost:${mongoDbPort},localhost:${mongoDbPort+1},localhost:${mongoDbPort+2}/test`;
  const user = 'testuser1';
  const password = '123456';

  beforeAll((done) => {
    launchReplicaSet(mongoDbPort, nodes, '');
    setTimeout(() => done(), 3000);
  });

  afterAll(() => {
    killMongoInstance(mongoDbPort);
  });

  test('inspect replica', () => {
    connect(url).then((inspector) => {
      return inspector.inspect();
    }).then((tree) => {
      console.log(tree);
    }).catch((err) => {
      console.error(err);
      assert.fail(err);
    });
  });
});

