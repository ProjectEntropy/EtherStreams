<template>
  <div> 
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
            {{ s.name }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="main-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-9">
            <VideoPreview v-for="c in ContentStore.state.content" :video="c" :key="c.magnet">
            </VideoPreview>

            <button v-on:click="addContent">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentStore from './../store/videos'
import VideoPreview from './VideoPreview'

var client = this.WebTorrent

export default {

  name: 'streams',

  components: {
    'VideoPreview': VideoPreview
  },

  methods: {
    addContent: function() {
      console.log("addContent")
      ContentStore.createContent("Test", "magnet:?xt=urn:btih:7c21592cc47997d119a49e20904a81e81f14c7e7")
    }
  },

  data () {
    return {
      ContentStore,
      client
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
