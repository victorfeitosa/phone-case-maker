<template>
  <v-btn small fab flat outline color="blue" @click="click">
    <i :class="`option-icon option-icon--${icon}`"></i>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: String
  },
  methods: {
    click: function(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="scss" scoped>
.option-icon {
  background-position: center;
  background-size: contain;
  height: 100%;
  width: 100%;

  &--align-top {
    background-image: "assets/icons/align-top.png";
  }
  &--align-v-center {
    background-image: "assets/icons/align-v-center.png";
  }
  &--align-bottom {
    background-image: "assets/icons/align-bottom.png";
  }
  &--align-left {
    background-image: "assets/icons/align-right.png";
  }
  &--align-h-center {
    background-image: "assets/icons/align-h-center.png";
  }
  &--align-right {
    background-image: "assets/icons/align-right.png";
  }
  &--bg-contain {
    background-image: "assets/icons/bg-contain.png";
  }
  &--bg-cover {
    background-image: "assets/icons/bg-cover.png";
  }
  &--bg-stretch {
    background-image: "assets/icons/bg-stretch.png";
  }
}
</style>


