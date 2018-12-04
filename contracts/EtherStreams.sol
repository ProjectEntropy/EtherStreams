pragma solidity ^0.4.10;

import "./Stream.sol";

// Used to build and track streams
contract EtherStreams{
  Stream[] public streams;

  constructor () 
  public
  {
    // The root stream
    newStream("EtherStreams", true);
  }

  // Get total of all streams created
  function getStreamCount() 
    public
    constant
    returns(uint streamCount)
  {
    return streams.length;
  }

  // Create a new stream
  function newStream(string _title, bool _public)
  public
  returns(Stream newStream)
  {
    Stream s = new Stream(msg.sender, _title, _public, address(this));
    streams.push(s);
    return s;
  }
}
