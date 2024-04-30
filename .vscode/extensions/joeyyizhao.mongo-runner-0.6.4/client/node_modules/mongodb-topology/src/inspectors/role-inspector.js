const _ = require('lodash');
const {TreeNodeTypes} = require('../tree-types');

const inspectDBRoles = (driver, currentDb) => {
    return new Promise(resolve => {
        const dbName = currentDb.name;
        const showBuiltin = dbName === 'admin';
        driver
            .db(dbName)
            .command({ rolesInfo: 1, showBuiltinRoles: showBuiltin })
            .then(roleList => {
                const roles = {
                    db: dbName,
                    roles: [],
                    type: TreeNodeTypes.ROLES
                };
                if (!roleList || roleList.length <= 0) {
                    resolve(roles);
                    return roles;
                }
                if (showBuiltin) {
                    roles.roles[0] = {
                        name: 'Built-In',
                        roles: []
                    };
                }
                _.each(roleList.roles, role => {
                    if (showBuiltin && role.isBuiltin) {
                        roles
                            .roles[0]
                            .roles
                            .push({ name: role.role, db: role.db, type: TreeNodeTypes.DEFAULT_ROLE });
                    } else {
                        roles
                            .roles
                            .push({ name: role.role, db: role.db, type: TreeNodeTypes.ROLE });
                    }
                });
                resolve(roles);
            })
            .catch(err => {
                console.error('inspectDBRoles error ', err);
                resolve();
            });
    });
};

module.exports = {
    inspectRoles: (driver) => {
        const adminDb = driver.db('admin').admin();
        const allRoles = {
            name: 'Roles',
            type: TreeNodeTypes.ROLES
        };
        return new Promise(resolve => {
            const promises = [];
            adminDb
                .listDatabases()
                .then(dbs => {
                    _.map(dbs.databases, currentDb => {
                        promises.push(inspectDBRoles(driver, currentDb));
                    });
                    Promise
                        .all(promises)
                        .then(values => {
                            allRoles.roles = values
                                .filter(roles => {
                                    return !roles.roles.length <= 0;
                                });
                            resolve(allRoles);
                        });
                })
                .catch(err => {
                    console.warn(err.message);
                    resolve(allRoles);
                });
        }).catch(err => {
            console.error('get error ', err);
            return allRoles;
        });
    },

    
}