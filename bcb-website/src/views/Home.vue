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
          <v-flex>{{homePageData}}</v-flex>

          <WeeklyMeeting :weeklyMeetings="weeklyMeetings"></WeeklyMeeting>

          <v-flex tag="div" class="bcb-spacer--large"></v-flex>
          
          <v-layout column class="">
            <Announcements :announcements="announcements"></Announcements>
          </v-layout>
        </v-layout>

      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import gql from 'graphql-tag';
import Announcements from "@/components/Announcements";
import WeeklyMeeting from "@/components/WeeklyMeeting";
import heroImage from "@/assets/showcase/bcb(1).jpg";

const homePageData = gql`{
   announcements {
     title
     details
     updatedAt
     dialog
   },
   weeklyMeetings {
     location
     time
     date
     locationLatitude
     locationLongitude
     updatedAt
   }
 }`


export default {
  name: 'Home',
  components: {
    Announcements,
    WeeklyMeeting
  },
  data () {
      return {
        temp: 'test',
        heroImage: heroImage,
        announcements: homePageData,
        weeklyMeetings: homePageData
      }
  },
  apollo: {
      $loadingKey: 'loading',
      announcements: homePageData,
      weeklyMeetings: homePageData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>



</style>
