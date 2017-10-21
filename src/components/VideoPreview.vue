<template>
  <div class="content-card">
    <router-link :to="{ name: 'watch', params: { magnet: video.magnet }}">
      <!-- <img class="" src="./../assets/content_placeholder.png" alt="Card image cap"> -->
      <Webtorrent :magnet="video.preview_uri" :client="client" class="card-img-top"></Webtorrent>
    </router-link>
    <div class="">
      <router-link :to="{ name: 'watch', params: { magnet: video.magnet }}">
        <p class="card-title lead">{{ video.title }}</p>
      </router-link>

      <p class="card-text creator text-muted">
        {{ video.creator }}
      </p>
    </div>
  </div>
</template>

<script>

import Webtorrent from './Webtorrent.vue'

export default {
  name: "VideoPreview",
  props: ['video', 'client'],
  components: {
    'Webtorrent': Webtorrent
  },
  data() {
    return {}
  },
  methods: {
  }
}

</script>

<style scoped>
.content
{
  min-height: 10em;
  max-height: 10em;
  background-color: black;
}

.card-title
{
  color: black;
  font-size: 1.4em;

}
.creator
{
  width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}
.content-card
{
  width: 15rem;
  padding: 3px;
  margin-bottom: 1.5em;
  font-size: 0.8em;

  /*white-space: nowrap;*/
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}
</style>
