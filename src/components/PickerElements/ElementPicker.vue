<template>
  <v-layout row wrap>
    <!-- Title -->
    <v-layout row>
      <v-flex xs12>
        <h3 class="subheading text-xs-left">Elements</h3>
      </v-flex>
    </v-layout>

    <!-- Element Options -->
    <ElementOption />
    <ElementOption />
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
