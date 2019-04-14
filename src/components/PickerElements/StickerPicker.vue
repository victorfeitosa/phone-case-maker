<template>
  <v-container>
    <v-layout row pa-2 wrap align-center class="sticker-picker scroll-y">
      <StickerItem src="images/stickers/cute/poop.svg" alt="poop" />
      <StickerItem src="images/stickers/cute/cactus.svg" alt="cactus" />
      <StickerItem src="images/stickers/cute/kiss.svg" alt="kiss" />
      <StickerItem src="images/stickers/cute/pot.svg" alt="pot" />
      <StickerItem src="images/stickers/cute/fries.svg" alt="fries" />
      <StickerItem src="images/stickers/cute/happy.svg" alt="fries" />
    </v-layout>
  </v-container>
</template>

<script>
import StickerItem from '../ToolElements/StickerItem';
export default {
  components: {
    StickerItem
  }
};
</script>

<style lang="scss" scoped>
.sticker-picker {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  max-height: 30vh;
}
</style>

