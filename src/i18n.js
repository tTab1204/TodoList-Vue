import Vue from "vue";
import VueI18n from "vue-i18n";
import dateTimeFormats from "@/locales/dateTime";

Vue.use(VueI18n);

export default new VueI18n({
  dateTimeFormats,
});
