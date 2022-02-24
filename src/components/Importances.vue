<template>
  <div class="container">
    <div class="title">중요도</div>
    <Tag
      v-for="importance in importances"
      :key="importance"
      :class="clickedStyle(importance)"
      :onClick="onHandleClicked"
      :name="importance"
    >
      <template v-slot:importance>
        <div class="tag-circle" :class="setImportanceColor(importance)"></div>
      </template>
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
    setImportanceColor(importance) {
      return {
        top: importance === "상",
        middle: importance === "중",
        low: importance === "하",
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
