const {launchSingleInstance, getRandomPort, killMongoInstance} = require('mlaunch-node');
const assert = require('assert');
const {connect} = require('../src');

describe('test inspect tree', () => {

  const mongoDbPort = getRandomPort();
  const url = `mongodb://localhost:${mongoDbPort}/test`;

  beforeAll((done) => {
    launchSingleInstance(mongoDbPort);
    setTimeout(() => {
      done();
    }, 3000);
  }, 10000);

  afterAll(() => {
    killMongoInstance(mongoDbPort);
  });

  it('test inspect tree', (done) => {
    connect(url).then((inspector) => {
      return inspector.inspect();
    }).then((tree) => {
      console.log(tree);
      assert.equal(tree.databases.length >=0, true);
      assert.equal(tree.users.length >= 0, true);
      assert.equal(tree.roles.length >= 0, true);
      done();
    }).catch(err => {
      console.error(err);
      assert.equal(err, undefined);
      done();
    });
  });

});
