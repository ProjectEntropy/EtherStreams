// import Vue from 'vue'
// import Hello from '@/components/Hello'

var EtherStream = artifacts.require("./EtherStream.sol");

contract('EtherStream', function(accounts) {

  it("...should store the value 89.", function() {
    return EtherStream.deployed().then(function(instance) {
      EtherStreamInstance = instance;

      return EtherStreamInstance.set(89, {from: accounts[0]});
    }).then(function() {
      return EtherStreamInstance.get.call();
    }).then(function(storedData) {
      assert.equal(storedData, 89, "The value 89 was not stored.");
    });
  });

});
