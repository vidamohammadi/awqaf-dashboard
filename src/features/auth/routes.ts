import type { RouteRecordRaw } from "vue-router";

const authRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "login",
    component: () => import('./pages/Login.vue'),
    meta: {
      title: "Login - Admin Dashboard",
      requiresAuth: false,
      guestOnly: true,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import('./pages/Signup.vue'),
    meta: {
      title: "Signup - Admin Dashboard",
      requiresAuth: false,
      guestOnly: true,
    },
  },
];
export default authRoutes;
