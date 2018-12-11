<template>
  <div>

    <b-modal v-model="showAddContentBox">
      
    </b-modal> 
    
    <nav class="left-mdsidenav col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <router-link :to="{ name: 'stream', params: { address: 'testaddress234897238946239' }}" class="nav-link active">
            Home <span class="sr-only">(current)</span>
          </router-link>
        </li>
      </ul>

      <ul class="nav nav-pills flex-column">
        <li class="nav-item"  v-for="s in ContentStore.state.streams">
          <router-link :to="{ name: 'stream', params: { address: s.address }}" class="nav-link">
            {{ s.title }}
          </router-link>
        </li>

        <button v-on:click="newStream">New Stream</button>
      </ul>

      <ul class="nav nav-pills flex-column">
        <li class="nav-item"  v-for="t in getTorrentsState()">
          {{ t.name }}
          <b-progress :value="t.progress" :max="1" show-progress></b-progress>
        </li>
      </ul>
    </nav>

    <div class="main-content">

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9">
            <VideoPreview v-for="c in ContentStore.state.content" :video="c" :key="c.id">
            </VideoPreview>

            <b-button @click="showAddContentBox = !showAddContentBox">
              Add new content
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentStore from './../store/videos'
import VideoPreview from './VideoPreview'
import WebTorrentStore from './../store/webtorrent'

import dragDrop from 'drag-drop'


export default {

  name: 'streams',

  components: {
    'VideoPreview': VideoPreview
  },

  methods: {
    showAddContent: function() {
      console.log("ShowAddContent")
      // ContentStore.createContent("Michal Men", "magnet:?xt=urn:btih:a387e100a31e92129fa8b79855cc9ef199d5470b")
    },
    addContent: function() {
      console.log("addContent")
      // ContentStore.createContent("Michal Men", "magnet:?xt=urn:btih:a387e100a31e92129fa8b79855cc9ef199d5470b")
    },
    newStream: function() {
      console.log("newStream")
      ContentStore.addStream("funny", "magnet:?xt=urn:btih:a387e100a31e92129fa8b79855cc9ef199d5470b")
    },
    getTorrentsState: function() {
      return WebTorrentStore.state.torrents.map(x => ({ 
          name: x.name,
          ready: x.ready,
          numPeers: x.numPeers,
          ratio: x.ratio,
          progress: x.progress 
        }))
    }
  },

  data () {
    return {
      ContentStore,
      WebTorrentStore,
      showAddContentBox: false
    }
  }
}
</script>


<style scoped>
/*
* Base structure
*/

.left-mdsidenav {
    width:220px;
    height: 100vh;
    position: fixed;
}

.main-content {
  top: 4em;
  bottom:0;
  position: fixed;
  width: -moz-calc(100vw - 220px);
  /* WebKit */
  width: -webkit-calc(100vw - 220px);
  /* Opera */
  width: -o-calc(100vw - 220px);
  /* Standard */
  width: calc(100vw - 220px);
  margin-left: 220px;
  overflow-y: scroll;
}

/* Move down content because we have a fixed navbar that is 50px tall */
body {
padding-top: 50px;
}

/*
* Typography
*/

h1 {
margin-bottom: 20px;
padding-bottom: 9px;
border-bottom: 1px solid #eee;
}

/*
* Sidebar
*/

.sidebar {
position: fixed;
top: 51px;
bottom: 0;
left: 0;
z-index: 1000;
padding: 20px;
overflow-x: hidden;
overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
border-right: 1px solid #eee;
}

/* Sidebar navigation */
.sidebar {
padding-left: 0;
padding-right: 0;
}

.sidebar .nav {
margin-bottom: 20px;
}

.sidebar .nav-item {
width: 100%;
}

.sidebar .nav-item + .nav-item {
margin-left: 0;
}

.sidebar .nav-link {
border-radius: 0;
}

/*
* Dashboard
*/

/* Placeholders */
.placeholders {
padding-bottom: 3rem;
}

.placeholder img {
padding-top: 1.5rem;
padding-bottom: 1.5rem;
}
</style>
