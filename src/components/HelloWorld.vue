<template>
  <!-- <div class="hesllo">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div> -->
  <div class="wrapper">
    <div class="one">Un</div>
    <div class="two">Deux</div>
    <div class="three">Trois</div>
    <div class="four">Quatre</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.wrapper {
  max-width: 480px;
  max-height: 320px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #6ec0ff;
  border-radius: 5px;
  background-color: #bae1ff;
  padding: 1em;
  color: white;
  font-weight: bold;
}.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 1;
  grid-row: 1 / 2;
}
.two {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.three {
  grid-column: 3 / 3;
  grid-row: 1 / 2;
}
.four {
  grid-column: 1 / 4;
  grid-row: 2;
}

</style>
