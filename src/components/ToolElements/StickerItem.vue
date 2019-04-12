<template>
  <v-flex xs3 mx-3 class="sticker-item">
    <v-img
      draggable
      @dragstart="dragStart"
      :src="src"
      :alt="alt"
      class="sticker-item__image"
    />
  </v-flex>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: String
  },
  methods: {
    dragStart(e) {
      e.dataTransfer.setData('type', 'sticker');
      e.dataTransfer.setData('src', this.src);
    }
  }
};
</script>

<style lang="scss" scoped>
.sticker-item {
  &__image {
    border: 2px dashed transparent;
    border-radius: 8px;
    cursor: grab;
    transition: border 0.15s ease-in-out;

    &:hover {
      border: 2px dashed #e0e0e0;
    }
  }
}
</style>

