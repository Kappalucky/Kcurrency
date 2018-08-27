import Vue from "vue";
import lodash from "lodash";
import Vue2Filters from "vue2-filters";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Vue2Filters, lodash);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
