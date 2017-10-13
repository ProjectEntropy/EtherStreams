<!-- This component renders whatever magnet link is provided into the DOM -->
<template>
  <div class='embed-responsive'>
    <MoonLoader></MoonLoader>
  </div>
</template>

<script>
import MoonLoader from './Loader'

export default {
  name: "webtorrent",
  props: ['magnet', 'client'],
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
    console.log("client:")
    console.log(this.client)


    var client = this.client

    console.log("torrent id")

    console.log(unescape(this.magnet))

    // Hack on extra trackers incase there are none
    var magnetURI = "magnet:?xt=urn:btih:8784ff95f26ea6b7e5347bb07c4ced42d133bcf6&dn=Screen+Shot+2017-10-13+at+7.25.09+PM.png&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"

    // var magnetURI = unescape(this.magnet + '&tr=wss://tracker.openwebtorrent.com&tr=wss://tracker.btorrent.xyz&tr=wss://tracker.fastcast.nz')

    console.log("get magnet url")
    if(client.get(magnetURI))
    {
      // we already have the torrent loaded
      // new torrent
      client.get(magnetURI, this.loadCompletedTorrent)
    }
    else
    {
      // new torrent
      client.add(magnetURI, this.loadCompletedTorrent)
    }

  },

  loadCompletedTorrent: function (torrent) {
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
        content_file.appendTo('.embed-responsive')
      }
      else
      {
        alert("Unable to render any files from torrent")
      }

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
