<template>
    <section id="weekly-meeting">
        <v-flex href="#weekly-meeting" tag="h2" class="headline font-weight-medium bcb-meeting__header uppercase mb-1 ">Weekly Meeting</v-flex>
            <v-expansion-panel class="bcb-meeting__detials">
            <v-expansion-panel-content>
                <div slot="header">
                <v-layout row wrap>
                    <v-flex xs4 tag="div" class="mb-0 bcb-title">Location</v-flex>
                    <v-flex xs8 tag="p" class="mb-0 bcb-text" v-html="weeklyMeetings[0].location"></v-flex>
                </v-layout>
                </div>
                <v-card>
                <google-map :lat="parseFloat(weeklyMeetings[0].locationLatitude)" :lng="parseFloat(weeklyMeetings[0].locationLongitude)"/>
                </v-card>
            </v-expansion-panel-content>
                <v-expansion-panel-content readonly class="bcb-hide-icon">
                <div slot="header">
                <v-layout row wrap>
                    <v-flex xs4 tag="div" class="mb-0 bcb-title">Time</v-flex>
                    <v-flex xs8 tag="p" class="mb-0 bcb-text">{{`${getMeetingDate(weeklyMeetings[0])} ${weeklyMeetings[0].time}`}}</v-flex>
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

// For testing purposes, helps limit the amount of api requests
// const weeklyMeetings = [
//     {
//         location: "Campus Center Test",
//         date: "8/19/2018",
//         time: "10am",
//         locationLatitude: 0,
//         locationLongitude: 0
//     }
// ];

// const weeklyMeetings = gql`{
//   weeklyMeetings {
//     location
//     time
//     date
//     locationLatitude
//     locationLongitude
//     updatedAt
//   }
// }`;


export default {
  name: 'WeeklyMeeting',
  data () {},
  components: {
      GoogleMap
  },
  props: {
    msg: String,
    weeklyMeetings: Array,
    title: null
  },
  methods: {
      getMeetingDate(meeting) {
          return meeting.date.substring(0, meeting.date.indexOf('T'));
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    #weekly-meeting {
        z-index: 10;
    }

</style>
