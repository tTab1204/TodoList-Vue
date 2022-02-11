<template>
  <div class="dropdown-wrapper" v-click-outside="onClickOutside">
    <div
      class="dropdown"
      @click.prevent="toggleDropdown"
      :style="removeBottomBorderRadius"
    >
      <div class="text">{{ selected }}</div>
    </div>
    <ul class="options" v-if="showDropdown">
      <li
        v-for="option in options"
        :key="option.value"
        class="option"
        :class="highlightSelectedItem(option.value)"
        @click.prevent="handleSelect(option.value, handleClose)"
      >
        <div class="text">{{ option.value }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { checkClickOutside } from "@/utils/checkClickOutside";
export default {
  directives: {
    "click-outside": checkClickOutside,
  },

  props: {
    progress: {
      type: String,
    },
    options: {
      type: Array,
    },
    selected: {
      type: String,
    },
    handleSelect: {
      type: Function,
    },
  },

  data() {
    return {
      showDropdown: false,
    };
  },

  computed: {
    removeBottomBorderRadius() {
      return {
        borderRadius: this.showDropdown ? "10px 10px 0 0" : "10px",
      };
    },
  },

  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    handleClose() {
      this.showDropdown = false;
    },

    onClickOutside() {
      this.showDropdown = false;
    },

    highlightSelectedItem(option) {
      return {
        selectedItem: this.selected === option,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
  min-width: 90px;
  max-width: 160px;
}

.dropdown {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: rem(10px);
  background: $white;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: rem(16px);
  line-height: rem(18px);
  color: $gray-06;
  padding: rem(10px) rem(12px) rem(8px) rem(16px);
  box-shadow: rgb(0 0 0 / 16%) 0px 2px 6px;
  cursor: pointer;

  &:hover {
    background: $gray-02;
  }
}

.closeDropdown {
  display: none;
}

.options {
  position: absolute;
  display: block;
  min-width: 90px;
  max-width: 160px;
  border-radius: 0 0 rem(10px) rem(10px);
  background: $white;
  box-shadow: rgb(0 0 0 / 16%) 0px 2px 6px;
  z-index: 100;
}

.option {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: rem(16px);
  line-height: rem(18px);
  color: $gray-06;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: rem(8px) rem(12px) rem(8px) rem(16px);
  cursor: pointer;

  &:hover {
    background: $gray-03;
  }
  :last-child {
    border-radius: 0 0 rem(10px) rem(10px);
  }
}
.selectedItem {
  background: $primary-20;
  color: $primary-100;

  &:hover {
    background: $primary-40;
  }
}
</style>
