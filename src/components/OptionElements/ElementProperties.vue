<template>
  <v-layout row fill-height>
    <v-flex xs12>
      <v-card flat v-if="tabActive === 'sticker'">
        <v-item-group>
          <v-container grid-list-md>
            <v-layout wrap>
              <!-- Sticker Items -->
              <v-flex xs8 md4>
                <v-item>Sticker</v-item>
              </v-flex>
            </v-layout>
          </v-container>
        </v-item-group>
      </v-card>
      <v-card flat v-else>
        <v-item-group>
          <v-container grid-list-md>
            <v-layout wrap>
              <!-- Sticker Items -->
              <v-flex xs8 md4>
                <v-item>Text Font</v-item>
              </v-flex>
            </v-layout>
          </v-container>
        </v-item-group>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    tabActive: {
      type: String,
      default: 'sticker'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
