<template>
  <v-container class="bcb-container">
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>

      
        <v-layout column class="bcb-section">
          <!-- <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5"> -->
          <v-flex tag="h1" class="text-xs-center bcb-home__title bcb-top">Brick City Boppers</v-flex>
          <v-flex tag="h4" class="text-xs-center ">RIT's finest swing dance club. Come learn the styles of Lindy Hop, Charleston, and many more</v-flex>
          
          <v-flex tag="div" class="bcb-spacer"></v-flex>
          <section id="weekly-meeting">
            <v-flex href="#weekly-meeting" tag="h2" class="">Weekly Meeting</v-flex>
            
              <v-expansion-panel popout>
                <v-expansion-panel-content>
                  <div slot="header">
                    <v-layout row wrap>
                      <v-flex xs2 tag="h4" class="mt-1 mb-0">Location</v-flex>
                      <v-flex xs10 tag="p" class="mt-1 mb-0">Campus Center 2061</v-flex>
                    </v-layout>
                  </div>
                  <v-card>
                    <google-map/>
                  </v-card>
                </v-expansion-panel-content>
                  <v-expansion-panel-content readonly class="bcb-hide-icon">
                  <div slot="header">
                    <v-layout row wrap>
                      <v-flex xs2 tag="h4">Time</v-flex>
                      <v-flex xs10 tag="p">8:00pm EST</v-flex>
                    </v-layout>
                  </div>
                  <v-card>
                    <google-map/>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
          </section>

          
          <v-layout column class="">
            <!-- Anoucements -->
          </v-layout>
        </v-layout>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import GoogleMap from "@/components/GoogleMap";

export default {
  name: 'Home',
  components: {
    GoogleMap
  },
  data () {
    return {
      temp: 'test'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.bcb-top {
  margin-top: 70px;
}

.bcb-container {
  padding: 5% 5%;
}

.bcb-hide-icon i {
    visibility: hidden;
}

.bcb-spacer {
  height: 40px;
}

.bcb-section {
  margin-bottom: 30px;
}

</style>
