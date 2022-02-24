<template>
  <div
    :data-index="index"
    class="card-container"
    :class="dragStartStyle"
    draggable="true"
    @dragstart="dragStart($event, todo)"
    @dragenter.prevent="dragEnter"
    @dragleave="dragLeave"
    @dragend.prevent="dragEnd"
    @dragover.prevent="dragOver"
    @drop.prevent="drop"
    ref="card"
  >
    <div class="header">
      {{ todo.name }}

      <div class="icons">
        <div class="icon-wrapper" @click="editTodo(todo.id)">
          <IconBase width="18" height="18" iconName="edit" iconColor="#252529"
            ><EditIcon
          /></IconBase>
        </div>
        <div class="icon-wrapper" @click="removeTodo(todo.id)">
          <IconBase width="18" height="18" iconName="delete" iconColor="#252529"
            ><DeleteIcon
          /></IconBase>
        </div>
      </div>
    </div>
    <div v-if="todo.dueDate" class="date">~ {{ todo.dueDate }}</div>
    <div class="footer">
      <div class="icon-wrapper">
        <img
          v-if="todo.category"
          class="category-icon"
          :src="onHandleCategory(todo.category)"
          :alt="todo.category"
        />
        <div class="importance-icon" :class="setImportanceColor" />
      </div>
      <button
        v-if="isNotStarted(todo.progress)"
        class="start-button"
        @click.prevent="changeProgress(todo.id)"
      >
        시작
      </button>
      <Checkbox
        v-else
        :checked="isChecked"
        :onChange="onHandleCheck"
        :class="onHandleCheckedStyle"
        :todo="todo"
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<script>
import { NOT_STARTED } from "@/constants";
import { mapMutations, mapState } from "vuex";
import { DONE } from "@/constants";
import Checkbox from "@/components/common/Checkbox.vue";
import IconBase from "@/components/icons/IconBase.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import { DELETE_CONFIRM_MESSAGE } from "@/constants";
import { categories } from "@/constants";

export default {
  components: {
    Checkbox,
    IconBase,
    EditIcon,
    DeleteIcon,
  },

  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },

  data() {
    return {
      isChecked: false,
      isDragStart: false,
      disabled: false,
      currentPanelTodo: [],
    };
  },

  created() {
    this.isChecked = this.todo.progress === DONE ? true : false;
    this.disabled = this.isChecked;
  },

  mounted() {
    this.currentPanelTodo = this.todos.filter(
      (item) => item.progress === this.todo.progress
    );
  },

  computed: {
    ...mapState({
      category: "category",
      todos: "todos",
      grabbedTodo: "grabbedTodo",
    }),

    onHandleCheckedStyle() {
      return {
        checked: this.isChecked,
      };
    },
    dragStartStyle() {
      return {
        dragging: this.isDragStart,
      };
    },

    setImportanceColor() {
      if (!this.todo.importance) return;
      return {
        top: this.todo.importance === "상",
        middle: this.todo.importance === "중",
        low: this.todo.importance === "하",
      };
    },
  },

  methods: {
    ...mapMutations([
      "TODOS",
      "CHANGE_PROGRESS",
      "CHECKED",
      "GRABBED_TODO",
      "REMOVE_TODO",
      "EDIT_TODO",
    ]),

    changeProgress(id) {
      this.CHANGE_PROGRESS(id);
    },

    isNotStarted(progress) {
      return progress === NOT_STARTED;
    },

    onHandleCheck(e, id) {
      this.isChecked = e.target.checked;
      this.CHECKED(id);
    },

    editTodo(id) {
      const edittedName = prompt("제목을 수정해주세요.");
      if (edittedName === null || !edittedName.trim()) return;

      const payload = {
        id: id,
        edittedName: edittedName,
      };

      this.EDIT_TODO(payload);
    },

    removeTodo(id) {
      if (confirm(DELETE_CONFIRM_MESSAGE)) {
        this.REMOVE_TODO(id);
      }
    },

    onHandleCategory(category) {
      const temp = categories.filter((item) => item.value === category);
      return temp[0].icon;
    },

    dragStart(e, todo) {
      this.isDragStart = true;
      const payload = {
        todo: todo,
        index: this.index,
      };
      this.GRABBED_TODO(payload);

      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
    },

    dragEnter(e) {
      if (
        e.target.className === "card-container" ||
        e.target.parentNode.className === "card-container"
      ) {
        if (e.target.className === "card-container") {
          e.target.style.background = "#e9e9e9";
        } else {
          e.target.parentNode.style.background = "#e9e9e9";
        }
      }
    },

    dragEnd(e) {
      this.isDragStart = false;
    },

    dragLeave(e) {
      if (e.target.className === "card-container") {
        e.target.style.background = "";
      }
    },
    dragOver() {},

    drop(e) {
      if (e.target.className === "card-container") {
        e.target.style.background = "";
        const oldIndex = this.grabbedTodo.index;
        const newIndex = e.target.dataset.index;

        [this.currentPanelTodo[oldIndex], this.currentPanelTodo[newIndex]] = [
          this.currentPanelTodo[newIndex],
          this.currentPanelTodo[oldIndex],
        ];

        const NotThisProgressTodos = this.todos.filter(
          (todo) => todo.progress !== this.todo.progress
        );
        const updatedTodos = [
          ...NotThisProgressTodos,
          ...this.currentPanelTodo,
        ];
        this.TODOS(updatedTodos);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 128px;
  border: 1px solid $gray-04;
  border-radius: rem(10px);
  background: $white;
  padding: rem(15px) rem(20px);

  margin-bottom: rem(18px);
  cursor: grab;

  & > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .icons {
      display: flex;
      align-items: center;

      & > .icon-wrapper {
        border-radius: rem(8px);
        padding: rem(5px);
        cursor: pointer;
      }

      & > .icon-wrapper:hover {
        background: $gray-03;
      }
    }
  }

  & > .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .icon-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & > .icon-wrapper > .category-icon {
      width: 18px;
      height: 18px;
      margin-right: rem(10px);
    }

    & > .start-button {
      background: $primary-80;
      color: $white;
      border-radius: rem(5px);
      padding: rem(5px) rem(11px);
      cursor: pointer;

      &:hover {
        background: $primary-100;
      }
    }
  }
}

.dragging {
  opacity: 0.5;
}

.importance-icon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: rem(6px);
}

.top {
  background: $orange;
}

.middle {
  background: $yellow;
}

.low {
  background: $green;
}

.date {
  font-weight: 400;
  font-size: rem(16px);
  color: $gray-05;
}
</style>
