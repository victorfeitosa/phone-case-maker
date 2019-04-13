import Vue from 'vue';
import Vuex from 'vuex';

import backgroundProperties from './modules/backgroundProperties';
import canvasElements from './modules/canvasElements';
import colorPalette from './modules/colorPalette';
import controlProperties from './modules/controlProperties';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    background: backgroundProperties,
    canvas: canvasElements,
    palette: colorPalette,
    controlProperties
  }
});

export default store;
