const canvasElements = {
  namespaced: true,
  state: {
    elements: [],
    caseResolution: { w: 875, h: 1840 },
  },
  getters: {
    getElements(state) {
      return state.elements;
    },
    getElement(state) {
      return (elementId) => {
        return state.elements.find(e => e.id === elementId) || null;
      };
    },
    numElements(state) {
      return state.elements.length;
    },
    caseResolution(state) {
      return state.caseResolution;
    },
  },
  mutations: {
    addElement(state, element) {
      state.elements.push(element);
    },
    updateElement(state, payload) {
      state.elements = state.elements.map(element => {
        if (element.id === payload.id) {
          return { ...element, ...payload };
        }
        return element;
      });
    },
    deleteElement(state, id) {
      state.elements = state.elements.filter(e => e.id !== id);
    },
    changeCaseResolution(state, newRes) {
      if (newRes && newRes.w && newRes.h) {
        state.caseResolution = newRes;
      }
    },
  },
};

export default canvasElements;
