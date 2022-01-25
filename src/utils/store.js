const store = {
  setData(todo) {
    localStorage.setItem("todo", JSON.stringify(todo));
  },
  getData() {
    return JSON.parse(localStorage.getItem("todo"));
  },
};

export default store;
