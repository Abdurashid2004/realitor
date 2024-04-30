const EventEmitter = require("events");

class ServerListener {
  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  startListen(client) {
    client.on("serverDescriptionChanged", event => {
      console.log("received serverDescriptionChanged");
      console.log(JSON.stringify(event, null, 2));
      this.eventEmitter.emit('reinspect', event);
    });

    client.on("serverHeartbeatStarted", event => {
      console.log("received serverHeartbeatStarted");
      console.log(JSON.stringify(event, null, 2));
    });

    client.on("serverHeartbeatSucceeded", event => {
      console.log("received serverHeartbeatSucceeded");
      console.log(JSON.stringify(event, null, 2));
    });

    client.on("serverHeartbeatFailed", event => {
      console.log("received serverHeartbeatFailed");
      console.log(JSON.stringify(event, null, 2));
    });

    client.on("serverOpening", event => {
      console.log("received serverOpening");
      console.log(JSON.stringify(event, null, 2));
    });

    client.on("serverClosed", event => {
      console.log("received serverClosed");
      console.log(JSON.stringify(event, null, 2));
    });

    client.on("topologyOpening", event => {
      console.log("received topologyOpening");
      console.log(JSON.stringify(event, null, 2));
    });

    client.on("topologyClosed", event => {
      console.log("received topologyClosed");
      console.log(JSON.stringify(event, null, 2));
    });

    client.on("topologyDescriptionChanged", event => {
      console.log("received topologyDescriptionChanged");
      console.log(JSON.stringify(event, null, 2));
      this.eventEmitter.emit('reinspect', event);
    });
  }

  on(event, cb) {
    this.eventEmitter.on(event, cb);
  }
}

module.exports = {ServerListener};