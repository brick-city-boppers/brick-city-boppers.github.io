<template>
    <section id="weekly-meeting" class="bcb-spacer__margin--large">
        <v-flex href="#weekly-meeting" tag="h2" class="headline font-weight-medium bcb-meeting__header uppercase mb-1">Weekly Meeting</v-flex>
            <v-expansion-panel class="bcb-meeting__detials" v-for="(weeklyMeeting, index) in weeklyMeetings" :key='index'>
            <v-expansion-panel-content class="elevation-5">
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
    }

    @media screen and (min-width: 80rem) {
        #weekly-meeting {
            width: 40%;
        }
    }

</style>
