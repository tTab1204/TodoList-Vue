<template>
  <div class="container">
    <div class="title">카테고리</div>
    <Tag
      v-for="category in categories"
      :key="category.value"
      :class="clickedStyle(category.value)"
      :onClick="onHandleClicked"
      :category="category"
    >
      <template v-slot:category>
        <img :src="category.icon" :alt="category.value" />
        {{ category.value }}
      </template>
    </Tag>
  </div>
</template>

<script>
import { categories } from "@/constants";
import { mapMutations, mapState } from "vuex";
import Tag from "@/components/common/Tag.vue";

export default {
  components: {
    Tag,
  },

  data() {
    return {
      categories: categories,
    };
  },

  computed: {
    ...mapState({
      category: "category",
    }),
  },

  methods: {
    ...mapMutations(["CATEGORY"]),

    onHandleClicked(category) {
      this.CATEGORY(category);
    },

    clickedStyle(category) {
      return {
        clickedTag: this.category === category,
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
  margin-right: rem(50px);
}

.title {
  font-size: rem(14px);
  color: $gray-05;
  margin-right: rem(16px);
}
</style>
