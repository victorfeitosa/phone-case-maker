<template>
  <v-layout row wrap>
    <v-flex xs12>
      <!-- Title -->
      <v-layout row>
        <v-flex xs12>
          <h2 class="title text-xs-left">Background</h2>
        </v-flex>
      </v-layout>

      <!-- Sections -->
      <!-- Background Options -->
      <v-layout row wrap align-center align-content-center>
        <v-flex xs12 text-xs-left>
          <h3 class="subheading text-xs-left">Images</h3>
        </v-flex>
        <v-flex xs12 md8 align-center text-xs-left>
          <BackgroundItem src="" />
          <BackgroundItem src="/images/backgrounds/sunset.jpg" />
          <BackgroundItem src="/images/backgrounds/cacti.jpg" />
          <BackgroundItem src="/images/backgrounds/lama.jpg" />
          <BackgroundItem src="/images/backgrounds/stripes.jpg" />
          <BackgroundItem src="/images/backgrounds/flowers.jpg" />
        </v-flex>
        <v-flex xs12 md4 pa-0>
          <UploadButton />
        </v-flex>
      </v-layout>

      <!-- Alignment Options -->
      <v-layout>
        <v-flex xs12>
          <h3 class="subheading text-xs-left">Alignment & Size</h3>
          <BackgroundAlignmentOptions />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import BackgroundItem from '../OptionElements/BackgroundItem';
import BackgroundAlignmentOptions from '../OptionElements/BackgroundAlignmentOptions';
import UploadButton from '../ControlElements/UploadButton';

export default {
  components: {
    BackgroundItem,
    BackgroundAlignmentOptions,
    UploadButton,
  },
};
</script>

