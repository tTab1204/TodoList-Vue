import Vue from "vue";

export const checkClickOutside = Vue.directive("click-outside", {
  bind(el, binding, vnode) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        // 이 코드의 의미가 뭐야? 객체 마지막에 괄호를 넣는건 또 뭐고..?
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener("mousedown", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("mousedown", el.clickOutsideEvent);
  },
});
