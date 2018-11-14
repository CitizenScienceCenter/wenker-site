import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store.js'

Vue.use(VueI18n);

var language;
if( !store.state.settings.language ) {
  // no language in store, check browser
  language = window.navigator.userLanguage || window.navigator.language;
  if (language.indexOf('-') !== -1) {
    language = language.split('-')[0];
  }
  else if (language.indexOf('_') !== -1) {
    language = language.split('_')[0];
  }
  else {
    language = "en"
  }
}
else {
  language = store.state.settings.language;
}

export const i18n = new VueI18n({
  locale: language,
  messages: {
    'en': {
      'page-homepage': {
        'link': 'Home',
        'title': 'Project Wenker – Citizen Science Center Zurich'
      },
      'page-transcribe': {
        'link': 'Transcribe',
        'title': 'Project Wenker – Citizen Science Center Zurich'
      },
      'page-translate': {
        'link': 'Translate',
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
      },
      'page-login': {
        'link': 'Login',
        'title': 'Login – Project Wenker – Citizen Science Center Zurich'
      },
      'page-register': {
        'link': 'Register',
        'title': 'Register – Project Wenker – Citizen Science Center Zurich'
      },
      'page-logout': {
        'link': 'Logout',
        'title': 'Logout – Project Wenker – Citizen Science Center Zurich'
      },
      'page-reset': {
        'link': 'Reset Password',
        'title': 'Reset Password – Project Wenker – Citizen Science Center Zurich'
      },
      'page-profile': {
        'link': 'Profile',
        'title': 'Profile – Project Wenker – Citizen Science Center Zurich'
      }
    },
    'de': {
      'page-homepage': {
        'link': 'Home',
        'title': 'Projekt Wenker – Citizen Science Center Zurich'
      },
      'page-transcribe': {
        'link': 'Transcribe',
        'title': 'Project Wenker – Citizen Science Center Zurich'
      },
      'page-translate': {
        'link': 'Translate',
        'title': 'Project Wenker – Citizen Science Center Zurich'
      },
      'page-project': {
        'link': 'Das Projekt',
        'title': 'Das Projekt – Projekt Wenker – Citizen Science Center Zürich'
      },
      'page-wenker': {
        'link': 'Georg Wenker',
        'title': 'Georg Wenker – Projekt Wenker – Citizen Science Center Zürich'
      },
      'page-faq': {
        'link': 'FAQ',
        'title': 'FAQ – Projekt Wenker – Citizen Science Center Zurich'
      },
      'page-login': {
        'link': 'Login',
        'title': 'Login – Project Wenker – Citizen Science Center Zurich'
      },
      'page-register': {
        'link': 'Register',
        'title': 'Register – Project Wenker – Citizen Science Center Zurich'
      },
      'page-logout': {
        'link': 'Logout',
        'title': 'Logout – Project Wenker – Citizen Science Center Zurich'
      },
      'page-reset': {
        'link': 'Reset Password',
        'title': 'Reset Password – Project Wenker – Citizen Science Center Zurich'
      },
      'page-profile': {
        'link': 'Profile',
        'title': 'Profile – Project Wenker – Citizen Science Center Zurich'
      }
    }
  }
})
