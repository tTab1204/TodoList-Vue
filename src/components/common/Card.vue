<template>
  <div class="card-container">
    <div class="header">{{ todo.name }}</div>
    <div class="footer">
      <button
        v-if="isNotStarted(todo.progress)"
        @click.prevent="changeProgress(todo.id)"
      >
        시작
      </button>
    </div>
  </div>
</template>

<script>
import { NOT_STARTED } from "@/constants";
import { mapMutations } from "vuex";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapMutations(["CHANGE_PROGRESS"]),

    changeProgress(id) {
      this.CHANGE_PROGRESS(id);
    },

    isNotStarted(progress) {
      return progress === NOT_STARTED;
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

  & > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > .footer {
    display: flex;
    justify-content: flex-end;

    & > button {
      background: $gray-05;
      color: $white;
      border-radius: rem(5px);
      padding: rem(5px) rem(11px);
      cursor: pointer;

      &:hover {
        background: $gray-06;
      }
    }
  }
}
</style>
