import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    caseBackground: '',
    caseAlignX: '',
    caseAlignY: '',
    optionElement: '',
    selectedSticker: '',
    selectedFont: ''
  },
  getters: {
    caseBackground(state) {
      return state.caseBackground;
    },
    backgroundAlignX(state) {
      return state.caseAlignX;
    },
    backgroundAlignY(state) {
      return state.caseAlignY;
    },
    selectedOptionElement(state) {
      return state.optionElement;
    },
    selectedSticker(state) {
      return state.selectedSticker;
    },
    selectedFont(state) {
      return state.selectedFont;
    },
  },
  mutations: {
    setSelectedOptionElement: (state, optionElement) => {
      state.optionElement = optionElement;
    },
    setCaseBackground: (state, background) => {
      console.log('Picked background', background);
      state.caseBackground = background;
    }
  },
  actions: {

  }
});

export default store;
