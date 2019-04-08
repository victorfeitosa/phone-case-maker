<template>
  <v-container grid-list-lg pa-0 fill-height class="page">
    <v-layout>
      <v-flex md6 class="grey lighten-4">
        <!-- Canvas element goes here -->
        Canvas
        <v-layout row justify-center fill-height>
          <v-flex md9 class="purple">Canvas area</v-flex>
        </v-layout>
      </v-flex>
      <v-flex md6 pa-4>
        <!-- Controls go here -->
        Controls
        <v-layout column class="blue">
          Background controls
        </v-layout>
        <v-layout column class="green">
          Drop Elements
        </v-layout>
        <v-layout column class="yellow" fill-height>
          Element Options
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  height: 80vh;
  overflow: hidden;
  width: 70vw;
}
</style>

