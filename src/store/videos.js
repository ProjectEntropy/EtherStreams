import EtherStreamContract from '../../build/contracts/EtherStream.json'
import getWeb3 from './../util/getweb3'

export default {
  state: {
    web3: null,
    stream_contract: null,
    stream_instance: null,
    count: 0,
    content: [ ]
  },
  getWeb3(){
    console.log("getWeb3")
    getWeb3
    .then(results => {
      this.state.web3 = results.web3
      this.instantiateContract()
    })
  },
  instantiateContract() {
    const contract = require('truffle-contract')
    const etherStreams = contract(EtherStreamContract)
    etherStreams.setProvider(this.state.web3.currentProvider)

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      etherStreams.deployed().then((instance) => {
        // debugger
        console.log(Object.getOwnPropertyNames(instance))
        return this.state.stream_instance = instance
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return this.state.stream_instance.content_count.call(accounts[0])
      }).then((result) => {
        console.log(result)

        return this.state.count = [ result.c[0] ]
      }).then((result) => {

        for(var i = 0; i < this.state.count; i++)
        {
          console.log("loading content")
          this.state.stream_instance.content(i).then((result) => {
            console.log(result)
            this.addContent({ title: result[0], magnet: result[1], love: Number(result[2]), creator: result[3] })
          })
        }
      })
    })
  },
  addContent (content) {
    this.state.content.push(content)
  }
}
