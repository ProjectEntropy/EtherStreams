# EtherStreams

Streaming peer to peer content for creators

## General Idea

There's a single root "Stream" which can have content or streams added to it.

Streams are kinda like channels of content, but can also be public (so anyone can add to them). Streams can have both content and **other Streams** added to them, so the resulting data structure is a tree.

Content can be added as a magnet link posted to the Ethereum contract and thrown out to the swarms

Clicking on some content fires up WebTorrent and injects whatever seems to be the main file into the DOM (right now only images / audio / video, but really this could also be JS)

## Build Setup

``` bash
# install dependencies
npm install

# Start local ethereum node (or testrpc)
testrpc

# Deploy contracts
truffle compile
truffle migrate


# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
