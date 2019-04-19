<template>
  <div class="phone-canvas">
    <div class="phone-canvas__inner" :style="{ overflow: overflow }">
      <PhoneFrame />
      <DropArea />
      <PhoneForeground />
      <TransformWidget />
    </div>
    <PrintCanvas />
  </div>
</template>

<script>
import DropArea from './DropArea';
import PhoneFrame from './PhoneFrame';
import PhoneForeground from './PhoneForeground';
import PrintCanvas from './PrintCanvas';
import TransformWidget from '../ControlElements/TransformWidget';
import { mapGetters } from 'vuex';

export default {
  components: {
    DropArea,
    PhoneFrame,
    PhoneForeground,
    PrintCanvas,
    TransformWidget,
  },
  computed: {
    ...mapGetters({ selectedElement: 'control/getSelectedCanvasElement' }),
    overflow() {
      return this.selectedElement ? 'visible' : 'hidden';
    },
  },
};
</script>

<style lang="scss" scoped>
$frame-width: 258px;
$frame-height: 541px;

.phone-canvas {
  overflow: hidden;

  &__inner {
    border: 1px dashed #ddd;
    position: relative;
    border-radius: 32px;
    height: $frame-height;
    margin: 0 auto;
    width: $frame-width;
  }
}
</style>

