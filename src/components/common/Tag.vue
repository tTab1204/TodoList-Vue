<template>
  <div class="tag" @click.prevent="onClick(name)">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $gray-02;
  border-radius: rem(5px);
  font-size: rem(14px);
  padding: rem(7px) rem(9px);
  margin-right: rem(5px);
  cursor: pointer;

  &:hover {
    background: $gray-03;
  }
}

.clickedTag {
  background: $gray-03;
  font-weight: 600;
}
</style>
