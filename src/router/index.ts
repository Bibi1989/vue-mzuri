import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import NE20 from "../components/Funds/NE-20.vue";
import NE20B from "../components/Funds/NE-20B.vue";
import NE21 from "../components/Funds/NE-21.vue";
import NE22 from "../components/Funds/NE-22.vue";
import NE23 from "../components/Funds/NE-23.vue";
import NE24 from "../components/Funds/NE-24.vue";
import NE25 from "../components/Funds/NE-25.vue";
import NE26 from "../components/Funds/NE-26.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/ne20",
    name: "NE20",
    component: NE20,
  },
  {
    path: "/ne20b",
    name: "NE20B",
    component: NE20B,
  },
  {
    path: "/ne21",
    name: "NE21",
    component: NE21,
  },
  {
    path: "/ne22",
    name: "NE22",
    component: NE22,
  },
  {
    path: "/ne23",
    name: "NE23",
    component: NE23,
  },
  {
    path: "/ne24",
    name: "NE24",
    component: NE24,
  },
  {
    path: "/ne25",
    name: "NE25",
    component: NE25,
  },
  {
    path: "/ne26",
    name: "NE26",
    component: NE26,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // making a change
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
