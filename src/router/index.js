import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../components/Login/SignUp.vue"),
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("../components/Login/SignIn.vue"),
  },
  {
    path: "/update",
    name: "update",
    component: () => import("../components/UpdateRes/UpdateRes.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddRes/AddRes.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
