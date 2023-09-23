import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    component: () => import("../views/NotFound.vue"),
    meta: {
      requiresAuth: false,
      enableNav: false,
      translatedName: 'Não encontrado'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
