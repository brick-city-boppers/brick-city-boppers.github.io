<template>
    <v-layout column>
        <v-flex href="#weekly-meeting" tag="h2" class="headline font-weight-medium bcb-meeting__header uppercase mb-1 ">Anoucements</v-flex>
        <v-list two-line class="py-0 bcb-announcements">
            <template v-for="(announcement, index) in announcements">
                
                <v-list-tile
                    
                    :key="index"
                    ripple
                    v-on:click="announcement.dialog = true"
                >
                    <v-list-tile-content>
                        <span class="bcb-announcement__title-date">
                            <v-list-tile-title v-html="announcement.title"></v-list-tile-title>
                            <v-list-tile-sub-title class="text-xs-right" v-html="getAnoucementDate(announcement)"></v-list-tile-sub-title>
                        </span>
                        
                        <v-list-tile-sub-title class="bcb-announcement__details" v-html="announcement.details"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider v-if="index + 1 < announcements.length" :key="`divider-${index}`"></v-divider>

                <v-layout row justify-center` v-bind:key="`dialog-${index}`">
                    <v-dialog v-model="announcement.dialog" max-width="290">
                    <v-card>
                        <v-card-title class="headline" v-html="announcement.title"></v-card-title>
                        <v-card-text  v-html="announcement.details"></v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click.native="announcement.dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-layout>
            </template>
        </v-list>
    </v-layout>
    
</template>

<script>
//import gql from 'graphql-tag'
//const Console = console;


// For testing, so unnessessary api request are not sent
const announcements = [];


// const announcements = gql`{
//   announcements {
//     title
//     details
//     updatedAt
//     dialog
//   }
// }`;




export default {
  name: 'Anoucements',
  data () {
      return {
        announcements: announcements
      }
    },
  props: {
    msg: String,
    title: null
  },
//   apollo: {
//       $loadingKey: 'loading',
//       announcements: announcements
//   },
  computed: {
    announcementsComputed() {
       this.announcements.forEach((announcement) => {
            announcement.dialog = false;
        });
      return this.announcements
    }
  },
  methods: {
      getAnoucementDate(announcement) {
          return announcement.updatedAt.substring(0, announcement.updatedAt.indexOf('T'));
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .bcb-announcements {
        max-height: 270px;
        overflow: auto;
    }

   .application--wrap {
        .bcb-announcement__title-date {
            width: 100%;
            display: flex;
            font-family: "Lobster" !important;
        }
   } 

</style>
