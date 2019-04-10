<template>
  <v-container grid-list-lg pa-0 fill-height class="page">
    <v-layout>
      <v-flex md6 class="grey lighten-4">
        <!-- Canvas element goes here -->
        <v-layout row justify-center>
          <v-flex xs9 pt-5>
            <Canvas />
          </v-flex>
        </v-layout>
        <v-layout row justify-center text-xs-center>
          <v-flex xs12>
            <v-btn dark color="cyan">
              <v-icon left dark>cloud_download</v-icon>
              Print
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Controls go here -->
      <v-flex md6 align pa-4>
        <!-- Background picker -->
        <BackgroundPicker />

        <!-- Elements Picker -->
        <ElementPicker />
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import BackgroundPicker from '../PickerElements/BackgroundPicker';
import Canvas from '../Canvas/Canvas';
import ElementPicker from '../PickerElements/ElementPicker';

export default {
  components: {
    BackgroundPicker,
    Canvas,
    ElementPicker
  }
};
</script>

<style lang="scss" scoped>
.page {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  height: 80vh;
  overflow: hidden;
  width: 70vw;
}
</style>

