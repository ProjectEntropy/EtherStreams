pragma solidity ^0.4.2;

contract EtherStream {
  uint storedData;

  string[] public videos;

  function set(uint x) {
    storedData = x;
  }

  function get() constant returns (uint) {
    return storedData;
  }
}
