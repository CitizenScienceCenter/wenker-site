import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { store } from './store/store.js';

Vue.use(VueI18n);

var language;
if( !store.state.language ) {
  // no language in store, check browser
  language = window.navigator.userLanguage || window.navigator.language;
  if (language.indexOf('-') !== -1) {
    language = language.split('-')[0];
  }
  if (language.indexOf('_') !== -1) {
    language = language.split('_')[0];
  }
}
else {
  language = store.state.language;
}

export const i18n = new VueI18n({
  locale: language,
  messages: {
    'en': {
      'page-homepage': {
        'link': 'Home',
        'title': 'Project Wenker – Citizen Science Center Zurich'
      },
      'page-project': {
        'link': 'The Project',
        'title': 'The Project – Project Wenker – Citizen Science Center Zürich'
      },
      'page-wenker': {
        'link': 'Georg Wenker',
        'title': 'Georg Wenker – Project Wenker – Citizen Science Center Zürich'
      },
      'page-faq': {
        'link': 'FAQ',
        'title': 'FAQ – Project Wenker – Citizen Science Center Zurich'
      }
    },
    'de': {
      'page-homepage': {
        'link': 'Home',
        'title': 'Project Wenker – Citizen Science Center Zurich'
      },
      'page-project': {
        'link': 'The Project',
        'title': 'The Project – Project Wenker – Citizen Science Center Zürich'
      },
      'page-wenker': {
        'link': 'Georg Wenker',
        'title': 'Georg Wenker – Project Wenker – Citizen Science Center Zürich'
      },
      'page-faq': {
        'link': 'FAQ',
        'title': 'FAQ – Project Wenker – Citizen Science Center Zurich'
      }
    }
  }
})
