<template>
  <div
    class="background-option ma-1"
    :style="{
      backgroundImage: backgroundUrl
    }"
    @click="setBackgroundImage(src)"
  ></div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    backgroundUrl() {
      return `url("${this.src}")`;
    },
  },
  methods: {
    ...mapMutations({
      setBackgroundImage: 'background/setBackgroundImage',
    }),
  },
};
</script>

<style lang="scss" scoped>
.background-option {
  background-color: #eceff1;
  background-size: 100% 100%;
  border: 1px solid #eceff1;
  border-radius: 4px;
  display: inline-block;
  font-size: 12px;
  height: 4rem;
  transform-origin: center;
  width: 2.5rem;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    transform 0.15s ease-in-out;

  &:hover {
    border-color: #b0bec5;
    box-shadow: 0 2px 6px rgba(#212121, 0.3);
    transform: scale(1.08);
  }
}
</style>

