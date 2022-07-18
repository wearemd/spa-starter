import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages")
    },
    {
      path: "/page",
      name: "Page",
      component: () => import("@/pages/page")
    }
  ]
});
