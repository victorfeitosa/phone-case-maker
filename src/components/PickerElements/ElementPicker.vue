<template>
  <v-layout column pt-4>
    <v-flex>
      <!-- Title -->
      <h2 class="title text-xs-left">Elements</h2>
    </v-flex>

    <!-- Element Options -->
    <v-flex text-xs-left>
      <ElementOption
        icon="insert_emoticon"
        label="Add a Sticker"
        @click="setSelectedOptionElement('sticker')"
      />
      <ElementOption
        icon="text_fields"
        label="Add a Text Element"
        @click="setSelectedOptionElement('text')"
      />
    </v-flex>

    <!-- Element Properties -->
    <v-flex class="scroll-y" max-height="250">
      <ElementProperties :tab-active="selectedOptionElement" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import ElementOption from '../OptionElements/ElementOption';
import ElementProperties from '../OptionElements/ElementProperties';

export default {
  components: {
    ElementOption,
    ElementProperties
  },
  computed: {
    ...mapGetters(['selectedOptionElement']),
    ...mapState(['optionElement'])
  },
  methods: {
    ...mapMutations(['setSelectedOptionElement'])
  }
};
</script>

<style lang="scss" scoped>
</style>
