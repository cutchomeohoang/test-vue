import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
