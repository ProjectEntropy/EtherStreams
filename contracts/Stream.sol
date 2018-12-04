pragma solidity ^0.4.10;

import "./EtherStreams.sol";

// A stream of content and other streams
contract Stream {

  // About this stream
  uint      public created;
  address   public owner;
  string    public title;
  bool      public public_stream;

  EtherStreams public stream_factory;
  
  // Content in this stream
  Content[] public content;
  uint public content_count;

  // Substream contracts
  Stream[] public streams;
  uint public stream_count;

  // struct Stream {
  //   string title;
  //   string preview_uri;
  //   address addr;
  //   uint love;
  //   address creator;
  //   uint created;
  // }

  struct Content {
    string title;
    string preview_uri;
    string uri;
    uint love;
    address creator;
    uint created;
  }

  constructor (address _owner, string _title, bool _public_stream, address _streamFactoryAddress)
  public
  {
    created = block.timestamp;
    owner = _owner;
    title = _title;
    public_stream = _public_stream;
    stream_factory = EtherStreams(_streamFactoryAddress);

    // Example content
    // newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7c21592cc47997d119a49e20904a81e81f14c7e7");
    // newContent("Sailing to Barrier", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:8784ff95f26ea6b7e5347bb07c4ced42d133bcf6");
    // newContent("How to watch Ethereum Contracts", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:8784ff95f26ea6b7e5347bb07c4ced42d133bcf6");

    // string _title, address _addr, string _preview_uri
  }

  // Add new content
  function newContent(string _title, string _uri, string _preview_uri)
  public
  returns (uint ret_content_count) {
    Content memory c;

    c.title = _title;
    c.uri = _uri;
    c.preview_uri = _preview_uri;

    c.love = 1;             // Everything starts with 1 love
    c.creator = msg.sender; // creator

    c.created = block.timestamp; // Current block timestamp UTC

    content.push(c);
    content_count = content.length;
    emit ContentAdded(content_count, c.title, c.uri, c.preview_uri);

    return content_count;
  }

  // Add a new substream
  function newStream(string _title, string _preview_uri)
  public
  returns (uint ret_streams_count) {
    Stream s = stream_factory.newStream( _title, false );

    streams.push(s);
    stream_count = streams.length;

    return stream_count;    
  }


  // Give some thanks to the creator of this content
  function giveLove(uint content_id)
  public
  payable
  {
    // Add love to content
    content[content_id].love += msg.value;

    // send 1% to owner of stream
    // owner.transfer(msg.value * 0.01);

    // cascade up the tree giving little bits to everyone until theres no more
    // but also not blow the gas limit

    // re-order list

    // Forward remaining ETH to creator
    content[content_id].creator.transfer(msg.value);
  }


  event ContentAdded(uint content_id, string title, string uri, string preview_uri);
}
