import Vue from 'vue'
import VueRouter from 'vue-router'

// Templetes
import App from './App.vue';
import Home from './temps/Home.vue';
import Events from './temps/Events.vue';
import Learn from './temps/Learn.vue';
import Volunteer from './temps/Volunteer.vue';
// import Nav from './temps/Nav.vue';

// // Components
// Vue.component('nav', Nav);

let home = Vue.component('home', Home);
let events = Vue.component('events', Events);
let learn = Vue.component('learn', Learn);
let volunteer = Vue.component('volunteer', Volunteer);

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/events', component: events},
  { path: '/learn', component: learn},
  { path: '/volunteer', component: volunteer},
  { path: '/', component: home}
]


const router = new VueRouter({
  routes // short for `routes: routes`
})

const methods = {
  initMap: function() {
    let rit = {lat: 43.0853377, lng: -77.6752779};
    let dorms = {lat: 43.085411, lng: -77.668355};
    let event1 = {lat: 43.084392, lng: -77.668440};
    let event2 = {lat: 43.084909, lng: -77.668004};
    let event3 = {lat: 43.085485, lng: -77.667661};
    let map = new google.maps.Map(document.getElementById('events-map'), {
        zoom: 17,
        center: dorms
    });

    let markerEvent1 = new google.maps.Marker({
        position: event1,
        map: map,
        title: 'Custom Pillow Making',
        infowindow: new google.maps.InfoWindow({
            content: `<strong>Where: </strong>Outside Gleason Dorms<br>
                      <strong>Date: </strong>09/1/2018 <br>
                      <strong>Time: </strong>2:00pm<br><br>
                        Create your own custom pillowcase and enjoy some free food!
                        `
        })
    });

    markerEvent1.addListener('click', function() {
      markerEvent1.infowindow.open(map, markerEvent1);
    });

    let markerEvent2 = new google.maps.Marker({
        position: event2,
        map: map,
        title: 'Comedian Speaker',
        infowindow: new google.maps.InfoWindow({
            content: `<strong>Where: </strong>Outside NRH<br>
                      <strong>Date: </strong>09/8/2018 <br>
                      <strong>Time: </strong>2:00pm<br><br>
                        Lets laugh with free food!
                        `
        })
    });

    markerEvent2.addListener('click', function() {
      markerEvent2.infowindow.open(map, markerEvent2);
    });

    let markerEvent3 = new google.maps.Marker({
        position: event3,
        map: map,
        infowindow: new google.maps.InfoWindow({
            content: `<strong>Where: </strong>Outside Sols Dorms<br>
                      <strong>Date: </strong>09/15/2018<br>
                      <strong>Time: </strong>2:00pm<br><br>
                        Free Massages and facials! Stay relaxed as you prepare for finals. <br>
                        Free Swag!
                        `
        })
    });

    markerEvent3.addListener('click', function() {
      markerEvent3.infowindow.open(map, markerEvent3);
    });
}
}

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

// const app = new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

const app = new Vue({
  el: document.getElementById('app'),
  data: methods,
  router,
  render: h => h(App)
})
