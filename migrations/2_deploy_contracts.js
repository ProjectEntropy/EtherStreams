var EtherStream = artifacts.require("./EtherStream.sol");

module.exports = function(deployer) {
  deployer.deploy(EtherStream, "0x00000", "EtherStreams", true);
};
