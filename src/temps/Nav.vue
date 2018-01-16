<template>
</template>

<script>

export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    
  },
  mounted: function () {
    // This gets executed on view start
  },
}
</script>

<style lang="scss">

$color-accent: #E6E6FA;
$color-accent2: #67B2E8;

.hb-social-media-btns {
  p {
    a {
      background-color: white;

      &:hover {
        background-color: $color-accent;
      }
    }
  }
}

nav {
  box-shadow: 0 0 4px 0 gray;
}

.navbar {
  z-index: 5;
  min-height: 6.25rem;
  width: 101%;

  .navbar-brand {
    img {
      max-height: 6.25rem;
    }
  }

  .navbar-start {
    a {
      font-size: 2rem;
      margin: 0 20px;

      &:hover {
        color: $color-accent2;
      }
    }
  }
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b982;
}
</style>
