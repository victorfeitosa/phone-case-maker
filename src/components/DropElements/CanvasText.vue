<template>
  <h2
    class="canvas-text"
    :style="{ fontFamily: font, color: color, textShadow }"
  >
    {{ text }}
  </h2>
</template>

<script>
import { mapGetters } from 'vuex';
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
    }
  },
  data() {
    return {
      id: uuid(),
      text: ''
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
  created() {
    this.text = this.getText;
  }
};
</script>

<style lang="scss" scoped>
.canvas-text {
  cursor: pointer;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  // padding: 0.5rem;
  position: absolute;
  width: auto;

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

