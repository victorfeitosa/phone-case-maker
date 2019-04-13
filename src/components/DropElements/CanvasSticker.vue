<template>
  <v-img class="canvas-sticker" :src="src" @click="select"></v-img>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  methods: {
    select() {
      console.log(this.src);
    }
  }
};
</script>

<style lang="scss" scoped>
.canvas-sticker {
  position: absolute;
}
</style>

