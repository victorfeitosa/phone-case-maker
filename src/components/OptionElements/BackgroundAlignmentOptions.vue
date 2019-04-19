<template>
  <v-layout row wrap justify-start>
    <v-flex xs12 text-xs-left py-0>
      <BackgroundOption
        label="Align to top"
        icon="border_top"
        :selected="alignTop"
        @click="setAlignTop"
      />
      <BackgroundOption
        label="Align to vertical center"
        icon="border_horizontal"
        :selected="alignMiddle"
        @click="setAlignMiddle"
      />
      <BackgroundOption
        label="Align to bottom"
        icon="border_bottom"
        :selected="alignBottom"
        @click="setAlignBottom"
      />
      <BackgroundOption
        label="Align to left"
        icon="border_left"
        :selected="alignLeft"
        @click="setAlignLeft"
      />
      <BackgroundOption
        label="Align to horizontal center"
        icon="border_vertical"
        :selected="alignCenter"
        @click="setAlignCenter"
      />
      <BackgroundOption
        label="Align to right"
        icon="border_right"
        :selected="alignRight"
        @click="setAlignRight"
      />
    </v-flex>
    <v-flex xs12 text-xs-left py-0>
      <BackgroundOption
        label="Background fit"
        icon="crop_portrait"
        :selected="contain"
        @click="setContain"
      />
      <BackgroundOption
        label="Background cover"
        icon="crop_landscape"
        :selected="cover"
        @click="setCover"
      />
      <BackgroundOption
        label="Background stretch"
        icon="crop_din"
        :selected="stretch"
        @click="setStretch"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import BackgroundOption from './BackgroundOption';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    BackgroundOption,
  },
  computed: {
    ...mapGetters({
      alignTop: 'background/isAlignedYTop',
      alignMiddle: 'background/isAlignedYCenter',
      alignBottom: 'background/isAlignedYBottom',

      alignLeft: 'background/isAlignedXLeft',
      alignCenter: 'background/isAlignedXCenter',
      alignRight: 'background/isAlignedXRight',

      stretch: 'background/isStretched',
      cover: 'background/isCover',
      contain: 'background/isContain',
    }),
  },
  methods: {
    ...mapMutations({
      setAlignTop: 'background/setAlignYTop',
      setAlignMiddle: 'background/setAlignYCenter',
      setAlignBottom: 'background/setAlignYBottom',

      setAlignLeft: 'background/setAlignXLeft',
      setAlignCenter: 'background/setAlignXCenter',
      setAlignRight: 'background/setAlignXRight',

      setStretch: 'background/setSizeStretch',
      setCover: 'background/setSizeCover',
      setContain: 'background/setSizeContain',
    }),
  },
};
</script>

