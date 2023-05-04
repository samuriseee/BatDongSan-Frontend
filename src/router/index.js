import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import store from "../store/index.js";
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
    meta: { requiresAuth: true, roles: ["user"] },
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
    meta: { requiresAuth: true, allowedRoles: ["user", "admin"] },
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
    path: "/estate/:id",
    name: "estate",
    component: () => import("../views/EstateDetails.vue"),
  },
  {
    path: "/admin-page",
    name: "admin",
    component: () => import("../views/AdminDashboard/AdminPage.vue"),
    meta: { requiresAuth: true, allowedRoles: ["admin"] },
    children: [
      {
        path: "/user-management",
        name: "user-management",
        component: () => import("../views/AdminDashboard/UserManagement.vue"),
      },
      {
        path: "/employee-management",
        name: "employee-management",
        component: () =>
          import("../views/AdminDashboard/EmployeeManagement.vue"),
      },
      {
        path: "/post-management",
        name: "post-management",
        component: () => import("../views/AdminDashboard/PostManagement.vue"),
      },
    ],
  },
];

// router.beforeEach((to, from, next) => {
//   const currentUser = store.state.currentUser;
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   const allowedRoles = to.matched.some((record) => record.meta.allowedRoles);
//   if (requiresAuth && !currentUser) {
//     // Redirect to login page if the user is not authenticated
//     next({ name: "login" });
//   } else if (requiresAuth && !allowedRoles.includes(currentUser.role)) {
//     // Redirect to home page if the user is not authorized to access the route
//     next({ name: "home" });
//   } else {
//     next();
//   }
// });

const router = new VueRouter({
  routes,
});

export default router;
