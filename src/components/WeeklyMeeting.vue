<template>
    <section id="weekly-meeting" class="bcb-spacer__margin--large">
        <v-flex href="#weekly-meeting" tag="h2" class="headline font-weight-medium bcb-header uppercase mb-1">Weekly Meeting</v-flex>
            <v-expansion-panel class="bcb-meeting__detials elevation" v-for="(weeklyMeeting, index) in weeklyMeetings" :key='index'>
            <v-expansion-panel-content readonly class="bcb-hide-icon">
            <div slot="header">
                <v-layout row wrap>
                    <v-flex xs4 tag="div" class="mb-0 bcb-title">Time</v-flex>
                    <v-flex xs8 tag="p" class="mb-0 bcb-text">{{`${getMeetingDate(weeklyMeeting)} ${weeklyMeeting.time}`}}</v-flex>
                </v-layout>
            </div>
            <v-card>
                <google-map/>
            </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
                <div slot="header">
                <v-layout row wrap>
                    <v-flex xs4 tag="div" class="mb-0 bcb-title">Location</v-flex>
                    <v-flex xs8 tag="p" class="mb-0 bcb-text" v-html="weeklyMeeting.location"></v-flex>
                </v-layout>
                </div>
                <v-card>
                <google-map :lat="parseFloat(weeklyMeeting.locationLatitude)" :lng="parseFloat(weeklyMeeting.locationLongitude)"/>
                </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
                <div slot="header">
                <v-layout row>
                    <v-flex xs4 tag="div" class="mb-0 bcb-title">Details</v-flex>
                    <!-- <v-subheader xs8 tag="p" class="mb-0 bcb-text" v-html="weeklyMeeting.details"></v-subheader> -->
                </v-layout>
                </div>
                <v-card>
                    <!-- <v-flex xs8 tag="p" class="mb-0 bcb-text bcb-meeting__details" v-html="weeklyMeeting.details"></v-flex> -->
                    <v-card-text class="grey lighten-3 bcb-meeting__details" v-html="weeklyMeeting.details"></v-card-text>
                </v-card>
            </v-expansion-panel-content>
            
            </v-expansion-panel>
        </section>
</template>

<script>
//import gql from 'graphql-tag'
import GoogleMap from "@/components/GoogleMap";

export default {
  name: 'WeeklyMeeting',
  components: {
      GoogleMap,
      weeklyMeetings: [{location: 'temp'}]
  },
  props: [
    'msg',
    'weeklyMeetings',
    'title'
  ],
  methods: {
      getMeetingDate(meeting) {
          if (meeting.data !== undefined) {
            return meeting.date.substring(0, meeting.date.indexOf('T'));
          }

          return '';
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    #weekly-meeting {
        z-index: 10;
        width: 100%;
        animation: accordian-open 1s;
        transform-origin: top;
        animation-delay: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease;
    }

    @media screen and (min-width: 80rem) {
        #weekly-meeting {
            width: 40%;
        }
    }

    .bcb-meeting__details {
        font-family: "Roboto" !important;
        font-size: 14px;
    }



</style>
