import { dropdownOptions } from "@/constants";

const sortTodos = (todos, option) => {
  const { PRODUCE_ORDER, IMPORTANCE_ORDER, DATE_ORDER } = dropdownOptions;

  if (option === PRODUCE_ORDER) {
    return todos;
  }
  if (option === IMPORTANCE_ORDER) {
    todos.sort((a) => {
      if (a.importance === "상") {
        return -1;
      }
      if (a.importance === "중") {
        return 0;
      }
      if (a.importance === "하") {
        return 1;
      }
    });
  }
};

export default sortTodos;
