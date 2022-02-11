<template>
  <div class="tag" @click.prevent="onClick(name)">
    <img :src="category.icon" :alt="category.value" />
    {{ category.value }}
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
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
  justify-content: space-between;
  align-items: center;
  background: $gray-02;
  border-radius: rem(5px);
  font-size: rem(14px);
  padding: rem(7px) rem(9px);
  margin-right: rem(5px);
  cursor: pointer;

  &:hover {
    background: $gray-03;
  }

  & > img {
    width: 18px;
    height: 18px;
    margin-right: rem(4px);
  }
}

.clickedTag {
  background: $gray-03;
  font-weight: 600;
}

.icon {
  justify-content: space-between;
}
</style>
