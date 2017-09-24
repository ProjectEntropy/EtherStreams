<template>
  <div class="col-md-4 col-md-offset-4 watch-card">
      <div class="artist-title col-md-12">
          <router-link :to="{ name: 'watch', params: { magnet: video.magnet }}">{{ video.title }}</router-link>
          <br/>
          <span>💕 {{ video.love }}</span>
      </div>
      <div class="col-md-12">
          <router-link :to="{ name: 'watch', params: { magnet: video.magnet }}" class="play-mix">
            <span class="btn btn-info ">
              <span>►</span> Play
            </span>
          </router-link>

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
  .container{background-color:#f1f1f1;}
  .watch-card{margin-top:50px;margin-bottom:50px;}
  .watch-card > div{max-width:300px;}
  .watch-card:hover .artist-title a, .watch-card:hover .listing-tab .tab-content ul li a{color:#167ac9;}
  .listing-tab .tab-content ul li:hover{text-decoration:underline;}
  .artist-title{padding:15px;background:#fff;}
  .artist-title a{test-decoration:none;font-size:21px;font-family:arial, san-serif; color:#555;}
  .artist-title a:hover{color:#16a3de;}
  .artist-collage img{max-width:100%;}
  .artist-collage{position:relative;max-height:150px;overflow:hidden;}
  .artist-collage,.artist-collage div{padding:0;}
  .play-mix {
    position: absolute;
    top: 38%;
    z-index: 9;
    left: 30%;
    border: 3px solid rgba(255,255,255,.25);
  }
  span.btn.play-mix-btn {
    background-color: #000;
    padding: 5px 12px;
    border:none;
    border-radius: 2px;
    box-shadow:0 0 70px rgba(255,255,255,.5);
    cursor: pointer;
  }
  .collage-rhs img{margin-top:-5px;}
  span.play-mix-btn:hover {
    box-shadow: 0 0 80px rgba(255,255,255,.9);
  }
  .listing-tab{
    padding:0;
  }.related-artist .artist-next{padding-left:0;}
  .related-artist .col-md-12{padding-right:0;}
  .play-mix-btn span {
    color: #1775bc;
  }
  .related-artist img{width:100%;}
  .related-artist h3 {
    font-size: 17px;
    margin-left: 15px;
    margin-top: 9px;
  }.related-artist{overflow:hidden;padding-bottom:10px;}
  .listing-tab .tab-content ul{padding:0;margin:0;}
  .listing-tab .tab-content ul li {
    list-style-type: none;
    border-bottom: 1px solid #eee;
    padding: 8px;
  }.listing-tab .tab-content ul li {
    list-style-type: none;
    border-bottom: 1px solid #eee;
    padding: 8px;
    padding-left: 20px;
    font-size: 13px;
    color: #666;
  }.listing-tab .tab-content ul li a{text-decoration:none; color:#666;}
  .listing-tab .tab-content ul li span{display:inline-block;float:right;padding-right:10px;}
  .listing-tab .nav-tabs>li,.nav-tabs>li a:hover{margin-bottom:0;background:none;}
  .listing-tab .nav-tabs>li.active>a, .nav-tabs>li.active>a:hover, .nav-tabs>li.active>a:focus{border:none;background:none;}
  .listing-tab .nav-tabs>li>a:hover{border-color:none;color:red;}
  .listing-tab .nav-tabs>li>a{border:0;padding:17px 0 7px;color:#333;margin-left:15px;}
  .listing-tab .nav-tabs>li.active>a{border-bottom:2px solid #bb0000;color:#000;}
  .listing-tab{background-color:#fff;}
</style>
