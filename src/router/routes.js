// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Events from './views/Events.vue'

// lazy loading routes
const Home = resolve => {
  require.ensure(['../views/Home.vue'], () => {
    resolve( require('../views/Home.vue') );
  });
};
const Project = resolve => {
  require.ensure(['../views/Project.vue'], () => {
    resolve( require('../views/Project.vue') );
  });
};
const Wenker = resolve => {
  require.ensure(['../views/Wenker.vue'], () => {
    resolve( require('../views/Wenker.vue') );
  });
};
const FAQ = resolve => {
  require.ensure(['../views/FAQ.vue'], () => {
    resolve( require('../views/FAQ.vue') );
  });
};

import { i18n } from '../i18n.js';

export const routes = [
    { path: '/', component: Home, meta: {page: 'page-homepage'} },
    { path: '/project', component: Project, meta: {page: 'page-project'} },
    { path: '/wenker', component: Wenker, meta: {page: 'page-wenker'} },
    { path: '/faq', component: FAQ, meta: {page: 'page-faq'} }
]
