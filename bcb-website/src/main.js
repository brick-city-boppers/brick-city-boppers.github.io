import '@babel/polyfill'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
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
  VBtn
 } from 'vuetify'
 import {Ripple} from 'vuetify/es5/directives';
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from "vue2-google-maps";

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import './stylus/main.styl';

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api-useast.graphcms.com/v1/cjkvr0bk4024i01bnlo1xs2vc/master'

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
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
    VBtn
  },
  directives: {
    Ripple
  }
})

// Apollo Setup
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false;

new Vue({
  provide: apolloProvider.provide(),
  router,
  render: h => h(App)
}).$mount('#app')
