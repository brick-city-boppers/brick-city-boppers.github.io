<template>
  <v-container class="bcb-container">
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>

      
        <v-layout column class="bcb-section">
          <!-- <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5"> -->
          <section class="bcb-heading">
            <v-flex tag="h1" class="text-xs-center display-3 font-weight-medium bcb-home__headline bcb-top">The Brick City Boppers</v-flex>
            <v-flex tag="h4" class="text-xs-center subheading font-weight-thin bcb-home__sub-headline">RIT's finest swing dance club. Come learn the styles of Lindy Hop, Charleston, and many more!</v-flex>
          </section>
          
          <!-- <v-parallax class="bcb-hero" src="heroImage"></v-parallax> -->
          
          <v-flex tag="div" class="bcb-spacer--large"></v-flex>

          <section id="weekly-meeting">
            <v-flex href="#weekly-meeting" tag="h2" class="headline font-weight-medium bcb-meeting__header uppercase mb-1 ">Weekly Meeting</v-flex>
              <v-expansion-panel popout class="bcb-meeting__detials">
                <v-expansion-panel-content>
                  <div slot="header">
                    <v-layout row wrap>
                      <v-flex xs4 tag="h4" class="mt-1 mb-0 bcb-title">Location</v-flex>
                      <v-flex xs8 tag="p" class="mt-1 mb-0">Campus Center 2061</v-flex>
                    </v-layout>
                  </div>
                  <v-card>
                    <google-map/>
                  </v-card>
                </v-expansion-panel-content>
                  <v-expansion-panel-content readonly class="bcb-hide-icon">
                  <div slot="header">
                    <v-layout row wrap>
                      <v-flex xs4 tag="h4" class="bcb-title">Time</v-flex>
                      <v-flex xs8 tag="p">8:00pm EST</v-flex>
                    </v-layout>
                  </div>
                  <v-card>
                    <google-map/>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
          </section>

          <v-flex tag="div" class="bcb-spacer--large"></v-flex>
          
          <v-layout column class="">
            <Anoucements></Anoucements>
          </v-layout>
        </v-layout>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import GoogleMap from "@/components/GoogleMap";
import Anoucements from "@/components/Anoucements";
import heroImage from "@/assets/showcase/bcb(1).jpg";

export default {
  name: 'Home',
  components: {
    GoogleMap,
    Anoucements
  },
  data () {
    return {
      temp: 'test',
      heroImage: heroImage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>

.application--wrap {
  /* background: -moz-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); /* ff3.6+ */
  /* background: -webkit-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); safari5.1+,chrome10+ */
  /* background: -o-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); opera 11.10+ */
  /* background: radial-gradient(ellipse at center, #8C5EFF 0%, #000000 100%); w3c */

  /* background: radial-gradient(ellipse at bottom, rgba(168,169,224,1) 0%,rgba(33,19,73,1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background: linear-gradient(180deg, #5900BF 0%, #5900BF 1%, #EDE1F0 100%); /* w3c */


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
  }

  .bcb-home__sub-headline {
    font-family: "Nunito Sans" !important;
  }

  .bcb-hero {
    position: absolute;
    z-index: 0;
    max-height: 600px;
    width: 100%;
    top: 0;
    left: 0;
  }

  #weekly-meeting {
    z-index: 10;
  }


  .bcb-meeting__header {
    letter-spacing: 1px !important;
    font-size: 1.6rem !important;
  }

  .bcb-meeting__detials {
    font-family: "Lobster" !important;
    font-size: 1.1rem !important;
  }

  // .bcb-title {
  //   font-family: "Nunito Sans" !important;
  // }

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

  .bcb-spacer--large {
    height: 100px;
  }

  .bcb-section {
    margin-bottom: 30px;
  }

}

</style>
