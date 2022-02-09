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
};

export default mutations;
