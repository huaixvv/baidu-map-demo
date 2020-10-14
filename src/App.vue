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
        tableData: [
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
          {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
        ]
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
