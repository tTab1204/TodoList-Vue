<template>
  <div class="input-container">
    <input
      type="text"
      placeholder="할 일을 작성하세요."
      :value="value"
      @input="updateInput"
    />
    <div class="input-option" @click.prevent="SHOW_MODAL(true)">
      <IconBase width="18" height="19" iconName="calendar" iconColor="#898989"
        ><CalendarIcon
      /></IconBase>
    </div>

    <div class="input-option">카테고리</div>
    <div class="input-option">중요도</div>
    <CalendarModal v-if="showModal" />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import IconBase from "@/components/icons/IconBase.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import DownIcon from "@/components/icons/DownIcon.vue";
import Modal from "@/components/common/Modal.vue";
import CalendarModal from "@/components/CalendarModal.vue";

export default {
  components: {
    IconBase,
    CalendarIcon,
    DownIcon,
    Modal,
    CalendarModal,
  },

  props: ["value"],

  computed: {
    ...mapState({
      showModal: "showModal",
    }),
  },

  methods: {
    ...mapMutations(["SHOW_MODAL"]),

    updateInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
  border: 1px solid $gray-03;
  border-radius: rem(5px);
  padding-left: rem(15px);
}

input {
  flex-grow: 1;
  height: 45px;
  border: none;

  font-size: rem(16px);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: $gray-04;
  }
}

.input-option {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $gray-02;
  border-radius: rem(5px);
  font-size: rem(14px);
  padding: rem(7px) rem(9px);
  margin-right: rem(5px);

  & > svg {
    background: #ffffff;
  }
}
</style>
