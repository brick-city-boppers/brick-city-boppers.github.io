import Vue from 'vue'
import VueRouter from 'vue-router'
import mainSass from './scss/main.scss'

// Templetes
import App from './App.vue';
import Home from './temps/Home.vue';
//import Events from './temps/Events.vue';
// import Nav from './temps/Nav.vue';

// // Components
// Vue.component('nav', Nav);

let home = Vue.component('home', Home);
//let events = Vue.component('events', Events);

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  //{ path: '/events', component: events},
  { path: '/', component: home}
]


const router = new VueRouter({
  routes // short for `routes: routes`
})

const methods = {}

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

const app = new Vue({
  el: document.getElementById('app'),
  data: methods,
  router,
  render: h => h(App)
})
