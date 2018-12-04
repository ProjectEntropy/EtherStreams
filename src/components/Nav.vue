<template>
  <b-navbar toggleable="md" type="light" variant="">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand :to="{ name: 'Streams'}"><span class="glyphicon glyphicon-play"></span><span>►</span> ΞtherStreams</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>
       
</template>

<script>

export default {

  name: 'nav-component',

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
