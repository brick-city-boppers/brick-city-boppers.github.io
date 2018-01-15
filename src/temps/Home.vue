<template>
  <section id="app-body">
    <div class="columns">
      <a href="#/events" class="column level hb-home-events">
        <h1 class="title is-1">
          <a href="#/events">Events</a>
        </h1>
        
      </a>
      <a href="#/learn" class="column hb-home-learn">
        <h1 class="title is-1">
          <a href="#/learn">Learn</a>
        </h1>
      </a>
      <a href="#/volunteer" class="column hb-home-volunteer">
        <h1 class="title is-1">
          <a href="#/volunteer">Volunteer</a>
        </h1>
      </a>
    </div>
    </section>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

  body {
    font-family: 'Oswald', sans-serif;
  }

  @mixin tint {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all .2s linear;
  }

  #app-body {
    padding-top: 12px;

    .columns {
     height: 90vh;
     min-height: 90vh;

      .level {
        margin-bottom: 0;
        overflow: hidden;
      }

      .column {
        position: relative;
        cursor: pointer;
        width: 100%;
        padding: 0;
        background-position-y: -150px;
        background-repeat: no-repeat;
        

        .level-item {
          height: 100%;
        }

        a {
          display: inline;
          width: 100%;
          position: absolute;
          text-align: center;
          top: 40%;
          color: rgb(223, 223, 223);

        }

        &:hover a {
          color: white;
        }
     
     }

     .hb-home-events {
        background-image: url('../assets/event.png');
        height: 100%;

        &:hover:before {
          @include tint;
          background: rgba(38, 0, 255, 0.1);
        }
      }

      .hb-home-learn {
          background-image: url('../assets/learn.png');
          height: 100%;

        &:hover:before {
          @include tint;
          background: rgba(144, 44, 172, 0.1);
        }
      }

      .hb-home-volunteer {
          background-image: url('../assets/volunteer.png');
          height: 100%;

        &:hover:before {
          @include tint;
          background: rgba(109, 22, 58, 0.1);
        }
      }


    @media screen and (max-width: 1200px) {
      .column {
        width: 100%;
        height: 200px;
        background-position-y: -200px;
      }
    }
  }
  }
    
</style>