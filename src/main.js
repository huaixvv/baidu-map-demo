import Vue from 'vue'
import App from './App.vue'
// import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
// Vue.use(BaiduMap, {
//   ak: 'VNtwGOqnPmcylhw0XYGzE8VnqUD4Hq36'
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
