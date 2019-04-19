<template>
  <div
    ref="canvas"
    id="canvas"
    class="drop-area"
    @dragover="dragOver"
    @drop="drop"
  >
    <div
      class="drop-area__background"
      :style="{
        backgroundImage: backgroundUrl,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize
      }"
    ></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { mountComponentToParent, getElementCanvasData } from '../../utils/component.js';
import CanvasSticker from '../DropElements/CanvasSticker';
import CanvasText from '../DropElements/CanvasText';

export default {
  computed: {
    ...mapGetters({
      backgroundSize: 'background/backgroundSize',
      backgroundAlignX: 'background/alignmentX',
      backgroundAlignY: 'background/alignmentY',
    }),
    backgroundPosition() {
      return `${this.backgroundAlignY} ${this.backgroundAlignX}`;
    },
    backgroundUrl() {
      return `url("${this.backgroundImage()}")`;
    },
  },
  methods: {
    ...mapGetters({ backgroundImage: 'background/backgroundImage' }),
    ...mapMutations({
      setSelectedCanvasElement: 'control/setSelectedCanvasElement',
      addCanvasElement: 'canvas/addElement',
    }),
    setupDropSticker(event, dropData, element) {
      const canvasRect = this.$el.getBoundingClientRect();
      const pX = event.clientX - canvasRect.left - dropData.enterX;
      const pY = event.clientY - canvasRect.top - dropData.enterY;
      //Sets size and position
      element.style.width = `${dropData.width}px`;
      element.style.height = `${dropData.height}px`;
      element.style.left = `${pX}px`;
      element.style.top = `${pY}px`;
      element.style.zIndex = 0;
    },
    setupDropText(event, dropData, element) {
      const canvasRect = this.$el.getBoundingClientRect();
      const pX = event.clientX - canvasRect.left - element.offsetWidth / 2;
      const pY = event.clientY - canvasRect.top - element.offsetHeight / 2;
      //Sets font size and position
      element.style.fontSize = '24px';
      element.style.left = `${pX}px`;
      element.style.top = `${pY}px`;
      element.style.zIndex = 0;
    },
    dragOver(e) {
      e.preventDefault();
    },
    drop(e) {
      const dropData = JSON.parse(e.dataTransfer.getData('data'));
      const elToBuild = { sticker: CanvasSticker, text: CanvasText };

      // Add canvas element to the canvas
      const elementInstance = mountComponentToParent(elToBuild[dropData.type], this.$refs.canvas, dropData.props);
      const element = elementInstance.$el;
      const uid = (element.dataset.uid = elementInstance.id);
      element.dataset.uid = uid;

      if (dropData.type === 'sticker') {
        this.setupDropSticker(e, dropData, element);
      } else if (dropData.type === 'text') {
        this.setupDropText(e, dropData, element);
      }

      this.$nextTick(() => {
        const elementData = {
          type: dropData.type,
          rotate: 0,
          scale: 1,
          ...elementInstance._data, // includes uid and text if it's a text element
          ...elementInstance._props, // includes src if it's a sticker element
          ...getElementCanvasData(uid), // includes all the positioning, size and transform props
        };
        this.addCanvasElement(elementData);
        this.setSelectedCanvasElement(uid);
      });
    },
  },
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
    background-color: transparent;
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
