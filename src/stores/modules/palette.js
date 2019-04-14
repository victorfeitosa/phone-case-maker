const colorPalette = {
  namespaced: true,
  state: {
    colors: [
      {
        name: 'default',
        value: '#212121'
      },
      {
        name: 'white',
        value: '#fafafa'
      },
      {
        name: 'lime',
        value: '#e6dc52'
      },
      {
        name: 'passion',
        value: '#e7b630'
      },
      {
        name: 'strawberry',
        value: '#e45b79'
      },
      {
        name: 'cherry',
        value: '#df60ac'
      },
      {
        name: 'avocado',
        value: '#12d8a3'
      },
      {
        name: 'acqua',
        value: '#39c4e7'
      },
      {
        name: 'blueberry',
        value: '#72a5e4'
      },
      {
        name: 'grape',
        value: '#8d7fd8'
      }
    ]
  },
  getters: {
    colors(state) {
      return state.colors;
    },
    color(state) {
      return (name) => {
        return state.colors.find(c => c.name === name) || state.colors[0];
      };
    }
  }
};

export default colorPalette;
