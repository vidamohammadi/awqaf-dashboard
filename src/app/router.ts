import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "../features/auth/routes";
//import feature routes

const routes = [
  ...authRoutes,
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
