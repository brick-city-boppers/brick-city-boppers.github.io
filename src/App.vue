<template>
  <v-app id="bcb-app">
    <v-toolbar dark color="#5B3A8B">

    <v-btn flat class="fill-height my-0 mx-0 bcb-nav__item" href="#">
      <v-flex class="bcb-nav__item-content"><v-icon small class="mr-2">fas fa-home</v-icon>Home</v-flex>
    </v-btn>

    <v-btn flat class="fill-height my-0 mx-0 bcb-nav__item" disabled>
      <v-flex class="bcb-nav__item-content"><v-icon small class="mr-2">fas fa-image</v-icon>Gallery</v-flex>
    </v-btn>

    <v-btn flat class="fill-height my-0 mx-0 bcb-nav__item" disabled>
      <v-flex class="bcb-nav__item-content"><v-icon small class="mr-2">fas fa-atlas</v-icon>The Club</v-flex>
    </v-btn>

    <!-- <v-toolbar-title class="white--text">{{title}}</v-toolbar-title> -->

    <v-spacer></v-spacer>

    <v-btn flat icon class="bcb-icon bcb-icon--facebook" href="https://www.facebook.com/groups/BrickCityBoppers/">
      <v-icon>fab fa-facebook-f</v-icon>
    </v-btn>

    <v-btn flat icon class="bcb-icon bcb-icon--instagram" href="https://www.instagram.com/bcbswing/">
      <v-icon>fab fa-instagram</v-icon>
    </v-btn>

    <v-btn flat icon class="bcb-icon bcb-icon--youtube" href="https://www.youtube.com/channel/UCmSuXLCCKfpRHFPvsdtRrVA">
      <v-icon>fab fa-youtube</v-icon>
    </v-btn>
  </v-toolbar>
  <v-content>
    <router-view/>
  </v-content>
    
  </v-app>
</template>

<script>
import Rellax from 'rellax';


export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  mounted: function () {
    // Enable Parallax Scroll
      new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
}
</script>


<style lang='scss'>

@keyframes load-fade-transform {
  0% {
    opacity: 0;
    transform: translateY(-100px)
  }

  80% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes load-fade {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}

@keyframes header-load {
    0% {
        //opacity: 0;
        .bcb-header {
            transform: rotateX(180deg);
        } 
    }

    100% {
        //opacity: 1;
        .bcb-meeting__header {
          transform: rotateX(0deg);
        }
    }
}

@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(100px) ;
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}


// Delays
$bcb-header-delay: 1s;

#bcb-app {
  /* background: -moz-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); /* ff3.6+ */
  /* background: -webkit-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); safari5.1+,chrome10+ */
  /* background: -o-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); opera 11.10+ */
  /* background: radial-gradient(ellipse at center, #8C5EFF 0%, #000000 100%); w3c */

  /* background: radial-gradient(ellipse at bottom, rgba(168,169,224,1) 0%,rgba(33,19,73,1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  //background: linear-gradient(180deg,black, cyan, violet, orange); /* w3c */
  height: 100%;

  .bcb-alert {
    border-radius: 10px;
  }

  .bcb-top {
    margin-top: 70px;
  }

  .bcb-heading {
    position: relative;
    z-index: 10;
    color: #FFFEFE;
  }


  .bcb-home__headline {
    font-family: 'Lobster', cursive !important;
    transition: all;
    opacity: 0;
    animation: load-fade-transform 1s;
    transform-origin: top;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  .bcb-home__sub-headline {
    font-family: "Roboto" !important;
    font-weight: 400 !important;
    opacity: 0;
    animation: load-fade 0.5s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  
  .bcb-nav__item {
    &:hover {
      .bcb-nav__item-content {
        color: violet;
      }
    }
  }

  .bcb-icon {
    svg {
      transition: all 0.2s;
    }

    &:hover.bcb-icon--facebook {
      svg {
        color: aqua;
      }
    }
  

    &:hover.bcb-icon--instagram {
      svg {
        color: orange;
      }
    }

    &:hover.bcb-icon--youtube {
      svg {
        color: red;
      }
    }
  }

  .bcb-hero {
    position: absolute;
    z-index: 0;
    max-height: 600px;
    width: 100%;
    top: 0;
    left: 0;
  }

  .bcb-header {
    letter-spacing: 1px !important;
    font-size: 1.8rem !important;
    color: #FFFEFE;
    animation: header-load 1s;
    transform-origin: top;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  .bcb-meeting__detials {
    font-family: "Lobster" !important;
    font-size: 1.1rem !important;
  }

  .bcb-text {
    font-family: "Roboto" !important;
  }

  /* .bcb-meeting__detials {
    display: flex;
    justify-content: left;
  } */

  .uppercase {
    text-transform: uppercase;
  }

  .bcb-container {
    padding: 5% 5%;
  }

  .bcb-hide-icon i {
      visibility: hidden;
  }

  .bcb-spacer--med {
    height: 40px;
  }

  .bcb-spacer--med-plus {
    height: 80px;
  }

  .bcb-spacer--large {
    height: 100px;
  }

  .bcb-spacer--huge {
    height: 300px;
  }

  .bcb-spacer__margin--large {
    margin-bottom: 100px;
  }

  .bcb-spacer__margin--huge {
    margin-bottom: 300px;
  }

  .bcb-section {
    margin-bottom: 30px;
  }

}

@media screen and (min-width: 40rem) {
  #bcb-app {
    .v-dialog {
      max-width: 400px;
    }
  }
}

@media screen and (min-width: 80rem) {
  .application--wrap {
    .bcb-container {
      padding: 5% 0%;
    }
  }

  #bcb-app {
    .v-dialog {
      max-width: 500px;
    }
  }
}

</style>
