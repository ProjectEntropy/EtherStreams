var EtherStream = artifacts.require("./EtherStream.sol");

contract('EtherStream', function(accounts) {

  it("...should store the value 89.", function() {
    return EtherStream.deployed().then(function(instance) {
      etherStreamInstance = instance;

      // debugger

      return etherStreamInstance.newContent("Sentinel", "magnet:blahblah", {from: accounts[0]});
    }).then(function() {
      return etherStreamInstance.get.call();
    }).then(function(storedData) {
      assert.equal(storedData, 89, "The value 89 was not stored.");
    });
  });

});
