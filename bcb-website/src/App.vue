<template>
  <v-app>
    <!-- <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar> -->
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>


<style lang='scss'>

.application--wrap {
  /* background: -moz-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); /* ff3.6+ */
  /* background: -webkit-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); safari5.1+,chrome10+ */
  /* background: -o-radial-gradient(center, ellipse cover, #8C5EFF 0%, #000000 100%); opera 11.10+ */
  /* background: radial-gradient(ellipse at center, #8C5EFF 0%, #000000 100%); w3c */

  /* background: radial-gradient(ellipse at bottom, rgba(168,169,224,1) 0%,rgba(33,19,73,1) 100%); W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background: linear-gradient(180deg, #5900BF 0%, #5900BF 1%, #EDE1F0 100%); /* w3c */


  .bcb-top {
    margin-top: 70px;
  }
  .bcb-heading {
    position: relative;
    z-index: 10;
    color: #FFFEFE;
  }

  .bcb-home__headline {
    font-family: 'Lobster', cursive !important;
  }

  .bcb-home__sub-headline {
    font-family: "Nunito Sans" !important;
  }

  .bcb-hero {
    position: absolute;
    z-index: 0;
    max-height: 600px;
    width: 100%;
    top: 0;
    left: 0;
  }

  .bcb-meeting__header {
    letter-spacing: 1px !important;
    font-size: 1.6rem !important;
  }

  .bcb-meeting__detials {
    font-family: "Lobster" !important;
    font-size: 1.1rem !important;
  }

  .bcb-text {
    font-family: "Roboto" !important;
  }

  /* .bcb-meeting__detials {
    display: flex;
    justify-content: left;
  } */

  .uppercase {
    text-transform: uppercase;
  }

  .bcb-container {
    padding: 5% 5%;
  }

  .bcb-hide-icon i {
      visibility: hidden;
  }

  .bcb-spacer--med {
    height: 40px;
  }

  .bcb-spacer--large {
    height: 100px;
  }

  .bcb-section {
    margin-bottom: 30px;
  }

}

</style>
