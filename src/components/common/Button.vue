<template>
  <button :type="type" @click.prevent="onClick">
    {{ name }}
  </button>
</template>

<script>
// Button 공통 컴포넌트 만들기 Vue.js
// https://codeburst.io/creating-reusable-components-with-vue-js-button-component-503167facfde
export default {
  props: {
    type: {
      type: String,
      default: "submit",
    },
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    color: {
      type: String,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: $primary-100;
  border-radius: rem(5px);
  font-weight: 500;
  font-family: "Pretendard";
  font-size: rem(16px);
  color: $white;
  padding: rem(12px);
  cursor: pointer;
}
</style>
