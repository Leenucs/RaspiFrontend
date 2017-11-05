<template>
  <div>
    <div class="cryptos">
      <img src="../assets/cryptos/bitcoin.png" height="20" width="20"> {{ bitcoin }} € </br>
      <img src="../assets/cryptos/ether.png" height="20" width="20"> {{ ether }} € </br>
      <img src="../assets/cryptos/stellar.png" height="20" width="20"> {{ stellar }} €
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ether: [],
      bitcoin: [],
      stellar: [],
      errors: []
    }
  },

  created() {
    axios.get(`https://api.cryptonator.com/api/ticker/btc-eur`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.bitcoin = parseFloat(response.data.ticker.price).toFixed(2)
    })
    .catch(e => {
      this.errors.push(e)
    })
    axios.get(`https://api.cryptonator.com/api/ticker/eth-eur`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.ether = parseFloat(response.data.ticker.price).toFixed(2)
    })
    .catch(e => {
      this.errors.push(e)
    })
    axios.get(`https://api.cryptonator.com/api/ticker/xlm-eur`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.stellar = parseFloat(response.data.ticker.price).toFixed(2)
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style>
  .cryptos {
    background-color: blue!important;
  }
