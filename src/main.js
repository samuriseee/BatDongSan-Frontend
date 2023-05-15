import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/css/tailwind.css";
import { Vuelidate } from "vuelidate";
import { Cloudinary } from "cloudinary-vue";
import cloudinaryCore from "cloudinary-core";
Vue.config.productionTip = false;

Vue.use(Cloudinary, {
  configuration: { cloudName: "detorxu0l" },
  components: ["CldImage", "CldTransformation"],
});
Vue.prototype.$cloudinaryCore = new cloudinaryCore.Cloudinary({
  cloud_name: "detorxu0l",
});
new Vue({
  router,
  store,
  Vuelidate,
  render: (h) => h(App),
}).$mount("#app");
