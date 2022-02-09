<template>
  <Modal>
    <div slot="header">
      <h3>
        마감일을 선택해주세요.
        <div
          href=""
          class="modal-close-button"
          @click.prevent="SHOW_MODAL(false)"
        >
          &times;
        </div>
      </h3>
    </div>
    <div slot="body">
      <v-date-picker v-model="date" />
    </div>

    <div slot="footer">
      <Button
        type="button"
        name="선택 완료"
        class="submit-calendar"
        :onClick="addDueDate"
      />
    </div>
  </Modal>
</template>

<script>
import { mapMutations } from "vuex";
import Modal from "@/components/common/Modal.vue";
import Button from "@/components/common/Button.vue";

export default {
  components: {
    Modal,
    Button,
  },

  data() {
    return {
      date: new Date(),
    };
  },

  methods: {
    ...mapMutations(["SHOW_MODAL"]),

    addDueDate() {
      this.SHOW_MODAL(false);
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  display: flex;
  justify-content: space-between;
}

h3 > .modal-close-button {
  cursor: pointer;
}

.submit-calendar {
  width: 100%;
}
</style>
