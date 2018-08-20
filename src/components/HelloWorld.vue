<template>
  <div class="hello">
    <h1>{{ title }}</h1>
  </div>
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
  name: 'HelloWorld',
  props: {
    msg: String,
    title: null
  },
  apollo: {
      $loadingKey: 'loading',
      homePages: {
        query: title
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
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
