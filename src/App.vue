<template>
  <v-app id="app">
    <v-toolbar app dark></v-toolbar>
    <v-content>
      <CustomizerPage />
    </v-content>
  </v-app>
</template>

<script>
import CustomizerPage from './components/Pages/CustomizerPage';
export default {
  name: 'app',
  components: {
    CustomizerPage
  }
};
</script>

<style lang="scss">
@import "./styles/palette";
@import "./styles/fonts";

#app {
  font-size: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
