import { createRouter, createWebHistory } from 'vue-router';
import ResearchView from '../views/ResearchView.vue';
import ArticleView from '../views/ArticleView.vue';
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: { title: 'Projects' }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'),
    meta: { title: 'Portfolio' }
  },
  {
    path: '/research',
    name: 'research',
    component: ResearchView,
    meta: { title: 'Research' }
  },
  {
    path: '/read/:slug/:id',
    name: 'articleDetail',
    component: ArticleView,
    meta: { title: 'Article Detail' }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'articleDetail') {
      // Always scroll to top when navigating to article details
      return { top: 0 };
    }
    if (savedPosition) {
      // Restore scroll position if navigating back
      return savedPosition;
    }
    // Default scroll behavior
    return { top: 0 };
  }
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Your Site`;
  next();
});

export default router;
