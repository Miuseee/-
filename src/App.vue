
<template>
  <div class="app">
    <NavBar v-show="$route.meta.showHeader" />
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>

import { nextTick, ref } from 'vue';
import { provide } from 'vue';
import NavBar from './components/Main/Navbar/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    const isRouterAlive = ref(true)
    const reload = () => {
      isRouterAlive.value = false
      nextTick(() => {
        isRouterAlive.value = true
      })
    }
    provide('reload', reload)
    return {
      reload, isRouterAlive
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0px;
  height: 100%;


}

// /deep/ .el-popper.is-pure {
//   height: 100px;
//   padding: 0;
// }
</style>
