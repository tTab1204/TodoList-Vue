<template>
  <div class="todo-list">
    <TodoHeader />
    <TodoBody />
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoBody from "@/components/TodoBody.vue";

export default {
  components: {
    TodoHeader,
    TodoBody,
  },
};
</script>

<style lang="scss" scoped></style>
