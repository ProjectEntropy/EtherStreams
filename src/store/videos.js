import EtherStreamContract from '../../build/contracts/EtherStream.json'
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
    console.log("establishWeb3")
    
    getWeb3
    .then(results => {
      window.web3 = results.web3
      this.instantiateContract(this)
    })
  },


  async instantiateContract(app) {
    const contract = require('truffle-contract')
    const etherStreams = contract(EtherStreamContract)

    etherStreams.setProvider(window.web3.currentProvider)

    let accounts = await window.web3.eth.getAccounts
    let dApp = await etherStreams.deployed()

    let count = await dApp.content_count.call(accounts[0])
    app.state.stream_count = await dApp.stream_count.call(accounts[0])

    // Loop across all the streams
    var i;
    for(i = 0; i < app.state.stream_count; i++)
    {
      var s = await dApp.streams(i)
      var s_obj = {
        name: s[0],
        address: s[1]
      }
     
      app.state.streams.push(s_obj)
    }
  },

  addContent (content) {
    this.state.content.push(content)
  },
  createContent (content) {
    window.stream_instance.newContent(title, magnet,  { from: window.web3.accounts[0] })
  }
}
