import Vue from 'vue'
import { Settings } from '@/views/home'
import store from '@/store'
import * as loc from '@/localisation/index'
import vuexI18n from 'vuex-i18n'

Vue.use(vuexI18n.plugin, store)
Vue.i18n.add('en', loc.en)
Vue.i18n.set('en')

describe('Settings', () => {

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Settings)
    const vm = new Constructor({store}).$mount()
    expect(vm.$el.querySelector('.title').textContent)
      .to.equal('Settings')
  })
})
