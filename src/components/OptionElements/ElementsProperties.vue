<template>
  <v-layout>
    <v-flex xs12>
      <!-- Sticker Items -->
      <StickerPicker v-if="tabActive === 'sticker'" />
      <TextPicker v-else />
    </v-flex>
  </v-layout>
</template>

<script>
import TextPicker from '../PickerElements/TextPicker';
import StickerPicker from '../PickerElements/StickerPicker';

export default {
  components: {
    TextPicker,
    StickerPicker,
  },
  props: {
    tabActive: {
      type: String,
      default: 'sticker',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
