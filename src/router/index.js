import { createRouter, createWebHistory } from 'vue-router';
import PlanetView from '@/views/PlanetView.vue';
import planetsJSON from '@/db.json';

const routes = [
  {
    path: '/',
    redirect: () => ({ name: 'planet', params: { planet: 'mercury' } }),
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/InvalidPlanet.vue'),
  },
  {
    path: '/:planet',
    name: 'planet',
    props: true,
    component: PlanetView,
    beforeEnter: (to, _, next) => {
      const planetParam = to.params.planet;
      const isPlanetParamValid = planetsJSON[planetParam];
      if (isPlanetParamValid) {
        next();
      } else {
        next({ name: 'error' });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

// s'occuper du routing et ajouter un routes dynamic
