<template>
  <v-layout row wrap justify-start>
    <v-flex xs12 text-xs-left py-0>
      <BackgroundOption
        label="Align to top"
        icon="border_top"
        @click="doSomething"
      />
      <BackgroundOption
        label="Align to vertical center"
        icon="border_horizontal"
        @click="doSomething"
      />
      <BackgroundOption
        label="Align to bottom"
        icon="border_bottom"
        @click="doSomething"
      />
      <BackgroundOption
        label="Align to left"
        icon="border_left"
        @click="doSomething"
      />
      <BackgroundOption
        label="Align to horizontal center"
        icon="border_vertical"
        @click="doSomething"
      />
      <BackgroundOption
        label="Align to right"
        icon="border_right"
        @click="doSomething"
      />
    </v-flex>
    <v-flex xs12 text-xs-left py-0>
      <BackgroundOption
        label="Background fit"
        icon="crop_portrait"
        @click="doSomething"
      />
      <BackgroundOption
        label="Background cover"
        icon="crop_landscape"
        @click="doSomething"
      />
      <BackgroundOption
        label="Background stretch"
        icon="crop_din"
        @click="doSomething"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import BackgroundOption from './BackgroundOption';

export default {
  components: {
    BackgroundOption
  },
  methods: {
    doSomething: function() {
      console.log('DOES SOMETHING');
    }
  }
};
</script>

