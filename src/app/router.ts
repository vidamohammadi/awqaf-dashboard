import { createRouter, createWebHistory } from "vue-router";
//import feature routes

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
