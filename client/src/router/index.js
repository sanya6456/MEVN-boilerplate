import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
