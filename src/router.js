import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ProjectDeploymentsHistoric from '@/views/ProjectDeploymentsHistoric.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/project/:projectName',
      name: 'Historic of project\'s deployments',
      component: ProjectDeploymentsHistoric,
    },
  ],
});
