const canvasElements = {
  namespaced: true,
  state: {
    elements: []
  },
  getters: {
    getElements(state) {
      return state.elements;
    },
    getElement(state, elementId) {
      if (state.elements.length) {
        return state.elements.find(e => e.id === elementId) || null;
      }
    }
  },
  mutations: {
    addElement(state, element) {
      state.elements.push(element);
    },
    editElement(state, payload) {
      state.elements = state.elements.map(element => {
        if (element.id === payload.id) {
          return { ...element, ...payload };
        }
      });
    },
    removeElement(state, { id }) {
      state.elements = state.elements.filter(e => e.id !== id);
    },
  }
};

export default canvasElements;
