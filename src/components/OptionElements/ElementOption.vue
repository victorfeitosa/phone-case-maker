<template>
  <v-btn small fab flat outline @click="click" color="blue">
    <i :class="`option-icon option-icon--${icon}`"></i>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: String,
    click: Function
  }
};
</script>

<style lang="scss" scoped>
.option-icon {
  background-position: center;
  background-size: contain;
  height: 100%;
  width: 100%;

  &--sticker {
    background-image: "assets/icons/align-top.png";
  }
  &--text {
    background-image: "assets/icons/align-v-center.png";
  }
}
</style>
