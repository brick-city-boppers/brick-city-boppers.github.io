<template>
    <section class="bcb-announcements__wrapper">
        <v-flex href="#weekly-meeting" tag="h2" class="headline font-weight-medium bcb-meeting__header uppercase mb-1 ">Anoucements</v-flex>
        <v-list two-line class="py-0 bcb-announcements elevation-5">

            <template v-if="announcementDialogs.length > 0" v-for="(announcement, index) in announcements">
                
                <v-list-tile
                    
                    :key="index"
                    ripple
                    v-on:click="announcementDialogs[index].dialog = true"
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
                    <v-dialog v-model="announcementDialogs[index].dialog" max-width="290">
                    <v-card>
                        <v-card-title class="headline" v-html="announcement.title"></v-card-title>
                        <v-card-text  v-html="announcement.details"></v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click.native="announcementDialogs[index].dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-layout>
            </template>
        </v-list>
    </section>
    
</template>

<script>
export default {
  name: 'Announcement',
  data: function() {
    return {
        announcementDialogs: this.initAnnouncementDialogs(),
        dialog: false 
    }
  },
  props: {
    'announcements': {
        default: []
    },
    'msg': String,
    'title': String
  },
  computed: {},
//   watch: {
//       annoucements: function(newVal) {
//           this.announcementDialogs = this.initAnnouncementDialogs(newVal);
//       }
//   },
  methods: {
      getAnoucementDate(announcement) {
          if (announcement.updatedAt !== undefined) {
            return announcement.updatedAt.substring(0, announcement.updatedAt.indexOf('T'));
          }

          return '';
      },
      initAnnouncementDialogs() {
          
          let dialogs = [];
          for(let a of this.announcements) {
              dialogs.push({dialog: a === undefined});
          }
          return dialogs;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .bcb-announcements__wrapper {
        max-width: 100%;
        z-index: 10;
    }

    .bcb-announcements {
        position: relative;
        max-height: 270px;
        max-width: 100%;
        overflow: auto;
    }

    @media screen and (min-width: 80rem) {
        .bcb-announcements__wrapper {
            max-width: 40%;
        }
    }

   .application--wrap {
        .bcb-announcement__title-date {
            width: 100%;
            display: flex;
            font-family: "Lobster" !important;
        }
   } 

</style>
