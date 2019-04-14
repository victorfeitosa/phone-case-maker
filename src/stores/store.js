import Vue from 'vue';
import Vuex from 'vuex';

import backgroundProperties from './modules/backgroundProperties';
import canvasElements from './modules/canvasElements';
import colorPalette from './modules/colorPalette';
import control from './modules/control';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    background: backgroundProperties,
    canvas: canvasElements,
    palette: colorPalette,
    control
  }
});

export default store;
