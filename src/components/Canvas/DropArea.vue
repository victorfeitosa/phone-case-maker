<template>
  <div class="drop-area" @dragover="dragOver" @drop="drop">
    <div
      class="drop-area__background"
      :style="{ backgroundImage: backgroundUrl }"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    backgroundUrl() {
      return `url("${this.caseBackground()}")`;
    }
  },
  methods: {
    ...mapGetters(['caseBackground']),
    dragOver: e => {
      e.preventDefault();
    },
    drop: e => {
      e.preventDefault();
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

