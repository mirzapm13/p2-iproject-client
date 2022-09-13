import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapsView from "../views/MapsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/maps",
      name: "maps",
      component: MapsView,
    },
  ],
});

export default router;
