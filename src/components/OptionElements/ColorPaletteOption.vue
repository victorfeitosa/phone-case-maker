<template>
  <v-flex>
    <div
      class="color-option"
      @click="setTextColor(color)"
      :style="{ backgroundColor: hexColor }"
    ></div>
  </v-flex>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapGetters(['colorPalette']),
    ...mapMutations(['setTextColor'])
  },
  computed: {
    hexColor() {
      const pickedColor =
        this.colorPalette().filter(p => p.name === this.color)[0] ||
        this.colorPalette().default;
      return pickedColor.value;
    }
  }
};
</script>

<style lang="scss" scoped>
$palette-size: 26px;

.color-option {
  border: 1px solid #e0e0e0;
  display: inline-block;
  height: $palette-size;
  width: $palette-size;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1) translateY(-2px);
  }
}
</style>

