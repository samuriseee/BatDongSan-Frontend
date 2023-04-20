import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/AuthenView/ProfileView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/AuthenView/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/AuthenView/RegisterView.vue"),
  },
  {
    path: "/createPost",
    name: "creatPost",
    component: () => import("../views/CreatePost.vue"),
  },
  {
    path: "/estate-for-sale",
    name: "estate-for-sale",
    component: () => import("../views/EstateList/EstateForSale.vue"),
  },
  {
    path: "/estate-for-rent",
    name: "estate-for-rent",
    component: () => import("../views/EstateList/EstateForRent.vue"),
  },
  {
    path:"/estate/:id",
    name:"estate",
    component: () => import("../views/EstateDetails.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
