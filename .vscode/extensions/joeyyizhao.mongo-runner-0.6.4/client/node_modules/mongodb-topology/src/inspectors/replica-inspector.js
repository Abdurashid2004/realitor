const _ = require('lodash');
const {TreeNodeTypes} = require('../tree-types');


const getMemberState = (member) => {
  if (member.state == 0) {
    return '(STARTUP)'; // startup
  }
  if (member.state == 1) {
    return '(P)'; // primary
  }
  if (member.state == 2) {
    return '(S)'; // secondary
  }
  if (member.state == 3) {
    return '(R)'; // recovering
  }
  if (member.state == 5) {
    return '(STARTUP2)';
  }
  if (member.state == 7) {
    return '(A)'; // arbiter
  }
  if (member.state == 8) {
    return '(D)'; // down
  }
  if (member.state == 9) {
    return '(ROLLBACK)';
  }
  if (member.state == 10) {
    return '(REMOVED)';
  }
  return '(UNKNOWN)';
}

module.exports = {
  inspectReplicaset: (driver) => {
    const adminDb = driver.db('admin').admin();
    const replica = {
      name: 'Replica Set',
      replicaset: [],
      type: TreeNodeTypes.REPLICASET
    };
    return new Promise(resolve => {
      adminDb
        .command({
          replSetGetStatus: 1
        }, (err, result) => {
          if (!result) {
            resolve(null);
            return;
          }
          if (result && result.members && result.members.length > 0) {
            replica.replicaset = _.map(result.members, member => {
              const memberState = getMemberState(member);
              let treeNodeType;
              switch (memberState) {
                case '(P)':
                  treeNodeType = TreeNodeTypes.PRIMARY;
                  break;
                case '(S)':
                  treeNodeType = TreeNodeTypes.SECONDARY;
                  break;
                case '(A)':
                  treeNodeType = TreeNodeTypes.ARBITER;
                  break;
                default:
                  treeNodeType = TreeNodeTypes.REPLICA_MEMBER;
              }
              return {
                name: member.name + ' ' + memberState,
                type: treeNodeType
              };
            });
          }
          resolve(replica);
        });
    }).catch(err => {
      console.error('failed to get replica set ', err);
    });
  }
};
