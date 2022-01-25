<template>
  <div class="body-container">
    <TodoCreate />
    <Category />
    <!-- <div v-for="todo in todos">:key "todo.id"</div> -->
  </div>
</template>

<script>
import TodoCreate from "./TodoCreate";
import Category from "./Category";

export default {
  components: { TodoCreate, Category },
};
</script>

<style lang="scss" scoped>
.body-container {
  border: 1px solid black;
  padding: rem(37px) rem(170px);
}
</style>
