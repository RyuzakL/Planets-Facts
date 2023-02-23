import { createRouter, createWebHistory } from 'vue-router';
import PlanetView from '@/views/PlanetView.vue';

const routes = [
  {
    path: '/',
    redirect: () => ({ name: 'planet', params: { planet: 'mercury' } }),
  },
  {
    path: '/:planet',
    name: 'planet',
    props: true,
    component: PlanetView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

// s'occuper du routing et ajouter un routes dynamic
