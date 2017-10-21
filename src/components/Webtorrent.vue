<!-- This component renders whatever magnet link is provided into the DOM -->
<template>
  <div class='content'>
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
    var client = this.client

    // Hack on extra trackers incase there are none
    // var magnetURI = "magnet:?xt=urn:btih:8784ff95f26ea6b7e5347bb07c4ced42d133bcf6&dn=Screen+Shot+2017-10-13+at+7.25.09+PM.png&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com"

    var magnetURI = unescape(this.magnet + '&tr=wss://tracker.openwebtorrent.com&tr=wss://tracker.btorrent.xyz')

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

  methods: {
    loadCompletedTorrent: function (torrent) {
        // Got torrent metadata
        var content_file

        if(torrent.files.length == 1)
        {
          content_file = torrent.files[0]
        }
        else {
           torrent.files.forEach(function (file) {
             var name = file.name.toLowerCase()

             // If this is renderable content
             if(/\.(mp4|m4v|webm|ogg|mp3|png|jpg|gif)$/i.test(name))
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

        if(content_file)
        {
          content_file.appendTo('.content', function (err, elem) {
            if (err) throw err // file failed to download or display in the DOM

            // elem.parentElement.querySelector('.v-spinner').remove()
            elem.parentElement.parentElement.querySelector(".card-img-top").remove()

            elem.setAttribute("class", "embed-responsive")
          })
        }
        else
        {
          console.log("Unable to render any files from torrent")
        }
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
