import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store/store.js'

Vue.use(VueI18n);

/*
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
    if( language !== 'en' && language !== 'de') {
        language = "de";
    }

    store.dispatch("settings/setLanguage", language );
}
language = store.state.settings.language;
*/

if( !store.state.settings.language ) {
    // no language in store
    var language;

    // check browser
    language = window.navigator.userLanguage || window.navigator.language;

    // trim
    language = language.substr(0,2);

    // check if valid
    if( language !== 'de' && language !== 'en' ) {
        language = "de";
    }

    // language for prerendering default routes
    if( navigator.userAgent === 'ReactSnap' ) {
        language = "de";
    }

    store.dispatch("settings/setLanguage", language );
}

export const i18n = new VueI18n({
  silentTranslationWarn: true,
  locale: store.state.settings.language,
  silentTranslationWarn: true,
  messages: {
    'de': {

    "site-name": "Projekt Wenker",
    "site-title": "Projekt Wenker | Citizen Science Center Zürich",
    "site-description": "Schweizerdeutsch 1930 / 2020",

      'navigation-homepage': {
        'link': 'Home'
      },
      'navigation-transcribe': {
        'link': 'Transkribieren'
      },
      'navigation-translate': {
        'link': 'Übersetzen'
      },
      'navigation-project': {
        'link': 'Das Projekt'
      },
      'navigation-wenker': {
        'link': 'Wenker'
      },
      'navigation-faq': {
        'link': 'FAQ'
      },
    'navigation-terms': {
        'link': 'Privacy Policy & Terms of Use'
    },
      'navigation-login': {
        'link': 'Anmelden'
      },
      'navigation-register': {
        'link': 'Registrieren'
      },
      'navigation-reset': {
        'link': 'Passwort zurücksetzen',
        'title': 'Passwort zurücksetzen – Projekt Wenker – Citizen Science Center Zürich'
      },
      'navigation-profile': {
        'link': 'Profil'
      },
      'navigation-sheets': {
        'link': 'Boegen',
        'title': 'Boegen – Projekt Wenker – Citizen Science Center Zürich'
      }
    },
      'en': {

          "site-name": "Project Wenker",
          "site-title": "Project Wenker | Citizen Science Center Zurich",
          "site-description": "Swiss German 1930 / 2020",

          'navigation-homepage': {
              'link': 'Home'
          },
          'navigation-transcribe': {
              'link': 'Transcription'
          },
          'navigation-translate': {
              'link': 'Translation'
          },
          'navigation-project': {
              'link': 'The Project'
          },
          'navigation-wenker': {
              'link': 'Wenker'
          },
          'navigation-faq': {
              'link': 'FAQ'
          },
          'navigation-terms': {
              'link': 'Privacy Policy & Terms of Use'
          },
          'navigation-login': {
              'link': 'Login'
          },
          'navigation-register': {
              'link': 'Register'
          },
          'navigation-reset': {
              'link': 'Reset Password',
              'title': 'Reset Password – Project Wenker – Citizen Science Center Zurich'
          },
          'navigation-profile': {
              'link': 'Profile'
          },
          'navigation-sheets': {
              'link': 'Progress',
              'title': 'Progress – Project Wenker – Citizen Science Center Zurich'
          }
      }
  }

})
