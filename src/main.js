import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/css/tailwind.css";
import { Vuelidate } from "vuelidate";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Vuelidate,
  render: (h) => h(App),
}).$mount("#app");
