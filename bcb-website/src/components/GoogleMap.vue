<template>
  <div>
    <gmap-map
      :center="computedCenter"
      :zoom="17"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :position="computedCenter"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      //center: { lat: computedLat, lng: computedLng },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  props: {
    'lat': Number,
    'lng': Number
  },
  computed: {
    computedLat: {
      get: function () {
        let resultLat = this.lat;
        if (resultLat === undefined || resultLat === null) {
          resultLat = 45.508; // Default
        }
        return resultLat
      }
    },

    computedLng: {
      get: function () {
        let resultLng = this.lng;
        if (resultLng === undefined || resultLng === null) {
          resultLng = -73.587; // Default
        }
        return resultLng;
      }
    },

    computedCenter: {
      get: function () {
        let resultLng = this.lng;
        let resultLat = this.lat;

        if (resultLat === undefined || resultLat === null) {
          resultLat = 45.508; // Default
        }
        if (resultLng === undefined || resultLng === null) {
          resultLng = -73.587; // Default
        }

        return {
          lat: resultLat,
          lng: resultLng
        }
      }
    }
  },

  methods: {
      goTo(lat, lng) {
        this.center = {
          lat: lat,
          lng: lng
        }
      },
      // getLat() {
        
      // },
      // getLng() {
      //   if (this.lng === undefined || this.lat === null) {
      //     this.lng = -73.587; // Default
      //   }
      //   return this.lng
      // }
    // receives a place object via the autocomplete component
    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng()
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    // geolocate: function() {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //   });
    // }
  }
};
</script>