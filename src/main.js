import 'babel-polyfill';
import 'es6-promise/auto';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App.vue';
import store from './stores/store';


Vue.use(Vuetify, {
  iconfont: 'md',
});

Vue.config.productionTip = true;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
