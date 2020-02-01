import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局组件引用
import Header from '@/common/header'
import BScroll from '@/common/BScroll'
import Loading from '@/common/loading'
Vue.config.productionTip = false
//全局组件
Vue.component("Header",Header);
Vue.component("BScroll",BScroll)
Vue.component("Loading",Loading)

Vue.filter("toPath",(val,params)=>{
  var reg = /w\.h/;
  return val.replace(reg,params);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
