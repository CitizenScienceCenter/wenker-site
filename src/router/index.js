import Vue from 'vue'
import Router from 'vue-router'
import * as User from '@/views/user'
import * as Project from '@/views/project'
import * as Home from '@/views/home'
import * as Task from '@/views/task'
import store from '@/store'

Vue.use(Router)

const logout = (to, from, next) => {
  localStorage.removeItem('user')
  store.commit('user/SET_CURRENT_USER', null)
  next('/home')
}

const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
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
      path: '/home',
      name: 'home',
      component: Home.Dashboard,
      meta: {requiresAuth: true, breadcrumb: 'Home'}
    },
    {
      path: '/about',
      name: 'About',
      component: Home.About,
      // meta: {requiresAuth: true, breadcrumb: 'Home'}
    },
    {
      path: '/wenker',
      name: 'Wenker',
      component: Home.Wenker,
      // meta: {requiresAuth: true, breadcrumb: 'Home'}
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: Home.FAQ,
      // meta: {requiresAuth: true, breadcrumb: 'Home'}
    },
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        if (store.state.user.currentUser !== null && 'api_key' in store.state.user.currentUser && store.state.user.currentUser.api_key) {
          next({
            path: '/home'
          })
        } else {
          store.dispatch('user/generateAnon').then(u => {
            next({
              path: '/home'
            })
          })
        }
      }
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
          redirect: '/projects/507b3f89-aff1-4fa3-8f28-9c8399811539'
        },
        {
          path: 'transcribe',
          name: 'TranscribeProject',
          redirect: '/projects/e4b5ebc5-47a2-430b-84a9-a03b1d4dda34'
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
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // TODO call needed every time? could check on first call and then add to store?
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user.currentUser !== null && 'api_key' in store.state.user.currentUser && store.state.user.currentUser.api_key) {
      store.dispatch('user/validate').then(v => {
        if (v) {
          next()
        } else {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        }
      })
    } else {
      store.dispatch('user/generateAnon').then(u => {
        next()
      })
    }
    
  } else {
    next()
  }
})

module.exports = router
