import Vue from 'vue';
import store from '../stores/store';
import axios from 'axios';

export function mountComponentToParent(vueComponentToMount, parentEl, props) {
  const componentClass = Vue.extend(vueComponentToMount);
  const instance = new componentClass({
    store,
    propsData: props
  });

  instance.$mount();
  parentEl.appendChild(instance.$el);

  return instance;
}

export function debounce(func, delay) {
  var timeout;
  return function () {
    const self = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  };
}

export function uploadbackgroundImage(fileInputHandle) {
  if (fileInputHandle && fileInputHandle.files && fileInputHandle.files.length) {
    const formData = new FormData();
    const file = fileInputHandle.files[0];
    formData.append('image', file);

    return axios({
      method: 'POST',
      headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'multipart/form-data' },
      url: '/upload-background',
      data: formData
    })
      .then(response => {
        return new Promise((resolve) => {
          resolve({ fileName: response.data.file });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
