import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Notifications from 'vue-notification'

Vue.use(Notifications)

Vue.use(VueLodash, lodash)
// globally (in your main .js file)
Vue.component('icon', Icon)

// importing style
import style from './assets/sass/main.scss'
new Vue({
  el: '#app',
  router,
  style,
  store,
  render: h => h(App)
})
