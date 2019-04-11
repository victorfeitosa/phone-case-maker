<template>
  <div class="drop-area" @dragover="dragOver" @drop="drop"></div>
</template>

<script>
export default {
  methods: {
    dragOver: function(e) {
      e.preventDefault();
    },
    drop: function(e) {
      e.preventDefault();
      console.log(e.layerX, e.layerY);
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
}
</style>

