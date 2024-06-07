import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/home.vue";
import About_us from "../page/about_us.vue";
import Pricing from "../page/pricing.vue";
import Work from "../page/work.vue";
import Blog from "../page/blog.vue";
import Contact from "../page/contact_us.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about_us",
      name: "about_us",
      component: About_us,
    },
    {
      path: "/pricing",
      name: "pricing",
      component: Pricing,
    },
    {
      path: "/work",
      name: "work",
      component: Work,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/contact_us",
      name: "contact_us",
      component: Contact,
    },
  ],
});

export default router;
