const controlProperties = {
  namespaced: true,
  state: {
    namespaced: true,
    elementType: 'sticker',
    text: 'A little text',
    selectedCanvasElement: '',

    selectedFont: null,
    selectedFontColor: 'default',
  },
  getters: {
    getElementType(state) {
      return state.elementType;
    },
    getText(state) {
      return state.text;
    },
    getSelectedCanvasElement(state) {
      return state.selectedCanvasElement;
    },
    getSelectedFont(state) {
      return state.selectedFont;
    },
    getSelectedFontColor(state) {
      return state.selectedFontColor;
    },
  },
  mutations: {
    setElementType(state, elementType) {
      state.elementType = elementType;
    },
    setText(state, text) {
      state.text = text;
    },
    setSelectedCanvasElement(state, elementId) {
      state.selectedCanvasElement = elementId;
    },
    setSelectedFont(state, font) {
      state.selectedFont = font;
    },
    setSelectedFontColor(state, colorName) {
      state.selectedFontColor = colorName;
    },
  },
  actions: {}
};

export default controlProperties;
