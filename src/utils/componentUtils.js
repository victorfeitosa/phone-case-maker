import Vue from 'vue';
import store from '../stores/store';

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
