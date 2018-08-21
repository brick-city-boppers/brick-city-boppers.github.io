<template>
  <v-container class="bcb-container">
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>

      
        <v-layout column class="bcb-section">
          <v-flex class="bcb-home__image-hero-container">
            <v-flex class="bcb-footer__background-fill"></v-flex>


            <!-- <v-parallax height="1000" class="bcb-home__image-hero--1 bcb-home__image-hero" src="https://drive.google.com/uc?export=view&id=1_VJgka1O4ohGmcDHpsa1a4KZSDEq87jh" alt="Hero Image"></v-parallax> -->
            <img class="bcb-home__image-hero--2 bcb-home__image-hero rellax dark-overlay" src="https://drive.google.com/uc?export=view&id=1pywqlVkrOnxeuKrZtFG0o1OwJMbdSMEf" alt="Hero Image">
            <img class="bcb-home__image-hero--3 bcb-home__image-hero rellax" src="https://drive.google.com/uc?export=view&id=13vhtXqlXfMp30r9XDwvysF1XM7kreXiH" alt="Hero Image">
            <!-- <img class="bcb-home__image-hero--3 bcb-home__image-hero rellax" src="https://hdqwalls.com/download/black-gradient-b9-1920x1080.jpg" alt="Hero Image"> -->
            <img class="bcb-home__image-hero--4 bcb-home__image-hero rellax" src="https://drive.google.com/uc?export=view&id=1RhTYXz-aH2lxFtDzgJuk1dK0i6M-Oh8t" alt="Hero Image"> 
          
          <BCBFooter></BCBFooter>
            <!-- Footer Here -->

          </v-flex>
          <section class="bcb-heading">
            <v-flex tag="h1" class="text-xs-center display-3 font-weight-medium bcb-home__headline bcb-top">The Brick City Boppers</v-flex>
            <v-flex tag="h4" class="text-xs-center subheading font-weight-thin bcb-home__sub-headline">RIT's finest swing dance club. Come learn the styles of Lindy Hop, Charleston, and many more!</v-flex>
          </section>
          
          <!-- <v-parallax class="bcb-hero" src="heroImage"></v-parallax> -->
          
          <v-flex tag="div" class="bcb-spacer--huge"></v-flex>

          
          
          <v-layout justify-space-around row wrap>
            <WeeklyMeeting :weeklyMeetings="weeklyMeetings"></WeeklyMeeting>
            <!-- <v-flex tag="div" class="bcb-spacer--large"></v-flex> -->
            <Announcements :announcements="announcements"></Announcements>
          </v-layout>
        </v-layout>

        <!-- <div id='calendar'></div> -->


      </v-layout>
      
      <!-- <v-flex class="bcb-footer__background-fill"></v-flex> -->
    
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import gql from 'graphql-tag';
import Announcements from "@/components/Announcements";
import WeeklyMeeting from "@/components/WeeklyMeeting";
import BCBFooter from "@/components/BCBFooter";
import heroImage from "@/assets/showcase/bcb(1).jpg";

import $ from 'jquery';

let homePageData = gql`{
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
     details
     updatedAt
   }
 }`


export default {
  name: 'Home',
  components: {
    Announcements,
    WeeklyMeeting,
    BCBFooter
  },
  data () {
      return {
        temp: 'test',
        heroImage: heroImage,
        announcements: homePageData,
        weeklyMeetings: homePageData,
        homePageData: '',
        email: '',
        copied: false,
        emailRules: [
          v => !!v || '',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
      }
  },
  mounted() {
    $('#calendar').fullCalendar({
    // put your options and callbacks here
    })
  },
  apollo: {
      $loadingKey: 'loading',
      announcements: homePageData,
      weeklyMeetings: homePageData
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>


#calendar {
  position: relative;
  z-index: 10;
}

.dark-overlay {
    &:after {
        content: "";
        width: 50%;
        height: auto;
        position: absolute;
        z-index: 1;
        width: 100%;
        background: linear-gradient(to bottom,  rgba(0, 0, 0, 0.1) 0%,rgba(255, 0, 0, 0.05) 100%); /* W3C */
    // Take note of this negative z-index and copare to each article's positive z-index. This helps your content to show up over the overlay.
     top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
}

.application--wrap {
  height: 2000px;

  .bcb-home__image-hero-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  .bcb-home__image-hero {
    position: relative;
    width: 100%;
    max-height: 1000px;
    height: 800px;
    object-fit: cover;
    left: 0;
    opacity: 0;
    animation: load-fade 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  }

  .bcb-footer__background-fill {
    background-color: rgb(49, 49, 49);
    height: 100%;
    width: 100%;
    top: 0;
    position: absolute;
    background: linear-gradient(180deg, black, cyan, cyan, violet, violet, yellow); /* w3c */
  }

  // .bcb-home__image-hero--1 {
  //   clip-path: polygon(0% 0%, 30% 100%, 0% 100%);
  //   object-position: -100px -100px;
  //   //object-fit: initial;
  // }

  .bcb-home__image-hero--2 {
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%, 0% 100%);
    //object-position: 50px 0px;
  }

  .bcb-home__image-hero--3 {
    clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 80%);
    //object-position: 400px 0px;
    top: -225px;
  }

  .bcb-home__image-hero--4 {
    clip-path: polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%);
    //object-position: 400px 0px;
    top: -370px;
  }

  .bcb-home__image-hero--5 {
    clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%);
    //object-position: 400px 0px;
    top: -200px;
  }

  .bcb-home__image-hero--6 {
    clip-path: polygon(0% 30%, 100% 0%, 100% 100%, 0% 100%);
    //object-position: 400px 0px;
    top: -200px;
  }
}



  // .bcb-home__image-hero--4 {
  //   clip-path: polygon(0% 0%, 30%, 100%, 0%, 100%);
  // }

  @media screen and (min-width: 40rem) {
    .bcb-home__headline {
      font-size: 7rem !important;
    }

    .bcb-home__sub-headline {
      font-size: 1.6rem !important;
    }
  }
}

</style>
