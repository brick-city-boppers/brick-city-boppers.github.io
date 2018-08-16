<template>
  <div class="home">
      <h1>{{homePages[0].title}}</h1>
    <img alt="Vue logo" src="../assets/logo.png">
      <BottomNav></BottomNav>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from '@/components/BottomNav.vue';
import gql from 'graphql-tag';
//const Console = console;

const homePages = gql`{
  homePages {
    title
  }
}`;

export default {
  name: 'home',
  components: {
    BottomNav
  },
  data: () => ({
    loading: 0,
    homePages: null
  }),
  apollo: {
      $loadingKey: 'loading',
      homePages: {
        query: homePages
      }
  }
}
</script>
