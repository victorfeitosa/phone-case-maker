<template>
  <v-layout row wrap pt-4>
    <!-- Title -->
    <v-layout row>
      <v-flex xs12>
        <h2 class="title text-xs-left">Elements</h2>
      </v-flex>
    </v-layout>

    <!-- Element Options -->
    <v-flex xs12 text-xs-left py-0>
      <ElementOption />
      <ElementOption />
    </v-flex>
    <!-- Element Properties -->
    <ElementProperties />
  </v-layout>
</template>

<script>
import ElementOption from '../OptionElements/ElementOption';
import ElementProperties from '../OptionElements/ElementProperties';

export default {
  components: {
    ElementOption,
    ElementProperties
  }
};
</script>

<style lang="scss" scoped>
</style>
