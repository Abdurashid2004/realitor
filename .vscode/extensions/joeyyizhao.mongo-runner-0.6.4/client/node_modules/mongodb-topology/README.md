# MongoDB Tree

This project is used to load tree topology tree from MongoDB server in NodeJS. It works with MongoDB single instance, Replica Set as well as Shard Cluster. The tree includes Database List, Collection List, Index, ReplicaSet Members, Shard Cluster Memebers, Users, Roles.

## Database Inspector

- Connect to a singole MongoDB instance

```javascript
const mongodbTopology = require('mongodb-topology');

const options = {};
mongodbTopology.connect('mongodb://localhost:27017', options)
.then((inspector) => {
    return inspector.inspect();
})
.then((data) => {
    console.log((JSON.stringify(data)));
});
```

It will print the topology tree for this instance as below. 
```json
{
  "databases": [
    {
      "name": "admin",
      "type": "database",
      "collections": [
        {
          "name": "system.roles",
          "type": "collection",
          "dbName": "admin",
          "indexes": [{ "name": "role_1_db_1", "type": "index" }]
        },
        {
          "name": "system.users",
          "type": "collection",
          "dbName": "admin",
          "indexes": [{ "name": "user_1_db_1", "type": "index" }]
        },
        { "name": "system.version", "type": "collection", "dbName": "admin" }
      ]
    },
    {
      "name": "config",
      "type": "database",
      "collections": [
        {
          "name": "system.sessions",
          "type": "collection",
          "dbName": "config",
          "indexes": [{ "name": "lsidTTLIndex", "type": "index" }]
        }
      ]
    },
    {
      "name": "local",
      "type": "database",
      "collections": [
        { "name": "startup_log", "type": "collection", "dbName": "local" }
      ]
    },
    {
      "name": "report",
      "type": "database",
      "collections": [
        { "name": "test", "type": "collection", "dbName": "report" }
      ]
    },
    {
      "name": "test",
      "type": "database",
      "collections": [
        {
          "name": "test",
          "type": "collection",
          "dbName": "test",
          "indexes": [{ "name": "name_1", "type": "index" }]
        }
      ]
    }
  ],
  "users": [
    { "name": "admin.admin", "user": "admin", "db": "admin", "type": "user" },
    { "name": "admin.test", "user": "test", "db": "admin", "type": "user" }
  ],
  "roles": [
    {
      "db": "admin",
      "roles": [
        {
          "name": "Built-In",
          "roles": [
            {
              "name": "__queryableBackup",
              "db": "admin",
              "type": "default_role"
            },
            { "name": "__system", "db": "admin", "type": "default_role" },
            { "name": "backup", "db": "admin", "type": "default_role" },
            { "name": "clusterAdmin", "db": "admin", "type": "default_role" },
            { "name": "clusterManager", "db": "admin", "type": "default_role" },
            { "name": "clusterMonitor", "db": "admin", "type": "default_role" },
            { "name": "dbAdmin", "db": "admin", "type": "default_role" },
            {
              "name": "dbAdminAnyDatabase",
              "db": "admin",
              "type": "default_role"
            },
            { "name": "dbOwner", "db": "admin", "type": "default_role" },
            { "name": "enableSharding", "db": "admin", "type": "default_role" },
            { "name": "hostManager", "db": "admin", "type": "default_role" },
            { "name": "read", "db": "admin", "type": "default_role" },
            {
              "name": "readAnyDatabase",
              "db": "admin",
              "type": "default_role"
            },
            { "name": "readWrite", "db": "admin", "type": "default_role" },
            {
              "name": "readWriteAnyDatabase",
              "db": "admin",
              "type": "default_role"
            },
            { "name": "restore", "db": "admin", "type": "default_role" },
            { "name": "root", "db": "admin", "type": "default_role" },
            { "name": "userAdmin", "db": "admin", "type": "default_role" },
            {
              "name": "userAdminAnyDatabase",
              "db": "admin",
              "type": "default_role"
            }
          ]
        }
      ],
      "type": "roles"
    },
    {
      "db": "test",
      "roles": [{ "name": "role1", "db": "test", "type": "role" }],
      "type": "roles"
    }
  ]
}


```

It includes basically `databases`, `collections list` under each datbase, `users` under the system and `roles`.

- If you don't want `MongoDB Topology` manages your connection, you can create a connection driver instance and pass it to Topology class:

```javascript
const inspector = new TreeInspector(driver);
inspector.inspect()
  .then((tree) => {
    console.log('get mongodb tree');
  });
```

## Database/Collection Inspector

Collection list is defined as an array element under `database`. Each collection has its name and children. Collection children can be `index` as below example.

```javascript

connect(url, {auth: {user, password}}).then((inspector) => {
      return inspector.inspectDatabases();
}).then((dbs) => console.log(dbs));

{
  "databases": [
    {
      "name": "admin",
      "type": "database",
      "collections": [
        {
          "name": "system.roles",
          "type": "collection",
          "dbName": "admin",
          "indexes": [{ "name": "role_1_db_1", "type": "index" }]
        },
        {
          "name": "system.users",
          "type": "collection",
          "dbName": "admin",
          "indexes": [{ "name": "user_1_db_1", "type": "index" }]
        },
        { "name": "system.version", "type": "collection", "dbName": "admin" }
      ]
    },
    {
      "name": "config",
      "type": "database",
      "collections": [
        {
          "name": "system.sessions",
          "type": "collection",
          "dbName": "config",
          "indexes": [{ "name": "lsidTTLIndex", "type": "index" }]
        }
      ]
    },
    {
      "name": "local",
      "type": "database",
      "collections": [
        { "name": "startup_log", "type": "collection", "dbName": "local" }
      ]
    },
    {
      "name": "report",
      "type": "database",
      "collections": [
        { "name": "test", "type": "collection", "dbName": "report" }
      ]
    },
    {
      "name": "test",
      "type": "database",
      "collections": [
        {
          "name": "test",
          "type": "collection",
          "dbName": "test",
          "indexes": [{ "name": "name_1", "type": "index" }]
        }
      ]
    }
  ],
  "type": "database"
}

```

## ReplicaSet Members

The replica set members json format is defined:

```javascript

connect(url, {auth: {user, password}})
  .then((inspector) => {
      return inspector.inspectReplicaMembers();
  }).then((replica) => console.log(replica));


"replicaset": [
    {
      "text": "localhost:1111 (P)",
      "type": "primary"
    },
    {
      "text": "localhost:1112 (S)",
      "type": "secondary"
    },
    {
      "text": "localhost:1113 (S)",
      "type": "secondary"
    }
]
```

## Inspect Users

```javascript
connect(url, {auth: {user, password}})
  .then((inspector) => {
      return inspector.inspectUserss();
  }).then((users) => console.log(users));

{
   "users": [
        {
            "name": "admin.admin",
            "user": "admin",
            "db": "admin",
            "type": "user"
        },
        {
            "name": "admin.test",
            "user": "test",
            "db": "admin",
            "type": "user"
        }
    ]
}
```

## Find collection attributes

MongoDB is a NoSQL database which means it doesn't usually have a schema on each collection, although the latest version supports Json Schema. There is a need to find the general attributes in each collection. The method `getCollectionAttributes()` returns the attributes by finding the first 20 document from the given collection. It is not 100% correct but it should be find for most cases.

```javascript
connect(url)
    .then((inspector) => {
      return inspector.getCollectionAttributes(dbName, collectionName);
    }).then((fields) => {
      // fields is an array of attribute names
    });
```

## Shard Cluster Inspector

There are `mongos`, `config replicaset` and `shard replicaset` inside a shard cluster environment.

Call the general `inspect` method agains the shard cluster URL will give you the cluster topology.

```javascript
mongodbTopology.connect('mongodb://localhost:27017/test')
.then((inspector) => {
    return inspector.inspect();
})
.then((data) => {
    console.log((JSON.stringify(data)));
});
```

You can also get separater replicaset from the cluster:

```javascript
> inspector.inspectConfigs();   // gives your the config replicaset structure

OUTPUT: 
{ name: 'Config Servers',
  children:
  [ { name: 'localhost:12772', type: 'config' },
     { name: 'localhost:12773', type: 'config' },
     { name: 'localhost:12774', type: 'config' } 
  ] 
}

> inspect.inspectShards(); // get the shard replica set 

OUTPUT:

{
  "name": "Shards",
  "children": [
    {
      "name": "shard01",
      "children": [
        { "name": "localhost:12763", "type": "shard" },
        { "name": "localhost:12764", "type": "shard" },
        { "name": "localhost:12765", "type": "shard" }
      ]
    },
    {
      "name": "shard02",
      "children": [
        { "name": "localhost:12766", "type": "shard" },
        { "name": "localhost:12767", "type": "shard" },
        { "name": "localhost:12768", "type": "shard" }
      ]
    },
    {
      "name": "shard03",
      "children": [
        { "name": "localhost:12769", "type": "shard" },
        { "name": "localhost:12770", "type": "shard" },
        { "name": "localhost:12771", "type": "shard" }
      ]
    }
  ]
}

> inspect.inspectMongos(); // get the mongos topology

OUTPUT:
{
  "text": "Routers",
  "children": [{ "text": "localhost:12762", "type": "mongos" }]
}
```