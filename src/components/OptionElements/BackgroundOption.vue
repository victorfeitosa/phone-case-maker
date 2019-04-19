<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon :flat="!selected" dark color="cyan" v-on="on" @click="click">
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
    selected: {
      type: Boolean,
      default: false,
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
</style>


