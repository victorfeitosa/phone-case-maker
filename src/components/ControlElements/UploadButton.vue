<template>
  <div>
    <form
      id="file-form"
      method="POST"
      enctype="multipart/form-data"
      accept=".jpg, .jpeg, .png, .svg, .bmp"
      style="display: none"
    >
      <input @change="uploadImage" type="file" ref="uploadInput" />
    </form>
    <v-btn @click="$refs.uploadInput.click()" small dark color="cyan">
      Upload Image
    </v-btn>
  </div>
</template>

<script>
import { uploadbackgroundImage } from '../../utils/componentUtils.js';
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({ setBackgroundImage: 'background/setBackgroundImage' }),
    uploadImage(e) {
      uploadbackgroundImage(this.refs.uploadInput)
        .then(result => {
          console.log(result.filename);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>


