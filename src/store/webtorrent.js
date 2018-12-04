const WebTorrent = require('webtorrent')

export default {
  state: {
    torrents: [],
    webtorrent: null
  },

  load() {
    if(!this.state.webtorrent)
    {
      this.state.webtorrent = new WebTorrent() 

      // Track changes to torrents
      this.state.webtorrent.on('torrent', torrent => {
        console.log("torrent", torrent)
        console.log("torrents", this.state.webtorrent.torrents)
        this.state.torrents = Array.from(this.state.webtorrent.torrents);
      })
    }

  },

  addTorrent(infoHash){
    // Hack on extra trackers
    var magnetURI = unescape(infoHash + '&tr=wss://tracker.openwebtorrent.com&tr=wss://tracker.btorrent.xyz')

    console.log("get magnet url: " + magnetURI)

    var torrent = this.state.webtorrent.get(magnetURI)

    if(torrent)
    {
      // we already have the torrent loaded
      this.loadCompletedTorrent(torrent)
    }
    else
    {
      // new torrent
      this.state.webtorrent.add(magnetURI, this.loadCompletedTorrent)
    }

  },

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

