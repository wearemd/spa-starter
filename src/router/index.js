import { createRouter, createWebHashHistory } from 'vue-router'

import Home from "@/pages"
import Page from "@/pages/page"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/page",
      name: "Page",
      component: Page
    }
  ]
});
