pragma solidity ^0.4.10;

// Used to build new streams
contract StreamFactory{
  EtherStream[] public streams;

  // Constructor
  function StreamFactory(){
  }

  // Create a new stream
  function newStream(string _title, bool _public)
  public
  returns(EtherStream newStream)
  {
    EtherStream s = new EtherStream(msg.sender, _title, _public);
    return s;
  }
}


// A stream of content and other streams
contract EtherStream {

  // About this stream
  uint public created;
  address public owner;
  string public title;
  bool public public_stream;

  StreamFactory public stream_factory;

  // Content in this stream
  Content[] public content;
  uint public content_count;

  // Substream contracts
  Stream[] public streams;
  uint public stream_count;

  struct Stream {
    string title;
    string preview_uri;
    address addr;
    uint love;
    address creator;
    uint created;
  }

  struct Content {
    string title;
    string preview_uri;
    string uri;
    uint love;
    address creator;
    uint created;
  }

  function EtherStream (address _owner, string _title, bool _public_stream)
  {
    created = block.timestamp;
    owner = _owner;
    title = _title;
    public_stream = _public_stream;


    // Example content
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:8784ff95f26ea6b7e5347bb07c4ced42d133bcf6");
    newContent("Sailing to Barrier", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:8784ff95f26ea6b7e5347bb07c4ced42d133bcf6");
    newContent("How to watch Ethereum Contracts", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:8784ff95f26ea6b7e5347bb07c4ced42d133bcf6");


    newStream();
    /*newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:8784ff95f26ea6b7e5347bb07c4ced42d133bcf6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10", "magnet:?xt=urn:btih:7f22ddf7f9dfccd028de9f5ebdb72153a2c80be6");*/

  }

  // Add new content
  function newContent(string _title, string _uri, string _preview_uri) returns (uint content_count) {
    Content memory c;

    c.title = _title;
    c.uri = _uri;
    c.preview_uri = _preview_uri;

    c.love = 1;             // Everything starts with 1 love
    c.creator = msg.sender; // creator

    c.created = block.timestamp; // Current block timestamp UTC

    content.push(c);
    content_count++;
    ContentAdded(content_count, c.title, c.uri, c.preview_uri);

    return content_count;
  }

  // Add a new substream
  function newStream(string _title, address _addr, string _preview_uri) returns (uint streams_count) {
    Stream memory s;

    s.title = _title;
    s.addr = _addr;
    s.preview_uri = _preview_uri;

    s.love = 1;             // Everything starts with 1 love
    s.creator = msg.sender; // creator

    s.created = block.timestamp; // Current block timestamp UTC

    streams.push(c);
    streams_count++;

    return streams_count;
  }


  // Give some thanks to the creator of this content
  function giveLove(uint content_id) payable
  {
    // Add love to content
    content[content_id].love += msg.value;

    // send 1% to owner of stream
    /*owner.transfer(msg.value * 0.01);*/

    // re-order list

    // Forward remaining ETH to creator
    content[content_id].creator.transfer(msg.value);
  }


  event ContentAdded(uint content_id, string title, string uri, string preview_uri);
}
