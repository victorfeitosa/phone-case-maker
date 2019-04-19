<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn square dark flat color="blue" v-on="on" @click="click">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <span>{{ label }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    click(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.option-icon {
  background-position: center;
  background-size: contain;
  height: 100%;
  width: 100%;
}
</style>
