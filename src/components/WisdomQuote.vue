<template>
  <div>
    <div class="quote">
      <p>{{ result.contents.quotes[0].quote }}</p>
    </div>
    <div class="author">
      {{ result.contents.quotes[0].author }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      result: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://quotes.rest/qod.json?category=inspire`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.result = response.data
       })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style>
.quote{
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  color:black;
}
.author{
  color: grey;
  font-size: 11px;
  font-style: italic;
  text-align: right;
}
</style>
