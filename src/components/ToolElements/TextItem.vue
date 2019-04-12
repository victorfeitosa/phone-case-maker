<template>
  <v-flex xs3 pa-2 my-2 mx-2 class="text-item">
    <h2
      class="text-item__text"
      draggable
      @dragstart="dragStart"
      :style="{ fontFamily: font }"
    >
      {{ text }}
    </h2>
  </v-flex>
</template>

<script>
export default {
  props: {
    font: {
      type: String,
      required: true
    }
  },
  data: () => ({
    text: 'A little text'
  }),
  methods: {
    dragStart(e) {
      e.dataTransfer.setData('type', 'text');
      e.dataTransfer.setData('font', this.font);
      e.dataTransfer.setData('text', this.text);
    }
  }
};
</script>

<style lang="scss" scoped>
.text-item {
  border: 2px dashed transparent;
  border-radius: 8px;
  cursor: grab;
  position: relative;
  transition: border 0.15s ease-in-out;

  &:hover {
    border: 2px dashed #e0e0e0;
  }

  &__text {
    display: inline-block;
    font-size: 30px;
  }
}
</style>


