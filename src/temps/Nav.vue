<template>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="#/">
      <img src="../assets/logo.png" alt="Head 2 Bed Icon" width="112" height="28">
    </a>
    <div class="navbar-burger burger" data-target="navbar-mobile">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbar-mobile" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/events" class="navbar-item">
        Events
      </router-link>
      <router-link  to="/learn" class="navbar-item">
        Learn
      </router-link>
      <router-link to="/volunteer" class="navbar-item">
        Volunteer
      </router-link>
    </div>

    <div class="navbar-end is-desktop">
      <div class="navbar-item">
        <div class="field is-grouped hb-social-media-btns">
          <p class="control">
            <a class="bd-tw-button button" href="https://twitter.com/">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button" href="https://twitter.com/">
              <span class="icon">
                <i class="fa fa-facebook"></i>
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button" href="https://twitter.com/">
              <span class="icon">
                <i class="fa fa-instagram"></i>
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button" href="https://twitter.com/">
              <span class="icon">
                <i class="fa fa-youtube"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>

</nav>
</template>

<script>


let mobileTrigger = function() {
  document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
}


export default {
  name: 'nav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    mobileTrigger: mobileTrigger
  },
  mounted: function () {
    this.mobileTrigger();
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
  color: #42b983;
}
</style>
