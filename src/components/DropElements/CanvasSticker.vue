<template>
  <v-img contain class="canvas-sticker" :src="src" @click="select"></v-img>
</template>

<script>
import uuid from 'uuid';
import { mapMutations } from 'vuex';

export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: uuid()
    };
  },
  methods: {
    ...mapMutations({ setSelectedCanvasElement: 'control/setSelectedCanvasElement' }),
    select() {
      this.setSelectedCanvasElement(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.canvas-sticker {
  cursor: pointer;
  display: inline-block;
  position: absolute;
}
</style>

