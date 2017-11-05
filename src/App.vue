
<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- <ul v-if="posts && results.length">

  </ul> -->

  <div class="wrapper">
    <Weather-view class="one"></Weather-view>
    <Crypto-view class="two"></Crypto-view>
    <Buses-view class="three"></Buses-view>
    <WisdomQuote-view class="four"></WisdomQuote-view>
  </div>

  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: black;
}

</style>
