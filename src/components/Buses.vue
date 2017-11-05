<template>
  <div>
    {{result[0]}}
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
    axios.get(`http://open.tan.fr/ewp/tempsattente.json/PCRE`)
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
