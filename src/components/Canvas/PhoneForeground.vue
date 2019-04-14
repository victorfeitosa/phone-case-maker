<template>
  <div class="phone-fore"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$frame-width: 258px;
$frame-height: 542px;

.phone-fore {
  background-image: url("/images/other/case-foregr.svg");
  background-position: center;
  background-size: 100% 100%;
  border-radius: 32px;
  height: $frame-height;
  left: 50%;
  margin: 0 auto;
  pointer-events: none;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: $frame-width;
}
</style>

