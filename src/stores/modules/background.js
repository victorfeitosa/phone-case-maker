const backgroundProperties = {
  namespaced: true,
  state: {
    backgroundImage: '',
    backgroundSize: '100% 100%',
    alignX: 'left',
    alignY: 'top',
  },
  getters: {
    backgroundImage(state) {
      return state.backgroundImage;
    },
    backgroundSize(state) {
      return state.backgroundSize;
    },
    alignX(state) {
      return state.alignX;
    },
    alignY(state) {
      return state.alignY;
    },
  },
  mutations: {
    setBackgroundImage(state, backgroundImage) {
      state.backgroundImage = backgroundImage;
    },
    setBackgroundSize(state, size) {
      state.backgroundSize = size;
    },
    setlignX(state, alignX) {
      state.alignX = alignX;
    },
    setlignY(state, alignY) {
      state.alignY = alignY;
    },
  },
  actions: {}
};

export default backgroundProperties;