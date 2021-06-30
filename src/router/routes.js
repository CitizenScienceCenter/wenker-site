import Activity from '@/views/Activity'
import * as User from '@/views/user'
import * as Translation from '@/views/translation'
import * as Transcription from '@/views/transcription'
import MapView from '../components/MapView'
import store from '../store/store.js'

// const logout = (to, from, next) => {
//     localStorage.removeItem('user');
//     console.log('done')
//     store.commit('c3s/user/SET_CURRENT_USER', null);
//     store.commit('c3s/user/SET_ANON', false);
//     next()
// };

// lazy loading routes
const Home = resolve => {
    require.ensure(["../views/Home.vue"], () => {
        resolve(require("../views/Home.vue"));
    });
};
const Project = resolve => {
    require.ensure(["../views/static/Project.vue"], () => {
        resolve(require("../views/static/Project.vue"));
    });
};
const Wenker = resolve => {
    require.ensure(["../views/static/Wenker.vue"], () => {
        resolve(require("../views/static/Wenker.vue"));
    });
};
const FAQ = resolve => {
    require.ensure(["../views/static/FAQ.vue"], () => {
        resolve(require("../views/static/FAQ.vue"));
    });
};
const Terms = resolve => {
    require.ensure(["../views/static/Terms.vue"], () => {
        resolve(require("../views/static/Terms.vue"));
    });
};

// const ActivityAdmin = resolve => {
//     require.ensure(["../views/Admin.vue"], () => {
//         resolve(require("../views/Admin.vue"));
//     });
// };



export const routes = [
    {
        path: '/:lang',
        component: { render (c) { return c('router-view') } },
        children: [
            {
                path: "",
                component: Home,
                name: 'Home',
                beforeEnter: null,
                meta: {i18n: "navigation-homepage", nav: false}
            },
            // {
            //     path: "logout",
            //     component: Home,
            //     name: "Logout",
            //     beforeEnter: logout,
            //     meta: {i18n: 'navigation-logout', nav: false}
            // },
            // {
            //     path: "transcribe",
            //     component: Activity,
            //     meta: {requiresAuth: true, breadcrumb: 'Projects', i18n: 'navigation-transcribe', nav: true},
            //     children: [
            //         {
            //             path: "",
            //             name: "TranscribeStart",
            //             component: Transcription.Start,
            //             meta: {
            //                 requiresAuth: true,
            //                 breadcrumb: "Transcribe",
            //                 i18n: 'navigation-transcribe',
            //                 nav: false
            //             }
            //         },
            //         {
            //             path: "task",
            //             name: "TranscribeTask",
            //             component: Transcription.Task,
            //             meta: {
            //                 requiresAuth: true,
            //                 breadcrumb: "Transcribe Task",
            //                 i18n: 'navigation-transcribe',
            //                 nav: false
            //             }
            //         },
            //         {
            //             path: "task/:id",
            //             name: "TranscribeTaskID",
            //             component: Transcription.Task,
            //             meta: {
            //                 requiresAuth: true,
            //                 breadcrumb: "Transcribe Task",
            //                 page: 'navigation-transcribe'
            //             }
            //         },
            //         {
            //             path: "complete",
            //             name: "TranscribeComplete",
            //             component: Transcription.Complete,
            //             meta: {
            //                 requiresAuth: true,
            //                 breadcrumb: "Transcribe Complete",
            //                 i18n: 'navigation-transcribe',
            //                 nav: false
            //             }
            //         }
            //     ]
            // },
            // {
            //     path: "translate",
            //     component: Activity,
            //     meta: {requiresAuth: true, breadcrumb: 'Projects', i18n: 'navigation-translate', nav: true},
            //     children: [
            //         {
            //             path: "",
            //             name: "TranslateStart",
            //             component: Translation.Start,
            //             meta: {
            //                 requiresAuth: true,
            //                 breadcrumb: "Translate",
            //                 i18n: 'navigation-translate',
            //                 nav: false
            //             }
            //         },
            //         {
            //             path: "task",
            //             name: "TranslateTask",
            //             component: Translation.Task,
            //             meta: {
            //                 requiresAuth: true,
            //                 breadcrumb: "Translate Task",
            //                 i18n: 'navigation-translate',
            //                 nav: false
            //             }
            //         },
            //         {
            //             path: "task/:id",
            //             name: "TranslateTaskID",
            //             component: Translation.Task,
            //             meta: {
            //                 requiresAuth: true,
            //                 breadcrumb: "Translate Task",
            //                 page: 'navigation-translate'
            //             }
            //         },
            //         {
            //             path: "complete",
            //             name: "TranslateComplete",
            //             component: Translation.Complete,
            //             meta: {
            //                 requiresAuth: true,
            //                 breadcrumb: "Translate Complete",
            //                 i18n: 'navigation-translate',
            //                 nav: false
            //             }
            //         }
            //     ]
            // },
            {
                path: "project",
                component: Project,
                meta: {i18n: "navigation-project", nav: true}
            },
            {
                path: "wenker",
                component: Wenker,
                meta: {i18n: "navigation-wenker", nav: true}
            },
            {
                path: "faq",
                component: FAQ,
                meta: {i18n: "navigation-faq", nav: true}
            },
            {
                path: "terms",
                component: Terms,
                meta: {i18n: "navigation-terms", nav: false}
            },
            // {
            //     path: "login",
            //     name: "Login",
            //     component: User.Login,
            //     meta: {i18n: 'navigation-login', nav: false}
            // },
            // {
            //     path: "register",
            //     name: "Register",
            //     component: User.Register,
            //     meta: {i18n: 'navigation-register', nav: false}
            // },
            // {
            //     path: "admin",
            //     name: "Admin",
            //     component: ActivityAdmin,
            //     meta: {requiresOwner: true}
            // },
            // {
            //     path: "reset",
            //     name: "ResetRequest",
            //     component: User.RequestReset,
            //     meta: {i18n: 'navigation-reset', nav: false}
            // },
            // {
            //     path: "reset/:token",
            //     name: "Reset",
            //     component: User.Reset,
            //     meta: {i18n: 'navigation-reset', nav: false}
            // },
            // {
            //     path: "profile",
            //     name: "UserProfile",
            //     component: User.Profile,
            //     meta: {requiresAuth: true, breadcrumb: 'View User', i18n: 'navigation-profile', nav: false}
            // },
            {
                path: "error",
                name: "Error",
                component: Home.Error,
                meta: {i18n: 'navigation-profile', nav: false}
            }
        ]
    }
];
