import Vue from 'vue'
import App from './App.vue'
import { 
  BootstrapVue, 
  IconsPlugin,
  LayoutPlugin,
  BContainer ,
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router.js'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use('b-container',BContainer)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
