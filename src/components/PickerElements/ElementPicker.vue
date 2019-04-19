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
        @click="setElementType('sticker')"
      />
      <ElementOption
        icon="text_fields"
        label="Add a Text Element"
        @click="setElementType('text')"
      />
    </v-flex>

    <!-- Element Properties -->
    <v-flex class="scroll-y" max-height="250">
      <ElementsProperties :tab-active="elementType" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ElementOption from '../OptionElements/ElementOption';
import ElementsProperties from '../OptionElements/ElementsProperties';

export default {
  components: {
    ElementOption,
    ElementsProperties,
  },
  computed: {
    ...mapGetters({ elementType: 'control/getElementType' }),
  },
  methods: {
    ...mapMutations({ setElementType: 'control/setElementType' }),
  },
};
</script>
