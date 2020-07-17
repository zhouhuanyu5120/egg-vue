import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from "element-ui";
import axios from 'axios'; //先安装axios， npm install axios --save
import "element-ui/lib/theme-chalk/index.css"//引入element-ui css文件

Vue.prototype.$axios = axios;
Vue.use(ElementUI);

//开始配置vueRouter
const index = () => import("@/index.vue");
const NotFoundComponent = () => import("@/NotFoundComponent.vue");

const routes = [
  {
    path: '/',
    name: "index",
    component: index
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

const router = new VueRouter({
  routes: routes
})

export default function (options) {
  Vue.prototype.$http = require('axios');
  if (options.store) {
    options.store.replaceState(window.__INITIAL_STATE__ || {});
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  options.router = router;
  options.axios = axios;
  const app = new Vue(options);
  app.$mount('#app');
}