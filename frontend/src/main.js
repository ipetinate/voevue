import Vue from 'vue'
// Plugins
import './plugins/vuetify'
// Application
import App from './App.vue'
// Router
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
