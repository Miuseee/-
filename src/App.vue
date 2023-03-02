
<template>
  <div class="app">
    <NavBar v-show="$route.meta.showHeader" />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/Main/Navbar/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
* {
  margin: 0px;
  height: 100%;

}
</style>
