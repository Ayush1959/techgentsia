import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";
import MainIndex from "./components/MainIndex";
import Login from "./components/Login";
import SignUp from "./components/signUp";
import Dashboard from "./components/Dashboard";
import {
  ValidationProvider,
  extend,
  ValidationObserver
} from "vee-validate";
import {
  required,
  email,
  min,
  alpha_num
} from "vee-validate/dist/rules";
import axios from 'axios'
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
extend("required", required);
extend("email", email);
extend("min", min);
extend("alpha_num", alpha_num);

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios

var infiniteScroll = require('vue-infinite-scroll');
Vue.use(infiniteScroll)
Vue.use(require('vue-moment'));

Vue.filter('25string', function (value) {
  if (value) {
    return value.substring(0, 25) + "..."
  }
});

import locale from "element-ui/lib/locale/lang/en";

Vue.use(ElementUI, {
  locale,
});

const routes = [{
    path: "/",
    components: {
      Index: MainIndex,
    },
  },
  {
    path: "/login",
    components: {
      Index: Login,
    },
  },
  {
    path: "/sign-up",
    components: {
      Index: SignUp,
    },
  },
  {
    path: "/dashboard",
    components: {
      Index: Dashboard,
    },
  }
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});