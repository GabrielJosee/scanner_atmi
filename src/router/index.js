import { createRouter, createWebHistory } from 'vue-router';
import ScanView from '../views/ScanView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/scan',
    name: 'scan',
    component: ScanView, 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView, // Halaman utama setelah login
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
