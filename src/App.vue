<template>
  <div>
    <main-nav></main-nav>
    <div class="container-fluid">
      <div class="row">
        <router-view></router-view>
        <footer></footer>
      </div>
    </div>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    'main-nav': Nav
  },

}
</script>

<style>
.video
{
  min-width: 80%;
  min-height: 60%;
}


.text-dark {
  color: $gray-dark;
}

.mt {
  margin-top: 2em;
}

[v-cloak] {
  display: none;
}

// simple spin animation
@-moz-keyframes spin {
  from { -moz-transform: rotate(0deg); }
  to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  from { -webkit-transform: rotate(0deg); }
  to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

.spin {
  animation: spin 500ms infinite linear;
}

@mixin videoCaption {
  h3 {
    margin-right: 20px;
    margin-top: 0;
    font-size: 1.1em;
    margin-bottom: 1px;
    max-width: 196px;

    a {
      height: 2.6em;
      display: block;
      line-height: 1.3em;
      overflow: hidden;
      position: relative;
      text-overflow: ellipsis;
      white-space: normal;
      word-wrap: break-word;
    }
  }

  p {
    font-size: .85em;
    color: lighten($gray-light, 10);

    a {
      color: $gray-base;
    }
  }
}

// Styles
body { padding-top: 50px; }

// Nav bar
.navbar {
  margin-bottom: 0;

  .navbar-brand {
    span {
      color: $brand-danger;
    }
  }
  .navbar-form {
    width: 70%;
    .form-group {
      width: 80%;

      .form-control {
        width: 100%;
      }
    }

    .btn.btn-search {
      padding: 6px 26px;
    }
  }
}

// Sub nav
.sub-nav {
  padding: 0 .6em;
  background-color: #FFF;
  margin-bottom: 1em;

  a {
    color: $gray-darker;
    padding: .6em 1em;
    margin: 0 .5em;
    display: inline-block;
    border-bottom: 2px solid transparent;


    &:hover, &.active {
      color: $brand-primary;
      text-decoration: none;
      border-bottom: 2px solid $brand-primary;
    }
  }
}

// video list
.video {
  .thumbnail {
    background-color: #f1f1f1;
    padding: 0;
    margin-bottom: .5em;
    max-height: 141px;
    overflow: hidden;

    img {
      margin: 0;
      min-width: 168px;
      min-height: 120px;
    }
  }

  .caption {
    @include videoCaption
  }
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-aside {
  .media-left img{
    width: 168px;
    height: 94px;
    overflow: hidden;
    background-color: #f1f1f1;
  }

  @include videoCaption

}

.video-player {
  margin-bottom: 22px;

  .video-card {
    min-height: 360px;
    background-color: #f1f1f1;
  }
}

.desc-text {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.video-desc {
  h3 {
    color: $gray-darker;
    margin-top: 0;
  }

  .media-object {
    height: 48px;
    width: 48px;
    background-color: #f1f1f1;
  }
  .media-body {
    color: $gray-light;
    .media-heading {
      font-size: .9em;
    }
  }

  .btn-subscribe {
    background-color: lighten($brand-primary, 10);
    border-color: lighten($brand-primary, 10);
  }

  .view-count {
    h3 {
      font-size: 1.3em;
      color: $gray;
      margin: 0;
    }
  }
}

.comment-thread {
  @include videoCaption;
  h4 {
    font-size: 1em;
  }
}

.video-footer {
  border-top: 1px solid $gray-lighter;

  a {
    margin: 0 1em;
    color: $gray-light;

    &:hover {
      text-decoration: none;
      color: $gray-dark;
    }
  }
}

// channel page
.panel-cover {
  position: relative;
  min-height: 320px;
  background-repeat: no-repeat;
  background-color: darken($brand-primary, 30);
  background-size: cover;

  .media {
    position: absolute;
    bottom: 2em;
    left: 2em;

    .media-heading {
      color: $gray-lighter;
      text-shadow: 1px 1px 2px $gray-dark;
    }
  }
}

// comment
.comment-thread {
  .media, .media-body{
    overflow: visible;
  }

  .dropdown {
    button {
      border: none;
    }

    .dropdown-menu .glyphicon {
      margin-right: 6px;
    }
  }
}

/*body {
  background-color: #222;
  color: #ccc;
}*/
/* remove defaults from responsive cols */

.nopadding {
  padding: 2px !important;
  margin: 0 !important;
  outline: 2px solid #333;
  background: #333;
}
</style>
