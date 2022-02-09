<template>
  <div class="body-container">
    <TodoCreate />
    <div class="wrapper">
      <Category />
      <Importances />
    </div>
    <!-- <div v-for="todo in todos">:key "todo.id"</div> -->
  </div>
</template>

<script>
import TodoCreate from "@/components/TodoCreate";
import Category from "@/components/Category";
import Importances from "@/components/Importances.vue";

export default {
  components: { TodoCreate, Category, Importances },
};
</script>

<style lang="scss" scoped>
.body-container {
  padding: rem(37px) rem(170px);

  @media screen and (max-width: 780px) {
    padding: rem(12px) rem(20px);
  }
}

.wrapper {
  display: flex;
  align-items: center;
  margin-top: rem(38px);
}
</style>
