const assert = require('assert');
const {TreeInspector} = require('../src');


describe('test jsonext parser', () =>{

  it('test parse json extension type', () => {
    const inspector = new TreeInspector();
    let json = inspector.getQueryObjectFromJsonExt({"_id": 'ObjectId(5ba2bfcf6d2a0312c7ec12c6)'});
    assert.equal(json._id, "5ba2bfcf6d2a0312c7ec12c6");
  });

});
