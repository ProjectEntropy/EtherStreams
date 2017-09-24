var EtherStream = artifacts.require("./EtherStream.sol");

module.exports = function(deployer) {
  deployer.deploy(EtherStream);
};
