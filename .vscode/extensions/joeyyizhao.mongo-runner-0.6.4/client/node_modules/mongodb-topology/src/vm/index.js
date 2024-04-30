const { NodeVM } = require("vm2");

class DBSandBox {
  constructor(driver) {
    this.driver = driver;
  }

  runNativeCode(db, code) {
    let log = "";
    const l = e => {
      log += e;
    };
    const vm = new NodeVM({
      timeout: 1000,
      sandbox: { db },
      console: "redirect"
    });
    vm.on("console.log", l);
    vm.on('exit', (e) => console.log('xxxx'));
    vm.run(code);
    return log;
  }

  runNativeDBCode(dbName, code) {
    const db = this.driver.db(dbName);
    this.runNativeCode(db, code);
  }
}

module.exports = DBSandBox;
