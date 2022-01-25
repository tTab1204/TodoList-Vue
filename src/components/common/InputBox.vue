<template>
  <input
    type="text"
    placeholder="할 일을 작성하세요."
    v-bind:value="value"
    v-on:input="updateInput"
  />
</template>

<script>
export default {
  props: ["value"],
  methods: {
    updateInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
input {
  flex-grow: 1;
  height: 45px;
  border: 1px solid $gray-03;
  border-radius: rem(5px);
  font-size: 18px;
  padding: rem(23px) rem(15px);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: $gray-04;
  }
}
</style>
