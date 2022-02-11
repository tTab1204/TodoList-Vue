<template>
  <div class="container">
    <div class="title">중요도</div>
    <Tag
      :icon="true"
      v-for="importance in importances"
      :key="importance"
      :class="clickedStyle(importance)"
      :onClick="onHandleClicked"
      :name="importance"
    >
      <slot name="icon"></slot>
    </Tag>
  </div>
</template>

<script>
import Tag from "@/components/common/Tag.vue";
import { importances } from "@/constants";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    Tag,
  },
  data() {
    return {
      importances: importances,
    };
  },

  computed: {
    ...mapState({
      importance: "importance",
    }),
  },

  methods: {
    ...mapMutations(["IMPORTANCE"]),

    onHandleClicked(importance) {
      this.IMPORTANCE(importance);
    },

    clickedStyle(importance) {
      return {
        clickedTag: this.importance === importance,
        icon: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: rem(14px);
  color: $gray-05;
  margin-right: 16px;
}
</style>
