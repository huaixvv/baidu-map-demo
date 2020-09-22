<template>
  <div id="app">
    <baidu-map></baidu-map>
  </div>
</template>

<script>
  import baiduMap from "./components/map/baiduMap";

  export default {
    name: 'App',
    components: {baiduMap},
    data () {
      return {

    }
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .bm-view {
    width: 100%;
    height: 800px;
  }
</style>
