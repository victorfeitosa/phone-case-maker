<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn small fab flat outline color="blue" v-on="on" @click="click">
        <v-icon>{{ icon }}</v-icon>
        <!-- <i :class="`option-icon option-icon--${icon}`"></i> -->
      </v-btn>
    </template>
    <span>{{ label }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
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


