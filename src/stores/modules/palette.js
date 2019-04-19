const colorPalette = {
  namespaced: true,
  state: {
    colors: [
      { name: 'default', value: '#212121' },
      { name: 'white', value: '#fafafa' },
      { name: 'lime', value: '#ece24d' },
      { name: 'passion', value: '#f0bc2d' },
      { name: 'strawberry', value: '#ee5576' },
      { name: 'cherry', value: '#e75baf' },
      { name: 'avocado', value: '#0cdda5' },
      { name: 'acqua', value: '#31c4e9' },
      { name: 'blueberry', value: '#619be2' },
      { name: 'grape', value: '#8576db' },
    ],
  },
  getters: {
    colors(state) {
      return state.colors;
    },
    color(state) {
      return (name) => {
        return state.colors.find(c => c.name === name) || state.colors[0];
      };
    },
  },
};

export default colorPalette;
