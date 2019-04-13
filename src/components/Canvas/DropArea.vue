<template>
  <div ref="canvas" class="drop-area" @dragover="dragOver" @drop="drop">
    <div
      class="drop-area__background"
      :style="{ backgroundImage: backgroundUrl }"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mountComponentToParent } from '../../utils/componentUtils.js';
import CanvasSticker from '../DropElements/CanvasSticker';
import CanvasText from '../DropElements/CanvasText';

export default {
  computed: {
    backgroundUrl() {
      return `url("${this.caseBackground()}")`;
    }
  },
  methods: {
    ...mapGetters(['caseBackground']),
    dragOver(e) {
      e.preventDefault();
    },
    drop(e) {
      const dropData = JSON.parse(e.dataTransfer.getData('data'));
      const elToBuild = { sticker: CanvasSticker, text: CanvasText };

      // Add canvas element to the canvas
      const elementComponent = mountComponentToParent(elToBuild[dropData.type], this.$refs.canvas, {
        src: dropData.src
      });
      const element = elementComponent.$el;

      console.log(e);

      if (dropData.type === 'sticker') {
        //Sets size and position
        const canvasRect = this.$el.getBoundingClientRect();
        const pX = e.pageX - canvasRect.left - dropData.width / 2;
        const pY = e.pageY - canvasRect.top - dropData.height / 2;

        element.style.width = `${dropData.width}px`;
        element.style.height = `${dropData.height}px`;
        element.style.left = `${pX}px`;
        element.style.top = `${pY}px`;
      }

      // Set mutation to select this canvas item

      // Setup transform widget widget and hide canvas element so  the transform widget can transform it
      this.$nextTick(() => {
        // element.style.display = 'none';
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.drop-area {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  &__background {
    background-size: 100% 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.9;
    height: 100%;
    width: 100%;
  }
}
</style>

