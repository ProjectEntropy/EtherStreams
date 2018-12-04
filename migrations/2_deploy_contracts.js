var EtherStreams = artifacts.require("./EtherStreams.sol");
var _Stream = artifacts.require("./Stream.sol");


module.exports = function(deployer) {
  deployer.deploy(EtherStreams);
};
