import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SuccessView from "../views/SuccessView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
