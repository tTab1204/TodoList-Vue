import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "@/styles/scss/index.scss";
import VCalendar from "v-calendar";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import axios from "axios";
import { email, required } from "vee-validate/dist/rules";
import Vuelidate from "vuelidate";

// axios
axios.defaults.baseURL = "https://dev.gateway.himedi.com/";

Vue.config.productionTip = false;

extend("email", {
  ...email,
  message: "이메일 형식을 맞춰주세요.",
});
extend("required", {
  ...required,
  message: "필수 입력 항목입니다.",
});

// Custom Rule
extend("duplicate", {
  async validate(email) {
    const url = `account/emails/${email}/available`;
    const response = await axios.get(url);
    return response.data.available;
  },
  message: "이 이메일은 중복입니다.",
});

// Custom rule
extend("password", {
  validate(value) {
    return value.length >= 4;
  },
  message: "패스워드는 4글자가 넘어야 합니다.",
});

extend("isSamePassword", {
  params: ["currentPassword"],
  validate(value, { currentPassword }) {
    return value === currentPassword;
  },
  message: "패스워드가 일치하지 않습니다.",
});
// use libraries
Vue.use(VCalendar);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
