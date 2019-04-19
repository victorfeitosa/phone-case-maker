<template>
  <v-container grid-list-md>
    <v-layout row wrap align-baseline>
      <!-- Text Input -->
      <v-flex lg12 xl6>
        <v-text-field
          label="Text"
          @input="setText"
          :placeholder="text"
        ></v-text-field>
      </v-flex>
      <v-spacer />
      <!-- Color Picker -->
      <v-flex lg12 xl5 mr-1>
        <ColorPicker />
      </v-flex>
    </v-layout>

    <!-- Text Font Options -->
    <v-layout
      row
      justify-space-between
      mt-2
      align-center
      wrap
      class="text-picker scroll-y"
    >
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
import { mapMutations, mapGetters } from 'vuex';
import TextItem from '../ToolElements/TextItem';
import ColorPicker from '../PickerElements/ColorPicker';

export default {
  components: {
    TextItem,
    ColorPicker,
  },
  computed: {
    ...mapGetters({ text: 'control/getText' }),
  },
  methods: {
    ...mapMutations({ setText: 'control/setText' }),
  },
};
</script>

<style lang="scss" scoped>
$border: 1px solid #e0e0e0;
$border-radius: 4px;

.text-picker {
  border: $border;
  border-radius: $border-radius;
  max-height: 30vh;
}
</style>

