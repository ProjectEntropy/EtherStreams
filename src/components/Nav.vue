<template>
  <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
          <div class="navbar-header">


              <!-- Branding Image -->
              <router-link class="navbar-brand" :to="{ name: 'Stream'}">
                  <span class="glyphicon glyphicon-play"></span><span>►</span> ΞtherStreams
              </router-link>
          </div>

          <div class="collapse navbar-collapse" id="app-navbar-collapse">
              <form class="navbar-form navbar-left">
                  <div class="form-group">
                      <input name="q" type="search" class="form-control" placeholder="Search">
                  </div>
                  <button type="submit" class="btn btn-default btn-search">
                      <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
              </form>

              <!-- Right Side Of Navbar -->
              <ul class="nav navbar-nav navbar-right">

                      <li>
                          <router-link :to="{name: 'UploadPage'}">
                              <span class="glyphicon glyphicon-open"></span>
                          </router-link>
                      </li>
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                              <span class="glyphicon glyphicon-bell"></span>
                          </a>
                          <ul class="dropdown-menu" role="menu">
                              <li class="dropdown-header">No Notification</li>
                          </ul>
                      </li>
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                              <span class="glyphicon glyphicon-user"></span> <span class="caret"></span>
                          </a>

                          <ul class="dropdown-menu" role="menu">
                              <li class="dropdown-header"> name</li>
                              <li>
                                 My Account
                              </li>
                              <li class="nav-divider"></li>
                              <li>
                                  Logout
                              </li>
                          </ul>
                      </li>
              </ul>
          </div>
      </div>
  </nav>
</template>

<script>

export default {

  name: 'nav',

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
