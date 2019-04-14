<template>
  <div class="phone-case"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$frame-width: 258px;
$frame-height: 542px;

.phone-case {
  background-image: url("/images/other/case-backgr.svg");
  background-position: center;
  background-size: 100% 100%;
  border-radius: 32px;
  height: $frame-height;
  pointer-events: none;
  width: $frame-width;
}
</style>

