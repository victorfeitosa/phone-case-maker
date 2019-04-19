<template>
  <v-dialog v-model="printOpen">
    <v-card>
      <v-card-title class="subtitle text-xs-center"
        >Printing your case</v-card-title
      >
      <v-card-text>
        <div
          id="print-canvas"
          class="print-canvas"
          :style="{ width: caseResolution.w, height: caseResolution.w }"
        ></div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
// NOTE: Here we use a little trick to have the print canvas into the DOM and redered, but never shown, allowing
// us to render the image correctly without having to show the actual result on screen
export default {
  computed: {
    ...mapGetters({ printOpen: 'control/openPrintDialog', caseResolution: 'canvas/caseResolution' })
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped>
.print-canvas {
  position: relative;
}
</style>

