<template>
  <form @submit.prevent="addTodo" class="container">
    <InputBox v-model="inputValue" />
    <Button />
  </form>
</template>

<script>
import InputBox from "./common/InputBox";
import Button from "./common/Button";
import generateUniqueId from "@/utils/generateUniqueId";
import store from "@/utils/store";

export default {
  components: { InputBox, Button },
  data() {
    return {
      inputValue: "",
      todos: [],
    };
  },

  methods: {
    addTodo() {
      if (!this.inputValue.trim()) {
        alert("할 일을 입력하세요!");
        return;
      }
      const todo = {
        id: generateUniqueId(),
        name: this.inputValue,
        done: false,
      };

      this.todos.push(todo);
      store.setData(this.todos);
      this.inputValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  & > input {
    margin-right: rem(9px);
  }
}
</style>
