<template>
  <div id="app">App</div>
</template>

<script>
export default {
  name: 'app',
  components: {}
};
</script>

<style lang="scss">
@import '/node_modules/vuetify/dist/vuetify.min.css';
@import './styles/palette';
@import './styles/fonts';

#app {
  font-family: $montserrat;
  font-size: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
