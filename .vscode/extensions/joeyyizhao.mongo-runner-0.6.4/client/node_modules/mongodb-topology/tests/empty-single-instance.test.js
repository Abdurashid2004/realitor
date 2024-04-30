const { launchSingleInstance, getRandomPort, killMongoInstance } = require('mlaunch-node');
const assert = require('assert');
const { connect } = require('../src');
const { MongoClient } = require('mongodb');
const _ = require('lodash');

describe('test single empty instance', () => {

  const mongoDbPort = getRandomPort();
  const url = `mongodb://localhost:${mongoDbPort}/test`;

  beforeAll((done) => {
    launchSingleInstance(mongoDbPort);
    setTimeout(() => {
      done();
    }, 3000);
  });

  afterAll(() => {
    killMongoInstance(mongoDbPort);
  });

  test('inspect empty instance', () => {
    return connect(url).then((inspector) => {
      return inspector.inspect();
    }).then((tree) => {
      assert.notEqual(tree.databases, undefined);
      assert.notEqual(tree.users, undefined);
      assert.notEqual(tree.roles, undefined);
      assert.equal(tree.replicaset, undefined);
    }).catch((err) => {
      console.error(err);
      assert.fail(err);
    });
  });
});
