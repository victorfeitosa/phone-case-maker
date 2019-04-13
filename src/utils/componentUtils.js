import Vue from 'vue';

export function mountComponentToParent(vueComponentToMount, parentEl, props) {
  const componentClass = Vue.extend(vueComponentToMount);
  const instance = new componentClass({
    propsData: props
  });

  instance.$mount();
  parentEl.appendChild(instance.$el);

  return instance;
}
