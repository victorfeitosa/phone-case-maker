<template>
  <div class="phone-canvas">
    <div class="phone-canvas__inner">
      <PhoneFrame />
      <DropArea />
      <PhoneForeground />
      <PrintCanvas />
    </div>
  </div>
</template>

<script>
import DropArea from './DropArea';
import PhoneFrame from './PhoneFrame';
import PhoneForeground from './PhoneForeground';
import PrintCanvas from './PrintCanvas';

export default {
  components: {
    DropArea,
    PhoneFrame,
    PhoneForeground,
    PrintCanvas
  }
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
    overflow: hidden;
    width: $frame-width;
  }
}
</style>

