import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TypographyView from "@/views/TypographyView.vue";
import ButtonView from "@/views/ButtonView.vue";

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
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/typography",
      name: "typography",
      component: TypographyView,
      children: [
        {
          path: "button",
          name: "button",
          component: ButtonView,
        },
      ],
    },
  ],
});

export default router;
