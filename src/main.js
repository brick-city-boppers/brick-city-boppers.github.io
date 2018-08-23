import '@babel/polyfill'
import '@fortawesome/fontawesome-free/js/fontawesome.min'
import '@fortawesome/fontawesome-free/js/solid.min'
import '@fortawesome/fontawesome-free/js/brands.min'
// import 'moment/min/moment.min.js';
import 'fullcalendar/dist/fullcalendar.js';
import 'fullcalendar/dist/gcal.min.js';
import 'fullcalendar/dist/fullcalendar.min.css';


import Vue from 'vue'
import {
  Vuetify, // required
  VApp, // required
  VExpansionPanel,
  VGrid,
  VCard,
  VNavigationDrawer,
  transitions,
  VList,
  VIcon,
  VFooter,
  VParallax,
  VDivider,
  VDialog,
  VBtn,
  VToolbar,
  VForm,
  VTextField,
  VAlert
 } from 'vuetify'
 import {Ripple} from 'vuetify/es5/directives';

import Vuelidate from 'vuelidate'

import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import './stylus/main.styl';

// Replace this with your project's endpoint
let GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/cjkvr'

let apiSplit1 = '0bk4024';
let apiSpilt2 = 'i01bnlo1xs2vc/master';

GRAPHCMS_API += apiSplit1;
GRAPHCMS_API += apiSpilt2;

const apolloClient = new ApolloClient({
  link: new HttpLink({ 
    uri: GRAPHCMS_API,
    headers: {
      authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZTYwZGZjMjAtOGUwNy00NWI1LTljMzUtMGRiYTY2MTIzOTc0In0.hM2oXp-ekfnDfVkno6kqdLqN3CNmy2YrTdiUPS0ROc0'
    }
   }),
  cache: new InMemoryCache()
});

// Vue uses

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDxSBcGnN4kJAFESqvmG1DzNPi3EvX5p7A",
    libraries: "places" // necessary for places input
  }
});

Vue.use(Vuetify, {
  components: {
    VApp,
    VExpansionPanel,
    VGrid,
    VCard,
    VNavigationDrawer,
    transitions,
    VList,
    VIcon,
    VFooter,
    VParallax,
    VDivider,
    VDialog,
    VBtn,
    VToolbar,
    VForm,
    VTextField,
    VAlert
  },
  directives: {
    Ripple
  }
})

// Apollo Setup
Vue.use(VueApollo)
Vue.use(Vuelidate)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false;

new Vue({
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
}).$mount('#app')
