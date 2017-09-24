pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/EtherStream.sol";

contract TestEtherStream {

  function testItStoresAValue() {
    EtherStream etherStream = EtherStream(DeployedAddresses.EtherStream());

    etherStream.set(89);

    uint expected = 89;

    Assert.equal(etherStream.get(), expected, "It should store the value 89.");
  }

}
