// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'
import Vuex from 'vuex'
import 'mint-ui/lib/style.css';

//全局引入mintui的组件
import MintUI from 'mint-ui';
Vue.use(MintUI);
Vue.use(Vuex);
Vue.prototype.$http=axios;
//单个引入mintui的组件
// import {Button,Swipe} from 'mint-ui';
// 注册成全局标签
// Vue.component(Button.name,"Button");
// Vue.component(Swipe.name,"Swipe");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
