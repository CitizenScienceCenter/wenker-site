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
    'de': {
      'page-homepage': {
        'link': 'Home',
        'title': 'Projekt Wenker – Citizen Science Center Zurich'
      },
      'page-transcribe': {
        'link': 'Transkribieren',
        'title': 'Project Wenker – Citizen Science Center Zurich'
      },
      'page-translate': {
        'link': 'Übersetzen',
        'title': 'Project Wenker – Citizen Science Center Zurich'
      },
      'page-project': {
        'link': 'Das Projekt',
        'title': 'Das Projekt – Projekt Wenker – Citizen Science Center Zürich'
      },
      'page-wenker': {
        'link': 'Wenker',
        'title': 'Georg Wenker – Projekt Wenker – Citizen Science Center Zürich'
      },
      'page-faq': {
        'link': 'FAQ',
        'title': 'FAQ – Projekt Wenker – Citizen Science Center Zurich'
      },
      'page-login': {
        'link': 'Anmelden',
        'title': 'Anmelden – Project Wenker – Citizen Science Center Zurich'
      },
      'page-register': {
        'link': 'Registrieren',
        'title': 'Registrieren – Project Wenker – Citizen Science Center Zurich'
      },
      'page-logout': {
        'link': 'Logout',
        'title': 'Logout – Project Wenker – Citizen Science Center Zurich'
      },
      'page-reset': {
        'link': 'Passwort zurücksetzen',
        'title': 'Passwort zurücksetzen – Project Wenker – Citizen Science Center Zurich'
      },
      'page-profile': {
        'link': 'Profil',
        'title': 'Profil – Project Wenker – Citizen Science Center Zurich'
      }
    }
  }
})
