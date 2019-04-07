import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'babel-polyfill';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
}).$mount('#app');
