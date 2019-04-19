import Vue from 'vue';
import Vuex from 'vuex';

import background from './modules/background';
import canvas from './modules/canvas';
import palette from './modules/palette';
import control from './modules/control';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    background,
    canvas,
    palette,
    control,
  },
});

export default store;
