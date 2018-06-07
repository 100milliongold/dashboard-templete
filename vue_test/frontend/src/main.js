// core
import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import 'expose-loader?$!expose-loader?jQuery!jquery'

// css
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'tooltip.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee , faTh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee,faTh)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
