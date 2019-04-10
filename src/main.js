import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'babel-polyfill';

import App from './App.vue';


Vue.use(Vuetify, {
  iconfont: 'md'
});
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
