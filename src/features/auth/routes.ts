import type { RouteRecordRaw } from "vue-router";

const authRoutes: RouteRecordRaw[] = [
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
