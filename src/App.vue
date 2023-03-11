
<template>
  <div class="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>

import { nextTick, ref } from 'vue';
import { provide } from 'vue';
export default {
  name: 'App',
  components: {
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
  // overflow: hidden;
}

#nprogress .bar {
  position: absolute !important;
  background: red !important; //自定义颜色
  // left: -100px !important;
  // overflow: hidden !important;
  // transform: translateX(-30px) !important;
}
</style>
