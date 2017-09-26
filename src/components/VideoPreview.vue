<template>

  <div class="content-card">
    <router-link :to="{ name: 'watch', params: { magnet: video.magnet }}">
      <img class="card-img-top" src="./../assets/content_placeholder.png" alt="Card image cap">
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

export default {
  name: "VideoPreview",
  props: ['video'],
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
}

</script>

<style scoped>
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

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}
</style>
