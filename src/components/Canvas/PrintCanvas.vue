<template>
  <div
    id="print-canvas"
    class="print-canvas"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      height: 1840,
      width: 875
    };
  }
};
</script>


<style lang="scss" scoped>
$device-width: 1840px;
$device-height: 875px;

.print-canvas {
  display: none;
  position: relative;
}
</style>

