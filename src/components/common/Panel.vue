<template>
  <div
    class="panel-container"
    @dragover.prevent="dragOver($event, progress)"
    @drop.prevent="drop($event, progress)"
    ref="panel"
  >
    <div class="header">
      <div class="progress">
        {{ progress }}
        <div class="card-number">2</div>
      </div>
      <Dropdown
        :progrss="progress"
        :options="options"
        :selected="selected"
        :handleSelect="handleSelect"
      />
    </div>
    <Card
      v-for="(todo, i) in progressMatchedTodos"
      :key="todo.id"
      :todo="todo"
      :index="i"
      ref="card"
    />
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase.vue";
import Card from "@/components/common/Card.vue";
import { mapMutations, mapState } from "vuex";
import { DONE, IN_PROGRESS, NOT_STARTED, options } from "@/constants";
import Dropdown from "@/components/common/Dropdown.vue";
import { dropdownOptions } from "@/constants";
import sortTodos from "@/utils/sortTodos";

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
    Dropdown,
  },

  data() {
    return {
      currentProgressTodo: [],
      options: [],
      selected: "",
      sortedArr: [],
    };
  },

  created() {
    this.options = options;
    this.selected = dropdownOptions.PRODUCE_ORDER;
  },

  mounted() {
    this.sortedArr = this.sortedTodos;
  },

  computed: {
    ...mapState({
      todos: "todos",
      grabbedTodo: "grabbedTodo",
    }),

    progressMatchedTodos() {
      return (this.currentProgressTodo = this.todos.filter(
        (todo) => todo.progress === this.progress
      ));
    },
  },

  methods: {
    ...mapMutations(["CHANGE_PROGRESS_BY_DRAG"]),

    handleSelect(option, close) {
      this.selected = option;
      close();
    },

    dragOver(e) {},

    // drop.prevent를 해야하는 이유는?
    drop(e, panelProgress) {
      const payload = {
        id: this.grabbedTodo.id,
        panelProgress: panelProgress,
      };

      if (panelProgress === NOT_STARTED) {
        this.CHANGE_PROGRESS_BY_DRAG(payload);
        return;
      }

      if (panelProgress === IN_PROGRESS) {
        this.CHANGE_PROGRESS_BY_DRAG(payload);
        return;
      }

      if (panelProgress === DONE) {
        this.CHANGE_PROGRESS_BY_DRAG(payload);
        return;
      }
    },
  },

  sortedTodos() {
    const sorted = sortTodos(this.currentProgressTodo, this.selected);
    return sorted;
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

  font-family: "Pretendard";
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
