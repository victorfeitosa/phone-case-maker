<template>
  <v-layout row wrap justify-start>
    <v-flex xs12 text-xs-left py-0>
      <BackgroundOption icon="align-top" @click="doSomething"/>
      <BackgroundOption icon="align-v-center"  @click="doSomething"/>
      <BackgroundOption icon="align-bottom"  @click="doSomething"/>
      <BackgroundOption icon="align-left"  @click="doSomething"/>
      <BackgroundOption icon="align-h-center"  @click="doSomething"/>
      <BackgroundOption icon="align-right"  @click="doSomething"/>
    </v-flex>
    <v-flex xs12 text-xs-left py-0>
      <BackgroundOption icon="bg-contain" @click="doSomething"/>
      <BackgroundOption icon="bg-cover" @click="doSomething"/>
      <BackgroundOption icon="bg-stretch" @click="doSomething"/>
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
    doSomething: function () {
      console.log('DOES SOMETHING');
    }
  }
};
</script>

