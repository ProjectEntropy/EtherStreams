<template>
  <div>
    <streams></streams>
    <main class="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3 drop-here">
      <div class="row">
        <VideoPreview v-for="c in ContentStore.state.content" :key="c.magnet" :video="c" :client="client">
        </VideoPreview>
      </div>
    </main>
  </div>
</template>

<script>
import Streams from './Streams.vue'
import VideoPreview from './VideoPreview.vue'
import ContentStore from './../store/videos'


var dragDrop = require('drag-drop')
var WebTorrent = require('webtorrent')

var client = new WebTorrent()


export default {

  name: 'video_list',
  components: {
    'streams': Streams,
    'VideoPreview': VideoPreview,
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
      ContentStore,
      client
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
