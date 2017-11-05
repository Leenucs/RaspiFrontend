<template>
  <div>
    <p>{{ result.current_condition.tmp }}°C</p>
    {{ result.current_condition.condition }}
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
