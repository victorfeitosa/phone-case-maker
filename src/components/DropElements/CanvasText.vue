<template>
  <h2
    class="canvas-text"
    :style="{ fontFamily: font, color: color, textShadow }"
    @click="select"
  >
    {{ text }}
  </h2>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import uuid from 'uuid';

export default {
  props: {
    font: {
      type: String,
      default: 'League Script'
    },
    color: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: uuid()
      // text: ''
    };
  },
  computed: {
    ...mapGetters({ getText: 'control/getText' }),
    textShadow() {
      return this.fontColor === 'white'
        ? '-1px -1px 0 #757575, 1px -1px 0 #757575, -1px 1px 0 #757575, 1px 1px 0 #757575'
        : '';
    }
  },
  methods: {
    ...mapMutations({ setSelectedCanvasElement: 'control/setSelectedCanvasElement' }),
    select() {
      this.setSelectedCanvasElement(this.id);
    }
  },
  created() {
    this.text = this.text || this.getText;
  }
};
</script>

<style lang="scss" scoped>
.canvas-text {
  cursor: pointer;
  height: auto !important;
  position: absolute;
  width: auto !important;
  white-space: nowrap;

  &::after {
    background-color: rgba(#00bcd4, 0.3);
    height: 100%;
    left: 0;
    position: absolute;
    opacity: 0;
    top: 0;
    width: 100%;
  }

  &:hover::after {
    content: "";
    opacity: 0.5;
  }
}
</style>

