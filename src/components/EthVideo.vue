<template>
  <div class='video-container'>
    <div class='embed-responsive'>
      <div class='video'>
        <MoonLoader ></MoonLoader>
      </div>
    </div>

    </hr>


    <span class="">
      <h2>
        💕
      </h2>
    </span>
  </div>
</template>

<script>
var WebTorrent = require('webtorrent')
import MoonLoader from './Loader'

export default {
  name: "ethvideo",
  props: ['magnet', 'video'],
  components: { 'MoonLoader': MoonLoader },
  data () {
    return {
      loading: true,
      color: "black",
      size: "20em"
    }
  },

  mounted: function() {
    // var torrentId = this.magnet
    var client = new WebTorrent()

    console.log("torrent id")

    console.log(unescape(this.magnet))

    // Hack on extra trackers incase there are none
    var magnetURI = unescape(this.magnet + '&tr=wss://tracker.openwebtorrent.com&tr=wss://tracker.btorrent.xyz&tr=wss://tracker.fastcast.nz')


    client.add(magnetURI, function (torrent) {
      // Got torrent metadata
      console.log('Client is downloading:', torrent.infoHash)

      var content_file

      if(torrent.files.length == 1)
      {
        content_file = torrent.files[0]
      }
      else {
         torrent.files.forEach(function (file) {
           console.log(file)
           var name = file.name.toLowerCase()

           // If this is renderable content
           if(/\.(mp4|m4v|webm|ogg|mp3)$/i.test(name))
           {
             // make it the file to render unless there is a bigger file
             if(content_file == null)
             {
               content_file = file
             }
             else if(file.length > content_file.length)
             {
               content_file = file
             }
           }
         })
      }

      console.log(content_file)
      if(content_file)
      {
        content_file.appendTo('.video')
      }
      else
      {
        alert("Unable to render any files from torrent")
      }

    })
  }
}


</script>

<style scoped>
  .video
  {
    background: black;
    min-height: 600px;
  }

  .v-spinner
  {
    position: absolute;
    bottom: 50%;
    left: 50%;
    margin-left: -30px;
    margin-bottom: -30px;
  }
</style>
