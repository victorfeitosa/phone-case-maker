<template>
  <v-dialog v-model="printOpen">
    <v-card>
      <v-card-title>Printing following case</v-card-title>
      <v-card-text>
        <div
          id="print-canvas"
          class="print-canvas"
          :style="{ width: width, height: height }"
        ></div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({ printOpen: 'control/openPrintDialog' })
  },
  data() {
    return {
      height: 1840,
      width: 875,
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped>
$device-width: 1840px;
$device-height: 875px;

.print-canvas {
  position: relative;
}
</style>

