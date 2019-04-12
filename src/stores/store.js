import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const defaultState = {
  case: {
    backgroundImage: '',
    backgroundSize: '100% 100%',
    alignX: 'left',
    alignY: 'top',
  },

  optionElement: 'sticker',
  text: 'A little text',
  selectedElement: null,
  selectedStickerOption: null,
  selectedFontOption: null,
  selectedFontColor: 'default',
  colors: [
    {
      name: 'default',
      value: '#212121'
    },
    {
      name: 'white',
      value: '#fafafa'
    },
    {
      name: 'lime',
      value: '#e6dc52'
    },
    {
      name: 'passion',
      value: '#e7b630'
    },
    {
      name: 'strawberry',
      value: '#e45b79'
    },
    {
      name: 'cherry',
      value: '#df60ac'
    },
    {
      name: 'avocado',
      value: '#12d8a3'
    },
    {
      name: 'acqua',
      value: '#39c4e7'
    },
    {
      name: 'blueberry',
      value: '#72a5e4'
    },
    {
      name: 'grape',
      value: '#8d7fd8'
    }
  ],
  elements: []
};

const store = new Vuex.Store({
  state: defaultState,
  getters: {
    caseBackground(state) {
      return state.case.backgroundImage;
    },
    backgroundAlignX(state) {
      return state.case.alignX;
    },
    backgroundAlignY(state) {
      return state.case.alignY;
    },
    selectedOptionElement(state) {
      return state.optionElement;
    },
    selectedElement(state) {
      return state.selectedElement;
    },
    selectedStickerOption(state) {
      return state.selectedStickerOption;
    },
    selectedFontOption(state) {
      return state.selectedFontOption;
    },
    colorPalette(state) {
      return state.colors;
    },
    previewText(state) {
      return state.text;
    },
    previewTextColor(state) {
      return state.selectedFontColor;
    }
  },
  mutations: {
    setSelectedOptionElement(state, optionElement) {
      state.optionElement = optionElement;
    },
    setCaseBackground(state, background) {
      state.case.backgroundImage = background;
    },
    setTextColor(state, color) {
      if (state.selectedElement && state.selectedElement.type === 'text') {
        //TODO: put text color to selected element
        return;
      }
      state.selectedFontColor = color;
    },
    setElementText(state, text) {
      if (state.selectedElement && state.selectedElement.type === 'text') {
        //TODO: put text to selected element
        return;
      }
      state.text = text;
    }
  },
  actions: {

  }
});

export default store;
