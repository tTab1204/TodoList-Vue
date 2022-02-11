<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="hidden-checkbox"
      @change="onChange($event, todo.id)"
    />
  </label>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";

export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },

    onChange: {
      type: Function,
    },
    todo: {
      type: Object,
    },
  },

  components: {
    IconBase,
    CheckIcon,
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
  width: 25px;
  height: 25px;
  border: 1px solid $gray-04;
  border-radius: 50%;
  background: $white;
  cursor: pointer;
  transition: ease 0.1s;

  & > svg {
    position: absolute;
  }
}

.hidden-checkbox {
  width: 1px;
  height: 1px;
  position: absolute;
  clip: rect(0 0 0 0);
  border: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
}

.checked {
  background: $gray-06;
}
</style>
