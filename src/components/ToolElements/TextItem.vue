<template>
  <v-flex xs4 pa-2 class="text-item">
    <h2
      class="text-item__text"
      draggable
      @dragstart="dragStart"
      :style="{ fontFamily: font, color: textColor, textShadow }"
    >
      {{ text }}
    </h2>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      whiteOutline: '-1px -1px 0 #757575, 1px -1px 0 #757575, -1px 1px 0 #757575, 1px 1px 0 #757575',
    };
  },
  props: {
    font: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      palette: 'palette/colors',
      getColor: 'palette/color',
      text: 'control/getText',
      fontColor: 'control/getSelectedFontColor',
    }),
    textColor() {
      return this.getColor(this.fontColor).value;
    },
    textShadow() {
      return this.fontColor === 'white' ? this.whiteOutline : '';
    },
  },
  methods: {
    dragStart(e) {
      const data = {
        type: 'text',
        props: {
          font: this.font,
          color: this.textColor,
        },
        enterX: e.layerX,
        enterY: e.layerY,
      };
      e.dataTransfer.setData('data', JSON.stringify(data));
    },
  },
};
</script>

<style lang="scss" scoped>
.text-item {
  border: 2px dashed transparent;
  border-radius: 8px;
  cursor: grab;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: border 0.15s ease-in-out;
  white-space: nowrap;

  &:hover {
    border: 2px dashed #e0e0e0;
  }

  &__text {
    display: inline-block;
    font-size: 24px;
    max-width: 101%;
    transition: color 0.15s ease-in-out, text-shadow 0.15s ease-in-out;
  }
}
</style>


