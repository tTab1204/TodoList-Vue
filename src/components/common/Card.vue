<template>
  <div
    class="card-container"
    :class="dragStartStyle"
    draggable="true"
    @dragstart="dragStart($event, todo)"
    @dragend="dragEnd"
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
import { checkInputValidation } from "@/utils/checkValidation";
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
  },

  data() {
    return {
      isChecked: false,
      isDragStart: false,
      disabled: false,
    };
  },

  created() {
    this.isChecked = this.todo.progress === DONE ? true : false;
    this.disabled = this.isChecked;
  },

  computed: {
    ...mapState({
      category: "category",
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
      const validation = checkInputValidation(edittedName);
      if (!validation) return;

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
      this.GRABBED_TODO(todo);
    },

    dragEnd(e) {
      this.isDragStart = false;
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
      background: $primary-100;
      color: $white;
      border-radius: rem(5px);
      padding: rem(5px) rem(11px);
      cursor: pointer;

      &:hover {
        background: $primary-120;
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
</style>
