<template>
    <v-layout column>
        <v-flex href="#weekly-meeting" tag="h2" class="headline font-weight-medium bcb-meeting__header uppercase mb-1 ">Anoucements</v-flex>
        <v-list two-line class="py-0 bcb-anoucements">
            <template v-for="(anoucement, index) in anoucements">
                
                <v-list-tile
                    
                    :key="index"
                    ripple
                    v-on:click="anoucement.dialog = true"
                >
                    <v-list-tile-content>
                        <span class="bcb-anoucement__content">
                            <v-list-tile-title v-html="anoucement.title"></v-list-tile-title>
                            <v-list-tile-sub-title class="text-xs-right" v-html="anoucement.date"></v-list-tile-sub-title>
                        </span>
                        
                        <v-list-tile-sub-title v-html="anoucement.details"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider v-if="index + 1 < anoucements.length" :key="`divider-${index}`"></v-divider>

                <v-layout row justify-center` v-bind:key="`dialog-${index}`">
                    <v-dialog v-model="anoucement.dialog" max-width="290">
                    <v-card>
                        <v-card-title class="headline" v-html="anoucement.title"></v-card-title>
                        <v-card-text  v-html="anoucement.details"></v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click.native="anoucement.dialog = false">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-layout>
            </template>
        </v-list>
    </v-layout>
    
</template>

<script>
import gql from 'graphql-tag'
//const Console = console;

const title = gql`{
  homePages {
    title
  }
}`;

export default {
  name: 'Anoucements',
  data () {
      return {
        anoucements: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Anoucement 1',
            date: "8/18/2018",
            dialog: false,
            details: "The best time ever kjdf a;dld afjdk;ad fkdjfk dfeiofeil dfjd fioewoe fld fe fefsd fkje ofef ef ldjfeopf dfjfejffe f  jdkfjfldkf skdf sklf sdf sd dsfk  "
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ',
            date: "8/18/2018",
            dialog: false,
            details: " Wish I could come, but I'm out of town this weekend."
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'LIRA Choreo Scheduled for Sunday',
            date: "8/18/2018",
            dialog: false,
            details: "Do you have Paris recommendations? Have you ever been?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'LIRA Choreo Scheduled for Sunday',
            date: "8/18/2018",
            dialog: false,
            details: "Do you have Paris recommendations? Have you ever been?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'LIRA Choreo Scheduled for Sunday',
            date: "8/18/2018",
            dialog: false,
            details: "Do you have Paris recommendations? Have you ever been?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'LIRA Choreo Scheduled for Sunday',
            date: "8/18/2018",
            dialog: false,
            details: "Do you have Paris recommendations? Have you ever been?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'LIRA Choreo Scheduled for Sunday',
            date: "8/18/2018",
            dialog: false,
            details: "Do you have Paris recommendations? Have you ever been?"
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'LIRA Choreo Scheduled for Sunday',
            date: "8/18/2018",
            dialog: false,
            details: "Do you have Paris recommendations? Have you ever been?"
          }
        ]
      }
    },
  props: {
    msg: String,
    title: null
  },
  apollo: {
      $loadingKey: 'loading',
      homePages: {
        query: title
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .bcb-anoucements {
        max-height: 270px;
        overflow: auto;
    }

   .application--wrap {
        .bcb-anoucement__content {
            width: 100%;
            display: flex;
            font-family: "Lobster" !important;
        }
   } 

</style>
