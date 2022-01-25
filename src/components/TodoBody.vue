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
  padding: rem(37px) rem(170px);

  @media screen and (max-width: 780px) {
    padding: rem(12px) rem(20px);
  }
}
</style>
