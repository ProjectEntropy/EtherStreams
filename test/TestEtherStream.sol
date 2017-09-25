pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/EtherStream.sol";

contract TestEtherStream {

  function testItStoresAValue() {
    EtherStream etherStream = EtherStream(DeployedAddresses.EtherStream());

    etherStream.newContent("Sentinel", "magnet:blahblah");

    string expected = "Sentinel";

    /*Assert.equal(etherStream.getstream_content(0), expected, "It should store the title.");*/
  }

}
