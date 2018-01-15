<template>
  <section>
    <navi></navi>
    <router-view></router-view>
  </section>
</template>

<script>
import Nav from './temps/Nav.vue';

export default {
  name: 'app',
  components: {
    'navi': Nav
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

