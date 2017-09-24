<template>
  <div class="VideoList">
    <div class="row">
      <div class="card drop-here" style="width: 80rem;">
        <div class="card-block">
          <h4 class="card-title">Drop Here</h4>
          <p class="card-text">Add new content to this stream</p>

        </div>
      </div>
    </div>

    <div class="row">
      <VideoPreview v-for="c in ContentStore.state.content" :video="c">
      </VideoPreview>


    </div>
  </div>
</template>

<script>
import VideoPreview from './VideoPreview.vue'
import ContentStore from './../store/videos'

var dragDrop = require('drag-drop')
var WebTorrent = require('webtorrent')

var client = new WebTorrent()


export default {

  name: 'hello',
  components: {
    'VideoPreview': VideoPreview
  },
  methods: {
    seedingStarted: function(torrent)
    {
      console.log('Client is seeding:', torrent.infoHash)

      // add to local store
      this.ContentStore.addContent({ magnet: torrent.magnetURI })

      this.$router.push({ name: 'watch', params: { magnet: torrent.magnetURI }})
    },
    newContent: function(files)
    {
      client.seed(files, this.seedingStarted)
    }
  },
  mounted: function()
  {
    // When user drops files on the browser, create a new torrent and start seeding it!
    dragDrop('.drop-here', this.newContent)
  },
  data () {
    return {
      ContentStore
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
