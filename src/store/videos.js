import EtherStreamContract from '../../build/contracts/EtherStream.json'
import getWeb3 from './../util/getweb3'

export default {
  state: {
    stream_contract: null,
    stream_instance: null,
    count: 0,
    content: [ ]
  },
  establishWeb3(){
    console.log("establishWeb3")
    // console.log(this)
    getWeb3
    .then(results => {
      // debugger
      window.web3 = results.web3
      this.instantiateContract()
    })
  },


  instantiateContract() {
    const contract = require('truffle-contract')
    const etherStreams = contract(EtherStreamContract)

    etherStreams.setProvider(window.web3.currentProvider)

    // Get accounts.
    window.web3.eth.getAccounts((error, accounts) => {
      etherStreams.deployed().then((instance) => {
        // debugger
        console.log(Object.getOwnPropertyNames(instance))

        window.accounts = accounts
        return window.stream_instance = instance
      })
      // .then((result) => {
      //   // Get the value from the contract to prove it worked.
      //   console.log("aobut to get content count")

      //   return window.stream_instance.content_count.call(accounts[0])
      // })
      .then((result) => {
        console.log(result)

        return this.state.count = [ result.c[0] ]
      }).then((result) => {

        for(var i = 0; i < this.state.count; i++)
        {
          console.log("loading content")
          window.stream_instance.content(i).then((result) => {
            console.log(result)
            console.log("about to add content")

            this.addContent(
              {
                title: result[0],
                preview_uri: result[1],
                magnet: result[2],
                love: Number(result[3]),
                creator: result[4]
              })
          })
        }
      })
    })
  },

  addContent (content) {
    this.state.content.push(content)
  },
  createContent (content) {
    window.stream_instance.newContent(title, magnet,  { from: window.web3.accounts[0] })
  }
}
