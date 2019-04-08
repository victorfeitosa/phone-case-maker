import Vue from 'vue';
import Vuetify from 'vuetify';
import 'babel-polyfill';

import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';


Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
