const canvasElements = {
  namespaced: true,
  state: {
    elements: []
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
    }
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
  }
};

export default canvasElements;
