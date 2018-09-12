// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Swagger from 'swagger-client'
import store from './store'
import './assets/styles/theme.scss'
import VuexRouterSync from 'vuex-router-sync'
import * as loc from './localisation/index'
import vuexI18n from 'vuex-i18n'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'
import vueNumeralFilterInstaller from 'vue-numeral-filter'

Vue.config.productionTip = false
Vue.use(Croppa)
Vue.use(vueNumeralFilterInstaller)

Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('en', loc.en)
Vue.i18n.add('de', loc.de)
VuexRouterSync.sync(store, router)
// Load swagger client and SDK is created using tags and operationIds in the JSON
console.log(process.env.BASE_URI)
Swagger({ url: process.env.BASE_URI,
  requestInterceptor (req) {
  // req.headers['content-type'] = 'application/json'
    let u = store.getters['user/currentUser']
    if (u !== null) {
      req.headers['X-API-KEY'] = u.api_key
    }
    return req
  }}).then((client) => {
  client.spec.host = process.env.HOST
  console.log(process.env.HOST)

  Vue.prototype.$ac = client
  Vue.i18n.set('en')

  // Vue.$material.theming.theme = t;
  store.commit('api/SET_API', client)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})
