<template>
  <v-flex xs3 mx-3>
    <v-img
      draggable
      @dragstart="dragStart"
      :src="src"
      :alt="alt"
      class="sticker-item"
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
    dragStart: function(e) {
      e.dataTransfer.setData('type', 'sticker');
      e.dataTransfer.setData('src', this.src);
    }
  }
};
</script>

<style lang="scss" scoped>
.sticker-item {
  cursor: grab;
}
</style>

