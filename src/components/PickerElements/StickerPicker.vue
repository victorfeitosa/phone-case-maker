<template>
  <v-container>
    <v-layout row pa-2 wrap align-center class="sticker-picker scroll-y">
      <StickerItem src="images/stickers/cute/burger.svg" alt="burger" />
      <StickerItem src="images/stickers/cute/cactus.svg" alt="cactus" />
      <StickerItem src="images/stickers/cute/diamond.svg" alt="diamond" />
      <StickerItem src="images/stickers/cute/fries.svg" alt="fries" />
      <StickerItem src="images/stickers/cute/happy.svg" alt="happy" />
      <StickerItem src="images/stickers/cute/heart.svg" alt="heart" />
      <StickerItem src="images/stickers/cute/kiss.svg" alt="kiss" />
      <StickerItem src="images/stickers/cute/lolipop.svg" alt="lolipop" />
      <StickerItem src="images/stickers/cute/poop.svg" alt="poop" />
      <StickerItem src="images/stickers/cute/popsicle.svg" alt="popsicle" />
      <StickerItem src="images/stickers/cute/pot.svg" alt="pot" />
      <StickerItem src="images/stickers/cute/rainbow.svg" alt="rainbow" />
      <StickerItem
        src="images/stickers/cute/rollingstones.svg"
        alt="rollingstones"
      />
      <StickerItem src="images/stickers/cute/strawberry.svg" alt="strawberry" />

      <v-flex py-5 px-3 xs12>
        <v-divider />
      </v-flex>

      <StickerItem src="images/stickers/summer/enjoy.svg" alt="enjoy" />
      <StickerItem
        src="images/stickers/summer/hellosunshine.svg"
        alt="hellosunshine"
      />
      <StickerItem src="images/stickers/summer/holiday.svg" alt="holiday" />
      <StickerItem src="images/stickers/summer/paradise.svg" alt="paradise" />
      <StickerItem
        src="images/stickers/summer/summerflipflops.svg"
        alt="summer flip-flops"
      />
      <StickerItem
        src="images/stickers/summer/summertime.svg"
        alt="summer time"
      />
      <StickerItem src="images/stickers/summer/surf.svg" alt="surf" />
      <StickerItem
        src="images/stickers/summer/vacationshark.svg"
        alt="vacation shark"
      />
    </v-layout>
  </v-container>
</template>

<script>
import StickerItem from '../ToolElements/StickerItem';
export default {
  components: {
    StickerItem,
  },
};
</script>

<style lang="scss" scoped>
.sticker-picker {
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  max-height: 30vh;
}
</style>

