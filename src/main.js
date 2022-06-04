import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//import VueRouter from 'vue-router'
//import Login from './../src/components/login/Login.vue'

Vue.config.productionTip = false
//Vue.use(VueRouter); // router 기능 확장 선언

// const routes = [
//   // 이곳에 router 를 등록할 것입니다.
//   { path: '/login', component: Login },
// ];

// router 객체생성
// const router = new VueRouter({
// routes
// });

new Vue({
  vuetify,
  render: h => h(App),
  //router // router 추가
}).$mount('#app')
