const _ = require('lodash');
const {TreeNodeTypes} = require('../tree-types');

module.exports = {
    /**
   * query users from mongodb instance
   *
   * @param db
   */
    inspectUsers: inspectUsers = (driver) => {
        const users = {
            name: 'Users',
            type: TreeNodeTypes.USERS,
            users: []
        };
        return new Promise(resolve => {
            const userCollection = driver
                .db('admin')
                .collection('system.users');
            if (!userCollection) {
                resolve(users);
                return;
            }
            userCollection.find({}, {
                _id: 1,
                user: 1,
                db: 1
            }).toArray((err, items) => {
                if (err || !items || items.length <= 0) {
                    resolve(users);
                    return;
                }
                const children = items.map(item => {
                    return { name: item._id, user: item.user, db: item.db, type: TreeNodeTypes.USERS };
                });
                users.users = _.uniqBy(children, e => {
                    return e.name;
                });
                resolve(users);
            });
        }).catch(err => {
            console.error('get error ', err);
            return users;
        });
    }
}