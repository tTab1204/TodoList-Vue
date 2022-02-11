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
        <IconBase width="18" height="18" iconName="edit" iconColor="#252529"
          ><EditIcon
        /></IconBase>
        <IconBase width="18" height="18" iconName="delete" iconColor="#252529"
          ><DeleteIcon
        /></IconBase>
      </div>
    </div>
    <div class="footer">
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
      />
    </div>
  </div>
</template>

<script>
import { NOT_STARTED } from "@/constants";
import { mapMutations } from "vuex";
import { DONE } from "@/constants";
import Checkbox from "@/components/common/Checkbox.vue";
import IconBase from "@/components/icons/IconBase.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";

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
    };
  },

  created() {
    this.isChecked = this.todo.progress === DONE ? true : false;
  },

  computed: {
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
  },

  methods: {
    ...mapMutations(["CHANGE_PROGRESS", "CHECKED", "GRABBED_TODO"]),

    changeProgress(id) {
      this.CHANGE_PROGRESS(id);
    },

    isNotStarted(progress) {
      return progress === NOT_STARTED;
    },

    onHandleCheck(e, id) {
      this.isChecked = e.target.checked;
      console.log(this.isChecked);
      this.CHECKED(id);
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
  padding: rem(20px);
  margin-bottom: rem(18px);
  cursor: grab;

  & > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .icons {
      display: flex;
      // justify-content: space-between;
      align-items: center;

      & > svg:first-child {
        margin-right: rem(6px);
      }
    }
  }

  & > .footer {
    display: flex;
    justify-content: flex-end;

    & > .start-button {
      background: $gray-05;
      color: $white;
      border-radius: rem(5px);
      padding: rem(5px) rem(11px);
      cursor: pointer;

      &:hover {
        background: $gray-06;
      }
    }

    & > .button-done {
      width: rem(25px);
      height: rem(25px);
      border: 1px solid $gray-04;
      border-radius: 50%;
      background: $white;
      cursor: pointer;
    }
  }
}

.dragging {
  opacity: 0.5;
}
</style>
