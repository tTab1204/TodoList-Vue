import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import "@/styles/scss/index.scss";
import VCalendar from "v-calendar";

Vue.config.productionTip = false;

Vue.use(VCalendar);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
