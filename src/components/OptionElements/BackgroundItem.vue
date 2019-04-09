<template>
  <div class="background-option ma-1">{{ penis }}</div>
</template>

<script>
export default {
  props: {
    penis: String
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.background-option {
  background-color: red;
  display: inline-block;
  font-size: 12px;
  height: 4rem;
  width: 4rem;
}
</style>

