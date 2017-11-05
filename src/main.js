// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Weather from './components/Weather.vue'
import CryptoCurrencies from './components/CryptoCurrencies.vue'
import Buses from './components/Buses.vue'
import WisdomQuote from './components/WisdomQuote.vue'

import axios from 'axios';

Vue.config.productionTip = false

Vue.component('Weather-view', Weather);
Vue.component('Crypto-view', CryptoCurrencies);
Vue.component('Buses-view', Buses);
Vue.component('WisdomQuote-view', WisdomQuote);

/* eslint-disable no-new */
 new Vue({
   el: '#app',
   router,
   template: '<App/>',
   components: { App }
  //  data: {
	// 	results: []
	// },
  // 	mounted() {
  //     axios.get(`http://jsonplaceholder.typicode.com/posts`)
  //     .then(response => {
  //       // JSON responses are automatically parsed.
  //       this.results = response.data
  //     })
  //     .catch(e => {
  //       this.errors.push(e)
  //     })
  //   }
})
