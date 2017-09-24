<template>
  <div class='video-container'>
    <div class='embed-responsive'>
      <div class='video'>
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

export default {
  name: "ethvideo",
  props: ['magnet', 'video'],
  methods: {
    loadVideo: function(torrent)
    {
      console.log("loadVideo")
      // Torrents can contain many files. Let's use the .mp4 file
      var file = torrent.files.find(function (file) {
        console.log("file")
        console.log(file)

        return file.name.endsWith('.mp4')
        //
      })

      // Display the file by adding it to the DOM.
      // Supports video, audio, image files, and more!

      // debugger
      file.appendTo(this.$el)
    },
  },


  mounted: function() {
    // var torrentId = this.magnet
    var client = new WebTorrent()

    console.log("torrent id")

    console.log(unescape(this.magnet))

    // Hack on extra trackers incase there are none
    var magnetURI = unescape(this.magnet + '&tr=wss://tracker.openwebtorrent.com&tr=wss://tracker.btorrent.xyz&tr=wss://tracker.fastcast.nz')
    

    client.add(magnetURI, function (torrent) {
      // Got torrent metadata!
      console.log('Client is downloading:', torrent.infoHash)

      var content_file

      if(torrent.files.length == 1)
      {
        content_file = torrent.files[0]
      }
      else {
         torrent.files.forEach(function (file) {
           var name = file.name.toLowerCase()

           if(name.endsWith('.mp4'))
           {
             content_file = file
           }
           else if(name.endsWith('.webm'))
           {
             content_file = file
           }
           else if(name.endsWith('.ogg'))
           {
             content_file = file
           }
           if(name.endsWith('.mp3'))
           {
             content_file = file
           }
         })
      }



      console.log(content_file)


      content_file.appendTo('.video')
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
</style>
