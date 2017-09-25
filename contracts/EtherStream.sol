pragma solidity ^0.4.2;

contract EtherStream {
  // Content in this stream
  Content[] public content;
  uint public content_count = 0;

  // Substream contracts
  address[] public streams;
  uint public stream_count = 0;

  struct Content {
    string title;
    string uri;
    uint love;
    address creator;
  }

  function EtherStream ()
  {
    // Starter content
    newContent("Sintel", "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10");
  }

  // Add new content
  function newContent(string _title, string _uri) returns (uint content_id) {
    Content memory c;

    c.title = _title;
    c.uri = _uri;
    c.love = 1;
    c.creator = msg.sender;

    content.push(c);
    content_count++;

    return content_count;
  }

}
