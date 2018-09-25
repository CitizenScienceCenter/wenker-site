import Vue from 'vue'
import Vuex from 'vuex'
import api from './modules/api'
import user from './modules/user'
import project from './modules/project'
import task from './modules/task'
import submission from './modules/submission'
import media from './modules/media'
import upload from './modules/upload'
import settings from './modules/settings'
import consts from './modules/consts'
import projectFilter from './modules/components/project-filter'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    project,
    api,
    consts,
    task,
    media,
    upload,
    settings,
    submission,
    projectFilter
  },
  strict: debug,
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  }),]
})
