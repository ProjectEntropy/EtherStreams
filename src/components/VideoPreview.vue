<template>
  <div class="content-card col-sm-2">
    <router-link :to="{ name: 'watch', params: { magnet: video.magnet }}">
      <WebtorrentElm :magnet="video.preview_uri"></WebtorrentElm>
    </router-link>
    <div class="">
      <router-link :to="{ name: 'watch', params: { magnet: video.magnet }}">
        <p class="card-title lead">{{ video.name }}</p>
      </router-link>

      <p class="card-text creator text-muted">
        {{ video.creator }}
      </p>
    </div>
  </div>
</template>

<script>

import WebtorrentElm from './Webtorrent.vue'

export default {
  name: "VideoPreview",
  props: ['video', 'client'],
  components: {
    'WebtorrentElm': WebtorrentElm
  },
  data() {
    return {}
  },
  methods: {
  }
}

</script>

<style scoped>

.card-img-top
{
  background: black;
  width: 100%;
  height: 100%;
}

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
