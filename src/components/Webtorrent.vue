<!-- This component renders whatever magnet link is provided into the DOM -->
<template>
  <div id='containerElement'>
  </div>
</template>

<script>
import WebTorrentStore from './../store/webtorrent'

export default {
  name: "webtorrentElm",
  props: ['magnet'],
  data () {
    return {
      loading: true,
      color: "black",
      size: "20em",
      WebTorrentStore
    }
  },

  mounted: function() {
    this.$data.WebTorrentStore.load()
    this.$data.WebTorrentStore.addTorrent(this.$props.magnet)
  }
}

</script>

<style scoped>
  .v-spinner
  {
    position: absolute;
    bottom: 50%;
    left: 50%;
    margin-left: -30px;
    margin-bottom: -30px;
  }
</style>
