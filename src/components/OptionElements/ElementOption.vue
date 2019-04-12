<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn small fab flat color="blue" outline v-on="on" @click="click">
        <!-- <i :class="`option-icon option-icon--${icon}`"></i> -->
        <v-icon>{{ icon }}</v-icon>
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
    click(e) {
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

  &--sticker {
    background-image: "assets/icons/align-top.png";
  }
  &--text {
    background-image: "assets/icons/align-v-center.png";
  }
}
</style>
