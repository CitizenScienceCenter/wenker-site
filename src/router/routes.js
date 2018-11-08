// import Home from './views/Home.vue'
// import About from './views/About.vue'
// import Events from './views/Events.vue'

// lazy loading routes
const Home = resolve => {
  require.ensure(['../views/Home.vue'], () => {
    resolve( require('../views/Home.vue') );
  });
};
const Project = resolve => {
  require.ensure(['../views/Project.vue'], () => {
    resolve( require('../views/Project.vue') );
  });
};
const Wenker = resolve => {
  require.ensure(['../views/Wenker.vue'], () => {
    resolve( require('../views/Wenker.vue') );
  });
};
const FAQ = resolve => {
  require.ensure(['../views/FAQ.vue'], () => {
    resolve( require('../views/FAQ.vue') );
  });
};

export const routes = [
    { path: '/', component: Home, meta: {title: 'Homepage'} },
    { path: '/activities', component: Project, meta: {title: 'Project'} },
    { path: '/offer', component: Wenker, meta: {title: 'Wenker'} },
    { path: '/about', component: FAQ, meta: {title: 'FAQ'} }
]
