<template>
  <v-flex xs3 lg2 pa-2 ma-3 class="sticker-item">
    <v-img
      draggable
      contain
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
      required: true,
    },
    alt: String,
  },
  methods: {
    dragStart(e) {
      const data = {
        type: 'sticker',
        props: {
          src: this.src,
        },
        height: this.$el.offsetHeight,
        width: this.$el.offsetWidth,
        enterX: e.layerX,
        enterY: e.layerY,
      };
      e.dataTransfer.setData('data', JSON.stringify(data));
    },
  },
};
</script>

<style lang="scss" scoped>
$min-size: 8rem;

.sticker-item {
  &__image {
    border: 2px dashed transparent;
    border-radius: 8px;
    cursor: grab;
    min-height: $min-size;
    min-width: $min-size;
    transform-origin: 50% 50%;
    transition: border 0.15s ease-in-out;

    &:hover {
      border: 2px dashed #e0e0e0;
    }
  }
}
</style>

