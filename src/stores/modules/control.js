const control = {
  namespaced: true,
  state: {
    namespaced: true,
    elementType: 'sticker',
    text: 'Your name',
    selectedCanvasElement: '',

    selectedFont: null,
    selectedFontColor: 'default',

    openPrintDialog: false,
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
    openPrintDialog(state) {
      return state.openPrintDialog;
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
    deselectCanvasElement(state) {
      state.selectedCanvasElement = null;
    },
    setSelectedFont(state, font) {
      state.selectedFont = font;
    },
    setSelectedFontColor(state, colorName) {
      state.selectedFontColor = colorName;
    },
    setPrintDialogOpen(state) {
      state.openPrintDialog = true;
    },
    setPrintDialogClose(state) {
      state.openPrintDialog = false;
    },
  },
};

export default control;
