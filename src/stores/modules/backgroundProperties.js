const backgroundProperties = {
  state: {
    backgroundImage: '',
    backgroundSize: '100% 100%',
    alignX: 'left',
    alignY: 'top',
  },
  getters: {
    caseBackground(state) {
      return state.backgroundImage;
    },
    backgroundAlignX(state) {
      return state.alignX;
    },
    backgroundAlignY(state) {
      return state.alignY;
    },
    backgroundSize(state) {
      return state.backgroundSize;
    }
  },
  mutation: {

  },
  actions: {

  }
};

export default backgroundProperties;