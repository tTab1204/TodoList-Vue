<template>
  <form @submit.prevent="addTodo" class="container">
    <InputBox v-model="inputValue" @date="getCurrentDate" />
    <Button name="추가하기" :onClick="addTodo" />
  </form>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import InputBox from "./common/InputBox";
import Button from "./common/Button";
import generateUniqueId from "@/utils/generateUniqueId";
import store from "@/utils/store";
import { checkInputValidation } from "@/utils/checkValidation";

export default {
  components: { InputBox, Button },
  data() {
    return {
      inputValue: "",
      todos: [],
      date: "",
    };
  },

  computed: {
    ...mapState({
      showDate: "showDate",
      category: "category",
      importance: "importance",
      todos: "todos",
    }),
  },

  created() {
    if (store.getData()) {
      this.todos = store.getData();
      this.TODOS(this.todos);
    }
  },

  methods: {
    ...mapMutations(["SHOW_DATE", "CATEGORY", "IMPORTANCE", "TODOS"]),

    addTodo() {
      const checkValidation = checkInputValidation(this.inputValue);
      if (!checkValidation) return;

      const todo = {
        id: generateUniqueId(),
        name: this.inputValue,
        progress: "Not Started",
        category: this.category,
        importance: this.importance,
        dueDate: this.date,
      };

      this.todos.push(todo);
      store.setData(this.todos);
      this.TODOS(this.todos);

      this.inputValue = "";
      this.date = "";
      this.CATEGORY("");
      this.IMPORTANCE("");

      this.SHOW_DATE(false);
    },

    getCurrentDate(curDate) {
      this.date = curDate;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  max-width: rem(800px);

  & > button {
    margin-left: 10px;
  }
}
</style>
