import Vue from 'vue'
import App from './App.vue'
// import VueWorker from 'vue-worker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// Vue.use(VueWorker)

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
