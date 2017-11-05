<template>
  <div>
    <div v-if="errors.length == 0">
      <p>{{ result.current_condition.tmp }}°C</p>
      {{ result.current_condition.condition }}
    </div>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
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

  created() {
    axios.get(`https://www.prevision-meteo.ch/services/json/lat=47.218371lng=-1.553621000000021`)
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
