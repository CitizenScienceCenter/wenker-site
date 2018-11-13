import Activity from '@/views/Activity'
import * as User from '@/views/user'
import * as Translation from '@/views/translation'
import * as Transcription from '@/views/transcription'

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

export const routes = [
  {
    path: "/",
    component: Home,
    meta: { page: "page-homepage", nav: false }
  },
  {
    path: "/transcribe",
    component: Activity,
    meta: { requiresAuth: true, breadcrumb: 'Projects', page: 'page-transcribe', nav: true },
    children: [
      {
        path: "",
        name: "TranscribeStart",
        component: Transcription.Start,
        meta: {
          requiresAuth: true,
          breadcrumb: "Transcribe",
          page: 'page-transcribe'
        }
      },
      {
        path: "/task",
        name: "TranscribeTask",
        component: Transcription.Task,
        meta: {
          requiresAuth: true,
          breadcrumb: "Transcribe Task",
          page: 'page-transcribe'
        }
      },
      {
        path: "/complete",
        name: "TranscribeComplete",
        component: Transcription.Complete,
        meta: {
          requiresAuth: true,
          breadcrumb: "Transcribe Complete",
          page: 'page-transcribe'
        }
      }
    ]
  },
  {
    path: "/translate",
    component: Activity,
    meta: { requiresAuth: true, breadcrumb: 'Projects', page: 'page-translate', nav: true },
    children: [
      {
        path: "",
        name: "TranslateStart",
        component: Translation.Start,
        meta: {
          requiresAuth: true,
          breadcrumb: "Translate",
          page: 'page-translate'
        }
      },
      {
        path: "/task",
        name: "TranslateTask",
        component: Translation.Task,
        meta: {
          requiresAuth: true,
          breadcrumb: "Translate Task",
          page: 'page-translate'
        }
      },
      {
        path: "/complete",
        name: "TranslateComplete",
        component: Translation.Complete,
        meta: {
          requiresAuth: true,
          breadcrumb: "Translate Complete",
          page: 'page-translate'
        }
      }
    ]
  },
  {
    path: "/project",
    component: Project,
    meta: { page: "page-project", nav: true }
  },
  {
    path: "/wenker",
    component: Wenker,
    meta: { page: "page-wenker", nav: true }
  },
  {
    path: "/faq",
    component: FAQ,
    meta: { page: "page-faq", nav: true }
  },
  {
    path: "/login",
    name: "Login",
    component: User.Login,
    meta: { page: 'page-login', nav: false }
  },
  {
    path: "/register",
    name: "Register",
    component: User.Register,
    meta: { page: 'page-register', nav: false }
  },
  {
    path: "/logout",
    name: "Logout",
    component: User.Login, //TODO add beforeEnter hook to log out user,
    meta: { page: 'page-logout', nav: false }
  },
  {
    path: "/reset",
    name: "ResetRequest",
    component: User.RequestReset,
    meta: { page: 'page-reset', nav: false }
  },
  {
    path: "/reset/:token",
    name: "Reset",
    component: User.Reset,
    meta: { page: 'page-reset', nav: false }
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: User.Profile,
    meta: { requiresAuth: true, breadcrumb: 'View User', page: 'page-profile', nav: false }
  },
  {
    path: "/error",
    name: "Error",
    component: Home.Error,
    meta: { page: 'page-profile', nav: false }
  }
];
