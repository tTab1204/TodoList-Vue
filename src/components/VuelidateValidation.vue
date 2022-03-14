<template>
  <div>
    <Button
      :name="changeModeName"
      :onClick="changeMode"
      :class="{ passive: mode === 'passive' }"
    ></Button>
    <form @submit.prevent="onSubmit" class="container">
      <!-- Email -->
      <div class="input-container" :class="{ 'input-error': $v.email.$error }">
        <input
          v-if="isLazy"
          type="text"
          placeholder="Enter your email"
          v-model.trim.lazy="$v.email.$model"
        />
        <input
          v-else
          type="text"
          placeholder="Enter your email"
          v-model="email"
          @focus="$v.email.$reset()"
        />
      </div>
      <div v-if="$v.email.$dirty">
        <div class="error-text" v-if="!$v.email.required">
          필수 입력사항입니다.
        </div>
        <div class="error-text" v-if="!$v.email.isCorrectEmailType">
          이메일 형식을 맞춰주세요.
        </div>
        <div class="error-text" v-if="!$v.email.isNotDuplicate">
          이메일이 중복되었습니다.
        </div>
      </div>

      <!-- Password -->
      <div
        class="input-container"
        :class="{ 'input-error': $v.password.$error }"
      >
        <input
          v-if="isLazy"
          type="password"
          placeholder="Enter your password"
          v-model.trim.lazy="$v.password.$model"
        />
        <input
          v-else
          type="password"
          placeholder="Enter your password"
          v-model="password"
          @focus="$v.password.$reset()"
        />
      </div>
      <div v-if="$v.password.$dirty">
        <div
          class="error-text"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          필수 입력사항입니다.
        </div>
        <div class="error-text" v-if="!$v.password.minLength">
          비밀번호는 4글자 이상이어야 합니다.
        </div>
      </div>

      <!-- Match Password -->
      <div
        class="input-container"
        :class="{ 'input-error': $v.passwordCheck.$error }"
      >
        <input
          v-if="isLazy"
          type="password"
          placeholder="Check password is matched"
          v-model.trim.lazy="$v.passwordCheck.$model"
        />
        <input
          v-else
          type="password"
          placeholder="Check password is matched"
          v-model="passwordCheck"
          @focus="$v.passwordCheck.$reset()"
        />
      </div>
      <div v-if="$v.passwordCheck.$dirty">
        <div
          class="error-text"
          v-if="$v.passwordCheck.$dirty && !$v.passwordCheck.required"
        >
          필수 입력사항입니다.
        </div>
        <div class="error-text" v-if="!$v.passwordCheck.sameAsPassword">
          비밀번호가 일치하지 않습니다.
        </div>
      </div>
      <div class="button-wrapper">
        <Button name="제출하기" :onClick="onSubmit" eventControl />
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import Button from "@/components/common/Button.vue";
import axios from "axios";

const isNotDuplicate = async (email, v) => {
  if (email && v.$v.email.isCorrectEmailType) {
    const url = `account/emails/${email}/available`;
    const response = await axios.get(url);
    return await response.data.available;
  }
  return true;
};

export default {
  components: {
    Button,
  },
  data() {
    return {
      mode: "lazy",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },

  computed: {
    isLazy() {
      return this.mode === "lazy";
    },

    changeModeName() {
      return this.mode === "lazy" ? "blur" : "submit";
    },
  },

  methods: {
    onSubmit() {
      // all the fields are considered dirty
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("error");
        return;
      }

      alert("제출되었습니다.");
      this.clearInput();
      this.$v.$reset();
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

  validations: {
    email: {
      required,
      isCorrectEmailType: email,
      isNotDuplicate,
    },

    password: {
      required,
      minLength: minLength(4),
    },

    passwordCheck: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
}

.input-container {
  display: flex;
  align-items: center;
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
  margin: 20px 0;
  text-align: right;
}

.input-error {
  border: 1px solid $danger;
}

.error-text {
  color: $danger;
}
</style>
