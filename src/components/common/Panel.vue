<template>
  <div class="panel-container">
    <div class="header">
      <div class="progress">
        {{ progress }}
        <div class="card-number">2</div>
      </div>
      <div class="dropdown-menu">생성순</div>
    </div>
    <Card v-for="todo in progressMatchedTodos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import Card from "@/components/common/Card.vue";
import { mapState } from "vuex";

export default {
  props: {
    progress: {
      type: String,
      required: true,
    },
  },

  components: {
    IconBase,
    Card,
  },

  computed: {
    ...mapState({
      todos: "todos",
    }),

    progressMatchedTodos() {
      return this.todos.filter((todo) => todo.progress.includes(this.progress));
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-container {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: rem(350px);
  height: rem(610px);
  border-radius: rem(10px);
  background: $gray-02;
  padding: rem(22px) rem(26px);
  padding-top: 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: $gray-02;
  margin-bottom: rem(19px);
  padding-top: rem(22px);
  padding-bottom: rem(10px);
}

.progress {
  display: flex;
  align-items: center;

  font-weight: 500;
  font-size: rem(20px);
  line-height: 130%;

  & > .card-number {
    font-size: rem(18px);
    font-weight: 500;
    color: $gray-05;
    margin-left: rem(10px);
  }
}

.dropdown-menu {
  display: flex;
  align-items: center;
  background: $white;
  border: 1px solid $gray-04;
  border-radius: rem(10px);
  font-size: rem(16px);

  padding: rem(7px) rem(14px);
}
</style>
