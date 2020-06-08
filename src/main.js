import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '../node_modules/todomvc-app-css/index.css'
import '../node_modules/todomvc-common/base.js'

Vue.config.productionTip = false
//自定义一个一渲染就获得焦点的指令
Vue.directive('focus',{
  inserted:function(el){
    el.focus()
  }
})
new Vue({
  // computed: {
  //   todos(){
  //     return store.state.todos
  //   }
  // },
  // wacth:{
  //   todos:{
  //     handler(){
  //       console.log(1)
  //     },
  //     deep:true
  //   }
  // },
  store,
  router,
  render: h => h(App)
}).$mount('#app')
