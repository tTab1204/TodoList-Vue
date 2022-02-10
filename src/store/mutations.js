import store from "@/utils/store";
import { IN_PROGRESS, DONE } from "@/constants";

const mutations = {
  SHOW_MODAL(state, toggle) {
    state.showModal = toggle;
  },
  SHOW_DATE(state, toggle) {
    state.showDate = toggle;
  },
  CATEGORY(state, category) {
    state.category = category;
  },
  IMPORTANCE(state, importance) {
    state.importance = importance;
  },
  TODOS(state, todos) {
    state.todos = todos;
  },
  ADD_TODO(state, todoItem) {
    state.todos.push(todoItem);
    store.setData(state.todos);
  },
  CHANGE_PROGRESS(state, id) {
    state.todos = state.todos.map((todo) =>
      todo.id === id ? { ...todo, progress: IN_PROGRESS } : todo
    );
    store.setData(state.todos);
  },
  CHECKED(state, id) {
    state.todos = state.todos = state.todos.map((todo) =>
      todo.id === id ? { ...todo, progress: DONE } : todo
    );
    store.setData(state.todos);
  },
  REMOVE_TODO(state) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
    store.setData(state.todos);
  },
};

export default mutations;
