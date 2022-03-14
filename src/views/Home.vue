<template>
  <div class="container">
    <div class="button-wrapper">
      <Button
        :name="`${changeModeName}`"
        :class="{ passive: mode === 'passive' }"
        :onClick="changeMode"
      ></Button>
    </div>

    <ValidationObserver v-slot="{ handleSubmit, invalid, reset }">
      <form
        class="validation-container"
        @submit.prevent="handleSubmit(onSubmit(invalid, reset))"
      >
        <ValidationProvider
          :mode="mode"
          rules="required|email|duplicate"
          v-slot="{ errors, failed }"
        >
          <div class="input-container" :class="{ 'input-error': failed }">
            <input type="text" placeholder="Enter your email" v-model="email" />
          </div>
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          :mode="mode"
          rules="required|password"
          v-slot="{ errors, failed }"
        >
          <div class="input-container" :class="{ 'input-error': failed }">
            <input
              type="password"
              placeholder="Enter your password"
              v-model="password"
            />
          </div>
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider
          :mode="mode"
          :rules="{
            required: true,
            isSamePassword: { currentPassword: password },
          }"
          v-slot="{ errors, failed }"
        >
          <div class="input-container" :class="{ 'input-error': failed }">
            <input
              type="password"
              placeholder="Enter your password is matching"
              v-model="passwordMatch"
            />
          </div>
          <span class="error-text">{{ errors[0] }}</span>
        </ValidationProvider>
        <div class="button-wrapper">
          <Button name="제출하기" :onClick="onSubmit"></Button>
        </div>
      </form>
    </ValidationObserver>
    <VuelidateValidation />
  </div>
</template>

<script>
import VuelidateValidation from "@/components/VuelidateValidation.vue";
import Button from "@/components/common/Button.vue";

export default {
  name: "Home",
  components: {
    VuelidateValidation,
    Button,
  },

  data() {
    return {
      mode: "lazy",
      email: "",
      password: "",
      passwordMatch: "",
    };
  },

  computed: {
    changeModeName() {
      return this.mode === "lazy" ? "blur" : "submit";
    },
  },

  methods: {
    onSubmit(invalid, reset) {
      if (invalid) return;

      alert("제출되었습니다.");
      this.clearInput();
      reset();
    },
    changeMode() {
      this.mode = this.mode === "lazy" ? "passive" : "lazy";
    },

    clearInput() {
      this.email = "";
      this.password = "";
      this.passwordCheck = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 8rem 20rem;
  min-height: 100vh;
}

.validation-container {
  margin-bottom: 30px;
}

.button-wrapper {
  margin: 20px 0;
}

.input-container {
  display: flex;
  align-items: center;
  flex-grow: 1;
  border: 1px solid $gray-03;
  border-radius: rem(5px);
  padding-left: rem(15px);
  margin: 5px 0;
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

.button-wrapper {
  &:last-child {
    text-align: right;
  }
}

.input-error {
  border: 1px solid $danger;
}

.error-text {
  color: $danger;
}
</style>
