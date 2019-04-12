<template>
  <v-container grid-list-md>
    <v-layout row wrap class="scroll-y" style="max-height: 200px;">
      <!-- <TextItem font="Sue Ellen Francisco" /> -->
      <TextItem font="League Script" />
      <TextItem font="Dancing Script" />
      <TextItem font="Great Vibes" />
      <TextItem font="Sacramento" />
      <TextItem font="Sue Ellen Francisco" />
      <TextItem font="Cabin Sketch" />
    </v-layout>
  </v-container>
</template>

<script>
import TextItem from '../ToolElements/TextItem';

export default {
  components: {
    TextItem
  }
};
</script>

<style lang="scss" scoped>
</style>

