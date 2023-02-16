import { createRouter, createWebHistory } from 'vue-router';
import PlanetView from '@/views/PlanetView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: PlanetView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
