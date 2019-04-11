<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-start>
      <StickerItem src="images/stickers/cute/poop.svg" alt="poop" />
      <StickerItem src="images/stickers/cute/cactus.svg" alt="cactus" />
      <StickerItem src="images/stickers/cute/kiss.svg" alt="kiss" />
      <StickerItem src="images/stickers/cute/pot.svg" alt="pot" />
      <StickerItem src="images/stickers/cute/fries.svg" alt="fries" />
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
</style>

