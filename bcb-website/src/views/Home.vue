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

          <WeeklyMeeting></WeeklyMeeting>

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

import Anoucements from "@/components/Anoucements";
import WeeklyMeeting from "@/components/WeeklyMeeting";
import heroImage from "@/assets/showcase/bcb(1).jpg";

export default {
  name: 'Home',
  components: {
    Anoucements,
    WeeklyMeeting
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



</style>
