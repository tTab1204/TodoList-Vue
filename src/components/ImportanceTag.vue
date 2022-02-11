<template>
  <div class="tag" @click.prevent="onClick(name)">
    <div slot="circle" class="tag-circle" :class="setImportanceColor"></div>
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
    icon: {
      type: Boolean,
    },
  },

  computed: {
    setImportanceColor() {
      return {
        top: this.name === "상",
        middle: this.name === "중",
        low: this.name === "하",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  display: flex;
  justify-content: center;
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
}

.clickedTag {
  background: $gray-03;
  font-weight: 600;
}

.circle {
  justify-content: space-between;
}

.tag-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: rem(6px);
}

.top {
  background: $orange;
}

.middle {
  background: $yellow;
}

.low {
  background: $green;
}
</style>
