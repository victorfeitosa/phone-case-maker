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
