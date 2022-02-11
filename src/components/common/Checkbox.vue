<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="hidden-checkbox"
      @change="onChange($event, todo.id)"
      :disabled="disabled"
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
    disabled: {
      type: Boolean,
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
  border: 1px solid $primary-80;
  border-radius: 50%;
  background: $white;
  cursor: pointer;

  & > svg {
    position: absolute;
  }

  &:hover {
    background: $primary-20;
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
  background: $primary-80;

  &:hover {
    background: $primary-80;
  }
}
</style>
