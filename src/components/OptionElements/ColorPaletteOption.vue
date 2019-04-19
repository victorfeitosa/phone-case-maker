<template>
  <v-flex>
    <div
      class="color-option"
      @click="setFontColor(color)"
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
      required: true,
    },
  },
  methods: {
    ...mapMutations({ setFontColor: 'control/setSelectedFontColor' }),
  },
  computed: {
    ...mapGetters({ colors: 'palette/colors', getColor: 'palette/color' }),
    hexColor() {
      const pickedColor = this.getColor(this.color);
      return pickedColor.value;
    },
  },
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

