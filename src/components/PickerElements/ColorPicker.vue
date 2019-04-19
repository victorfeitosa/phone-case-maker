<template>
  <v-layout row justify-space-between align-end class="color-picker">
    <ColorPaletteOption color="default" />
    <ColorPaletteOption color="white" />
    <ColorPaletteOption color="cherry" />
    <ColorPaletteOption color="strawberry" />
    <ColorPaletteOption color="lime" />
    <ColorPaletteOption color="passion" />
    <ColorPaletteOption color="avocado" />
    <ColorPaletteOption color="acqua" />
    <ColorPaletteOption color="blueberry" />
    <ColorPaletteOption color="grape" />
  </v-layout>
</template>

<script>
import ColorPaletteOption from '../OptionElements/ColorPaletteOption';
export default {
  components: {
    ColorPaletteOption,
  },
};
</script>

