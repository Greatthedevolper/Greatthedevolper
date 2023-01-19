import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/portfolio",
      name: "PortFolio",
      component: () => import("../views/PortFolio.vue"),
    },
    {
      path: "/resume",
      name: "ResumePage",
      component: () => import("../views/ResumePage.vue"),
    },
    {
      path: "/contact-us",
      name: "ContactUs",
      component: () => import("../views/ContactUs.vue"),
    },
  ],
});

export default router;
