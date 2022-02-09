<template>
  <form @submit.prevent="addTodo" class="container">
    <InputBox v-model="inputValue" @date="getCurrentDate" />
    <Button name="추가하기" :onClick="addTodo" />
  </form>
</template>

<script>
import InputBox from "./common/InputBox";
import Button from "./common/Button";
import generateUniqueId from "@/utils/generateUniqueId";
import store from "@/utils/store";
import { VALID_INPUT_MESSAGE } from "@/constants";
import { mapMutations, mapState } from "vuex";

export default {
  components: { InputBox, Button },
  data() {
    return {
      inputValue: "",
      todos: [],
      date: "",
    };
  },

  created() {
    this.todos = store.getData();
  },

  computed: {
    ...mapState({
      showDate: "showDate",
    }),
  },

  methods: {
    ...mapMutations(["SHOW_DATE"]),

    addTodo() {
      if (!this.inputValue.trim()) {
        alert(VALID_INPUT_MESSAGE);
        return;
      }
      const todo = {
        id: generateUniqueId(),
        name: this.inputValue,
        done: false,
        dueDate: this.date,
      };

      this.todos.push(todo);
      store.setData(this.todos);
      this.inputValue = "";
      this.date = "";
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

  & > button {
    margin-left: 10px;
  }
}
</style>
