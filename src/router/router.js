import VueRouter from 'vue-router'
import { routes } from './routes.js'
import { i18n } from '../i18n.js'
import store from '../store/store.js'

export const router = new VueRouter({
  routes: routes,
  mode: 'history',
// eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});


router.beforeEach((to, from, next) => {

    console.log( 'navigate to: '+to.path );
    console.log('split:');

    let filteredPath = to.path.split('/').filter(element => element.length > 0);
    console.log( filteredPath );

    //if( to.params.lang && to.params.lang.split('/')[0].length === 2 ) {
    if( filteredPath.length > 0 && filteredPath[0].length === 2 ) {
        console.log( 'url has language: '+ to.params.lang);
        let language = to.params.lang;
        store.dispatch("settings/setLanguage", language);
        i18n.locale = language;

        const title = i18n.messages[language][to.meta.i18n]['title']
        if (title) {
            document.title = title
        } else {
            document.title = ''
        }

        // --- auth / account

        if( to.matched.some(record => record.meta.requiresAuth) ) {
            if( store.state.c3s.user.currentUser ) {
                console.log('validate user '+store.state.c3s.user.currentUser.username);

                store.dispatch('c3s/user/validate').then(v => {
                    //console.log('validation success');
                    if (v) {
                        next();
                    }
                    else {
                        router.push('/login');
                    }
                });
            }
            else {
                store.dispatch('c3s/user/generateAnon').then(u => {
                    console.log('generate anon');
                    next();
                });
            }

        }
        else if( to.matched.some(record => record.meta.requiresAccount) ) {

            if( !store.state.c3s.user.currentUser || store.state.c3s.user.isAnon ) {
                router.push('/login');
            }
            else {
                next();
            }
        }
        else {
            next();
        }

        // ----

    }
    else {
        console.log('redirect to');
        console.log( '/'+ i18n.locale + to.path );
        next( '/'+ i18n.locale + to.path );
    }


});

/*

router.beforeEach((to, from, next) => {
  const lang = store.state.settings.language || 'de'
  const title = i18n.messages[lang][to.meta.i18n]['title']
  if (title) {
    document.title = title
  } else {
    document.title = ''
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.c3s.user.currentUser) {

      store.dispatch('c3s/user/validate').then(v => {
        if (v instanceof  Error) {
            store.dispatch('c3s/user/generateAnon').then(u => {
                next()
            })
        } else if(v) {
            next()
        } else {
            this.push({name: 'Login'})
        }
      }).catch(() => {
          store.dispatch('c3s/user/generateAnon').then(u => {
              next()
          })
      })
    } else {
        store.dispatch('c3s/user/generateAnon').then(u => {
            next()
        })
      // setTimeout(() => {

      // }, 1000)

    }
  } else {
    next()
  }
});

*/
