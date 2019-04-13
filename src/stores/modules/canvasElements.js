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
      return state.elements.fitler(e => e.id === elementId)[0] || null;
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
