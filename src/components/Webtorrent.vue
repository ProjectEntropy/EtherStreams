<!-- This component renders whatever magnet link is provided into the DOM -->
<template>
  <div id='containerElement'>
  </div>
</template>

<script>

export default {
  name: "webtorrentElm",
  props: ['magnet'],
  data () {
    return {
      loading: true,
      color: "black",
      size: "20em"
    }
  },

  mounted: function() {

    // Hack on extra trackers
    var magnetURI = unescape(this.magnet + '&tr=wss://tracker.openwebtorrent.com&tr=wss://tracker.btorrent.xyz')

    console.log("get magnet url: " + magnetURI)

    var torrent = this.$WebTorrent.get(magnetURI)

    if(torrent)
    {
      // we already have the torrent loaded
      this.loadCompletedTorrent(torrent)
    }
    else
    {
      // new torrent
      this.$WebTorrent.add(magnetURI, this.loadCompletedTorrent)
    }

  },

  methods: {
    loadCompletedTorrent: function (torrent) {
        // Got torrent metadata
        var content_file

        console.log("loadCompletedTorrent")

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

        console.log("got content:", content_file)

        if(content_file)
        {
          content_file.appendTo('#containerElement', function (err, elem) {
            if (err) throw err // file failed to download or display in the DOM
            console.log('New DOM node with content', elem)

            elem.setAttribute("class", "img-fluid")
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
