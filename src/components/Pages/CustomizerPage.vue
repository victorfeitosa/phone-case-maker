<template>
  <v-container class="page" height="80">
    <v-layout row>
      <v-flex md6>
        <!-- Canvas-->
        <v-layout row justify-center>
          <v-flex xs9 pt-5>
            <Canvas />
          </v-flex>
        </v-layout>
        <v-layout row justify-center text-xs-center>
          <v-flex xs12>
            <v-btn dark color="cyan" @click="getCase">
              <v-icon left dark>cloud_download</v-icon>
              Get Case
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Controls -->
      <v-flex md6 pa-4 grow>
        <v-layout column>
          <!-- Background picker -->
          <v-flex xs6>
            <BackgroundPicker />
          </v-flex>

          <!-- Elements Picker -->
          <v-flex xs6>
            <ElementPicker />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { toPng } from 'html-to-image';
import BackgroundPicker from '../PickerElements/BackgroundPicker';
import Canvas from '../Canvas/Canvas';
import ElementPicker from '../PickerElements/ElementPicker';

export default {
  components: {
    BackgroundPicker,
    Canvas,
    ElementPicker
  },
  methods: {
    getCase() {
      const element = document.getElementById('canvas');
      console.log(element);

      // const printArea = document.getElementById('print-canvas');
      // printArea.innerHTML = element;
      // printArea.style.width = `${element.offsetWidth}px`;
      // printArea.style.height = `${element.offsetHeight}px`;

      toPng(element, { quality: 1 }).then(function(dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  // max-height: 80vh;
}
</style>

