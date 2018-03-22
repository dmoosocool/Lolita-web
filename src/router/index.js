import Vue from 'vue';
import Router from 'vue-router';
import PageIndex from '@/pages/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageIndex',
      component: PageIndex,
    },
  ],
});
