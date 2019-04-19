<template>
  <div>
    <form
      method="POST"
      enctype="multipart/form-data"
      accept=".jpg, .jpeg, .png, .svg, .bmp"
      style="display: none"
    >
      <input @change="uploadImage" type="file" ref="uploadInput" />
    </form>
    <v-btn
      :loading="loading"
      :disabled="loading"
      @click="pickImage"
      :dark="!loading"
      color="cyan"
    >
      Upload Image
    </v-btn>
  </div>
</template>

<script>
import { uploadbackgroundImage } from '../../utils/component.js';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapMutations({ setBackgroundImage: 'background/setBackgroundImage' }),
    pickImage() {
      this.$refs.uploadInput.click();
    },
    uploadImage() {
      this.loading = true;
      uploadbackgroundImage(this.$refs.uploadInput)
        .then(result => {
          this.setBackgroundImage(`/images/uploaded/${result.fileName}`);
          this.loading = false;
        })
        .catch(err => {
          console.error(err);
          this.loading = false;
        });
    },
  },
};
</script>


