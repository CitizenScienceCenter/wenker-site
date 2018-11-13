// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Events from './views/Events.vue'

import * as User from '@/views/user'
import * as Activities from '@/views/activities'
import * as Task from '@/views/task'

// lazy loading routes
const Home = resolve => {
  require.ensure(['../views/Home.vue'], () => {
    resolve( require('../views/Home.vue') );
  });
};
const Project = resolve => {
  require.ensure(['../views/Project.vue'], () => {
    resolve( require('../views/static/Project.vue') );
  });
};
const Wenker = resolve => {
  require.ensure(['../views/Wenker.vue'], () => {
    resolve( require('../views/static/Wenker.vue') );
  });
};
const FAQ = resolve => {
  require.ensure(['../views/FAQ.vue'], () => {
    resolve( require('../views/static/FAQ.vue') );
  });
};

import { i18n } from '../i18n.js';

export const routes = [
    { path: '/', component: Home, meta: {page: 'page-homepage'} },
    { path: '/project', component: Project, meta: {page: 'page-project'} },
    { path: '/wenker', component: Wenker, meta: {page: 'page-wenker'} },
    { path: '/faq', component: FAQ, meta: {page: 'page-faq'} },
    {
      path: '/login',
      name: 'Login',
      component: User.Login
    },
    {
      path: '/register',
      name: 'Register',
      component: User.Register
    },
    {
      path: '/logout',
      name: 'Logout',
      component: User.Login,
      beforeEnter: logout
    },
    {
      path: '/reset',
      name: 'ResetRequest',
      component: User.RequestReset
    },
    {
      path: '/reset/:token',
      name: 'Reset',
      component: User.Reset
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: User.View,
        meta: {requiresAuth: true, breadcrumb: 'View User'}
    },
    {
        path: '/transcribe',
        component: Project.Root,
        meta: {requiresAuth: true, breadcrumb: 'Projects'},
        children: [
            {
                path: '',
                name: 'TranscribeStart',
                component: null,
                meta: {requiresAuth: true, breadcrumb: 'Transcribe'}
            },
            {
                path: '/task',
                name: 'TranscribeTask',
                component: null,
                meta: {requiresAuth: true, breadcrumb: 'Transcribe Task'}
            },
            {
                path: '/complete',
                name: 'TranscribeComplete',
                component: null,
                meta: {requiresAuth: true, breadcrumb: 'Transcribe Complete'}
            },
        ],
    },
    {
        path: '/translate',
        component: Project.Root,
        meta: {requiresAuth: true, breadcrumb: 'Projects'},
        children: [
            {
                path: '',
                name: 'TranslateStart',
                component: null,
                meta: {requiresAuth: true, breadcrumb: 'Translate'}
            },
            {
                path: '/task',
                name: 'TranslateTask',
                component: null,
                meta: {requiresAuth: true, breadcrumb: 'Translate Task'}
            },
            {
                path: '/complete',
                name: 'TranslateComplete',
                component: null,
                meta: {requiresAuth: true, breadcrumb: 'Translate Complete'}
            },
        ]
    },
    {
        path: '/error',
        name: 'Error',
        component: Home.Error
    }
]
