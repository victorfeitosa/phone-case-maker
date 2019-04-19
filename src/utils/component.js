import Vue from 'vue';
import store from '../stores/store';
import axios from 'axios';

export function mountComponentToParent(vueComponentToMount, parentEl, props) {
  const componentClass = Vue.extend(vueComponentToMount);
  const instance = new componentClass({
    store,
    propsData: props,
  });

  instance.$mount();
  parentEl.appendChild(instance.$el);

  return instance;
}

export function getElementCanvasData(elementId) {
  const element = document.querySelector(`[data-uid="${elementId}"]`);
  let canvasData = null;
  if (element) {
    canvasData = {
      ...element._props,
      left: element.offsetLeft,
      top: element.offsetTop,
      height: element.offsetHeight,
      width: element.offsetWidth,
      transform: element.style.transform,
      zIndex: element.style.zIndex,
    };
  }
  return canvasData;
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
      headers: { 'Content-Type': 'multipart/form-data', 'X-Requested-With': 'XMLHttpRequest' },
      url: '/upload-background',
      data: formData,
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
