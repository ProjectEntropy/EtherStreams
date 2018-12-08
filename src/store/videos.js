import EthStream from '../../build/contracts/Stream.json'
import EtherStreams from '../../build/contracts/EtherStreams.json'
import getWeb3 from './../util/getweb3'

export default {
  state: {
    stream_contract: null,
    stream_instance: null,
    stream_count: 0,
    streams: [ ],
    count: 0,
    content: [ ]
  },
  establishWeb3(){
    getWeb3
    .then(results => {
      window.web3 = results.web3
      this.instantiateContract(this)
    })
  },


  async instantiateContract(app) {
    const contract = require('truffle-contract')
    const etherStreams = contract(EtherStreams)
    const streeeem = contract(EthStream)

    etherStreams.setProvider(window.web3.currentProvider)
    streeeem.setProvider(window.web3.currentProvider)

    let accounts  = await window.web3.eth.getAccounts
    let EtherStreamsDapp      = await etherStreams.deployed()

    // Get the root stream
    let stream_count      = await EtherStreamsDapp.getStreamCount()
    console.log("stream_count", stream_count)
    
    let dAppAddr      = await EtherStreamsDapp.streams(0)
    let dApp = streeeem.at(dAppAddr)

    window.stream_instance = dApp
    window.accounts = accounts

    app.state.content_count   = await dApp.content_count.call(accounts[0])
    app.state.stream_count    = await dApp.stream_count.call(accounts[0])

    // Loop across all the streams inside this stream
    var i;
    for(i = 0; i < app.state.stream_count; i++)
    {
      var s = await dApp.streams(i)
      
      let s_obj = streeeem.at(dAppAddr)

      console.log("stream", s_obj)
      var s_obj = {
        owner: await s_obj.owner(),
        name: await s_obj.title(),
        address: s
      }
     
      app.state.streams.push(s_obj)
    }

    // get all content inside this stream
    var i;
    for(i = 0; i < app.state.content_count; i++)
    {
      var c = await dApp.content(i)
      console.log("content", c)
      var c_obj = {
        name: c[0],
        preview_uri: c[1],
        magnet: c[2],
        id: i
      }
     
      app.state.content.push(c_obj)
    }
  },

  

  addContent(content) {
    this.state.content.push(content)
  },

  addStream(title, magnet) {
    window.stream_instance.newStream(title, magnet, { from: window.web3.eth.accounts[0], gas:3000000 })
  },

  createContent(title, magnet) {
    window.stream_instance.newContent(title, magnet, magnet, { from: window.web3.eth.accounts[0], gas:3000000 })
  }
}
