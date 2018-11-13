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
    { path: '/faq', component: FAQ, meta: {page: 'page-faq'} },
    {
      path: '/login',
      name: 'Login',
      component: User.Login
    },
    {
      path: '/error',
      name: 'Error',
      component: Home.Error
    },
    {
      path: '/register',
      name: 'Register',
      component: User.Register
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: User.Welcome
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
      path: '/projects',
      component: Project.Root,
      meta: {requiresAuth: true, breadcrumb: 'Projects'},
      children: [
        {
          path: ':id',
          name: 'ViewProject',
          component: Project.View,
          meta: {requiresAuth: true, breadcrumb: 'View Project'}
        },
        {
          path: 'translate',
          name: 'TranslateProject',
          redirect: '/projects/507b3f89-aff1-4fa3-8f28-9c8399811539',
          meta: {requiresAuth: true, breadcrumb: 'Translate'}
        },
        {
          path: 'transcribe',
          name: 'TranscribeProject',
          redirect: '/projects/e4b5ebc5-47a2-430b-84a9-a03b1d4dda34',
          meta: {requiresAuth: true, breadcrumb: 'Transcribe'}
        },
        {
          path: ':id/region',
          name: 'TranscribeProjectByRegion',
          component: Project.RegionParticipate,
          meta: {requiresAuth: true, breadcrumb: 'Transcribe'}
        },
        {
          path: ':id/participate/:tid',
          name: 'Submission',
          component: Task.Submit,
          meta: {requiresAuth: true, breadcrumb: 'Take Part'}
        },
        {
          path: ':id/participate',
          name: 'TakePart',
          component: Project.Participate,
          meta: {requiresAuth: true, breadcrumb: 'Take Part'}
        },
        {
          path: ':id/completed',
          name: 'CompletedProject',
          component: Project.Complete,
          beforeEnter: (to, from, next) => {
            store.commit('user/SET_TASK_PROGRESS', 0)
            next()
          },
          meta: {requiresAuth: true, breadcrumb: 'Completed!'}
        }
      ]
    },
    {
      path: '/user',
      name: 'ViewLoggedIn',
      component: User.View,
      meta: {requiresAuth: true, breadcrumb: 'View User'}
    }
]
