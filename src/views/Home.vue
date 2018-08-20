<template>
  <v-container class="bcb-container">
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap>

      
        <v-layout column class="bcb-section">
          <v-flex class="bcb-home__image-hero-container">
            <v-flex class="bcb-footer__background-fill"></v-flex>


            <!-- <v-parallax height="1000" class="bcb-home__image-hero--1 bcb-home__image-hero" src="https://drive.google.com/uc?export=view&id=1_VJgka1O4ohGmcDHpsa1a4KZSDEq87jh" alt="Hero Image"></v-parallax> -->
            <img class="bcb-home__image-hero--2 bcb-home__image-hero rellax dark-overlay" src="https://drive.google.com/uc?export=view&id=1pywqlVkrOnxeuKrZtFG0o1OwJMbdSMEf" alt="Hero Image">
            <!-- <img class="bcb-home__image-hero--3 bcb-home__image-hero rellax" src="https://drive.google.com/uc?export=view&id=13vhtXqlXfMp30r9XDwvysF1XM7kreXiH" alt="Hero Image"> -->
            <img class="bcb-home__image-hero--3 bcb-home__image-hero rellax" src="https://hdqwalls.com/download/black-gradient-b9-1920x1080.jpg" alt="Hero Image">
            <img class="bcb-home__image-hero--4 bcb-home__image-hero rellax" src="https://drive.google.com/uc?export=view&id=1RhTYXz-aH2lxFtDzgJuk1dK0i6M-Oh8t" alt="Hero Image"> 
          
            <v-flex class="bcb-home__footer">
                <v-flex class="bcb-spacer--med-plus"></v-flex>

                <v-flex class="bcb-footer__sign-up-container">
                  <v-flex class="bcb-footer__sign-up">
                    <v-form>
                      <v-flex class="bcb-footer__sign-up-title"><span class="bcb-footer__sign-up--important">Sign up</span> for our weekly newsletter!</v-flex>
                      <v-layout row>
                        <v-text-field clearable class="bcb-footer__sign-up-input"
                          background-color="white"
                          label="Sign up with Email"
                          solo
                          v-model="email"
                          :rules="emailRules"
                        ></v-text-field>

                        <v-btn class="bcb-footer__sign-up-button">
                          <v-icon>fas fa-arrow-right</v-icon>
                        </v-btn>
                      </v-layout>
                      <v-flex class="bcb-footer__sign-up-field"></v-flex>
                    </v-form>
                  </v-flex>
                </v-flex>

                <v-flex class="bcb-spacer--med"></v-flex>

              <v-flex class="bcb-footer__contact-container">
                <v-flex class="bcb-footer__contact">
                  <v-flex class="bcb-header">Contact Us</v-flex>
                  <v-layout row justify-space-between class="bcb-footer__contact-email" @click="copy">
                    <v-icon small>fas fa-envelope</v-icon>
                    <v-flex tag="div">bcbswing@gmail.com</v-flex>
                  </v-layout>

                  <v-layout row justify-space-between class="bcb-footer__contact-phone" @click="copy">
                    <v-icon small>fas fa-phone-square</v-icon>
                    <v-flex tag="div">TBA</v-flex>
                  </v-layout>

                  <v-alert class="bcb-alert"
                    :value="copied"
                    transition="slide-y-reverse-transition"
                    type="success"
                  >
                    Copied
                  </v-alert>
                </v-flex>
              </v-flex>
            </v-flex>
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
    WeeklyMeeting
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
  methods: {
    
    // Adds then removes the copy alert after a certain amount of time
    triggerCopied: function() {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },

    copy: function(event) {
      let range = undefined;
      if (document.selection) { // IE
          range = document.body.createTextRange();
          range.moveToElementText($(event.target)[0]);
          range.select();
      } else if (window.getSelection) {
          range = document.createRange();
          range.selectNode($(event.target)[0]);
          window.getSelection().removeAllRanges();
          window.getSelection().addRange(range);
      }

      document.execCommand('copy');
      window.getSelection().removeAllRanges();

      this.triggerCopied();   
    }
  }
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

#bcb-app {

  .bcb-home__footer {
    height: 423px;
    bottom: -70px;
    background-color: #272727;
    color: #FEFEFE;
    position: absolute;
    width: 100%;

    .bcb-footer__sign-up--important {
      color: orange;
    }

    .bcb-footer__sign-up-button {
      background-color: orange;
      color: #FEFEFE;
      position: relative;
      margin: 0 !important;
      /* display: block; */
      /* padding: 13px 5px; */
      height: 48px;
      border-radius: 0 10px 10px 0px;
      left: -2px;
    }

    .bcb-footer__sign-up-input {
      border-radius: 10px 0px 0px 10px;
    }
  }

  .bcb-footer__sign-up-container {
    display: block;

    .bcb-footer__sign-up {
      width: 50%;
      margin: auto;

      .bcb-footer__sign-up-title {
        font-size: 18px !important;
        width: 100%;
        margin-bottom: 2px;
      }
    }
  }

  $email-icon-color: rgb(41, 146, 187);
  $email-text-color: rgb(221, 221, 221);

  $phone-icon-color: rgb(192, 99, 192);
  $phone-text-color: rgb(221, 221, 221);

  .bcb-footer__contact-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .bcb-footer__contact {
      margin: auto;
    }

    .bcb-header {
      margin-bottom: 5px;
    }

    .bcb-footer__contact-email {
      svg {
        color: $email-icon-color;
        transition: color 0.15s;
      }

      div {
        color: $email-text-color;
        transition: color 0.15s;
      }

      &:hover {
        cursor: pointer;

        svg {
          color: saturate($email-icon-color, 100%);
        }

        div {
          color: lighten($email-text-color, 30%);
        }
      }
    }

    .bcb-footer__contact-phone {
      svg {
        color: $phone-icon-color;
        transition: color 0.15s;
      }

      div {
        color: $phone-text-color;
        transition: color 0.15s;
      }

      &:hover {
        cursor: pointer;

        svg {
          color: saturate($phone-icon-color, 30%);
        }

        div {
          color: lighten($phone-text-color, 30%);
        }
      }
    }

    svg {
      font-size: 16px;
      margin-right: 12px;
      height: 20px;
    }
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
