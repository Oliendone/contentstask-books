import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import BookLanding from "@/views/BookLanding";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:uid",
    component: BookLanding,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
