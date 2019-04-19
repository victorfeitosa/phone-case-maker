const backgroundProperties = {
  namespaced: true,
  state: {
    backgroundImage: '',
    backgroundSize: '100% 100%',
    alignX: 'center',
    alignY: 'center',
  },
  getters: {
    backgroundImage(state) {
      return state.backgroundImage;
    },
    backgroundSize(state) {
      return state.backgroundSize;
    },
    isStretched(state) {
      return state.backgroundSize === '100% 100%';
    },
    isContain(state) {
      return state.backgroundSize === 'contain';

    },
    isCover(state) {
      return state.backgroundSize === 'cover';

    },
    alignmentX(state) {
      return state.alignX;
    },
    alignmentY(state) {
      return state.alignY;
    },
    isAlignedXLeft(state) {
      return state.alignX === 'left';
    },
    isAlignedXCenter(state) {
      return state.alignX === 'center';
    },
    isAlignedXRight(state) {
      return state.alignX === 'right';
    },
    isAlignedYTop(state) {
      return state.alignY === 'top';
    },
    isAlignedYCenter(state) {
      return state.alignY === 'center';
    },
    isAlignedYBottom(state) {
      return state.alignY === 'bottom';
    },
  },
  mutations: {
    setBackgroundImage(state, backgroundImage) {
      state.backgroundImage = backgroundImage;
    },
    setBackgroundSize(state, size) {
      state.backgroundSize = size;
    },
    setSizeContain(state) {
      state.backgroundSize = 'contain';
    },
    setSizeCover(state) {
      state.backgroundSize = 'cover';
    },
    setSizeStretch(state) {
      state.backgroundSize = '100% 100%';
    },
    setAlignX(state, alignX) {
      state.alignX = alignX;
    },
    setAlignXLeft(state) {
      state.alignX = 'left';
    },
    setAlignXCenter(state) {
      state.alignX = 'center';
    },
    setAlignXRight(state) {
      state.alignX = 'right';
    },
    setAlignY(state, alignY) {
      state.alignY = alignY;
    },
    setAlignYTop(state) {
      state.alignY = 'top';
    },
    setAlignYCenter(state) {
      state.alignY = 'center';
    },
    setAlignYBottom(state) {
      state.alignY = 'bottom';
    },
  },
};

export default backgroundProperties;