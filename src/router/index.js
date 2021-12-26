import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Portfolio from '@/views/Portfolio.vue';
import KoreTeam from '@/views/KoreTeam.vue';
import KorePartner from '@/views/KorePartner.vue';
import Compliance from '@/views/Compliance.vue';
import KoreNode from '@/views/KoreNode.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/kore-team',
    name: 'KoreTeam',
    component: KoreTeam,
  },
  {
    path: '/kore-partner',
    name: 'KorePartner',
    component: KorePartner,
  },
  {
    path: '/compliance',
    name: 'Compliance',
    component: Compliance,
  },
  {
    path: '/kore-node',
    name: 'KoreNode',
    component: KoreNode,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
