const {launchMongos, getRandomPort, killMongoInstance} = require('mlaunch-node');
const assert = require('assert');
const {connect} = require('../src');
const {MongoClient} = require('mongodb');
const _ = require('lodash');

describe('insepct shard cluster', () => {
  const mongoDbPort = getRandomPort();
  const mongosNum = 1;
  const configNum = 3;
  const shardNum = 3;
  const url = `mongodb://localhost:${mongoDbPort},localhost:${mongoDbPort+1},localhost:${mongoDbPort+2}/admin`;
  const user = 'testuser1';
  const password = '123456';

  beforeAll((done) => {
    launchMongos(mongoDbPort, mongosNum, ` --config ${configNum} --sharded ${shardNum} --auth --username ${user} --password ${password}` );
    setTimeout(() => done(), 3000);
  });

  afterAll(() => {
    killMongoInstance(mongoDbPort);
  });

  test('inspect configs replicaset', () => {
    return connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.inspectConfigs();
    }).then((configs) => {
      assert.equal(configs.configs.length, 3);
    }).catch((err) => {
      console.error(err);
      assert.fail(err);
    });
  });

  test('inspect shards replicaset', () => {
    return connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.inspectShards();
    }).then((shards) => {
      assert.equal(shards.shards.length, 3);
    }).catch((err) => {
      console.error(err);
      assert.fail(err);
    });
  });
});

