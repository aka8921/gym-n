import '@fortawesome/fontawesome-free/css/all.css'
//import '@fortawesome/fontawesome-free/js/all.js'

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import moment from 'moment'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.moment = moment

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App),
}).$mount('#app')
