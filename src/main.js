// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/js/rem.js';
import '@/assets/css/reset.css';
import '@/assets/font-awesome-4.7.0/css/font-awesome.min.css'
import '@/assets/icons/iconfont.css';
import 'mint-ui/lib/style.css'

import './config/global'

// import { Toast } from 'mint-ui';
// Vue.use(Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
