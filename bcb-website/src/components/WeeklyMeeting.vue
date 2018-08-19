<template>
    <section id="weekly-meeting">
        <v-flex href="#weekly-meeting" tag="h2" class="headline font-weight-medium bcb-meeting__header uppercase mb-1 ">Weekly Meeting</v-flex>
            <v-expansion-panel class="bcb-meeting__detials">
            <v-expansion-panel-content>
                <div slot="header">
                <v-layout row wrap>
                    <v-flex xs4 tag="div" class="mb-0 bcb-title">Location</v-flex>
                    <v-flex xs8 tag="p" class="mb-0 bcb-text">Campus Center 2061</v-flex>
                </v-layout>
                </div>
                <v-card>
                <google-map/>
                </v-card>
            </v-expansion-panel-content>
                <v-expansion-panel-content readonly class="bcb-hide-icon">
                <div slot="header">
                <v-layout row wrap>
                    <v-flex xs4 tag="div" class="mb-0 bcb-title">Time</v-flex>
                    <v-flex xs8 tag="p" class="mb-0 bcb-text">8:00pm EST</v-flex>
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
import gql from 'graphql-tag'
import GoogleMap from "@/components/GoogleMap";

const announcements = gql`{
  announcements {
    title
    details
    updatedAt
  }
}`;


export default {
  name: 'WeeklyMeeting',
  data () {
      return {
        announcements: announcements
      }
    },
  components: {
      GoogleMap
  },
  props: {
    msg: String,
    title: null
  },
  apollo: {
      $loadingKey: 'loading',
      announcements: announcements
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    #weekly-meeting {
        z-index: 10;
    }

</style>
