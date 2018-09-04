<template>
  <div id="app">
    <div id="db-nav-movie" class="nav">
      <AppHead/>
    </div>
    <NavList/>


  </div>
</template>

<script>
  import AppHead from './components/Head'
  import NavList from './components/Nav'
  export default {
    name: 'App',
    components: {
      AppHead,
      NavList
    }
  }
</script>

<style>
#db-nav-movie{
  background-color: #f0f3f5;
}
</style>
