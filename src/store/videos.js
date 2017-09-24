export default {
  state: {
    content: [
      
    ]
  },
  addContent (content) {
    this.state.content.push({content, date: Date.now()})
  }
}
