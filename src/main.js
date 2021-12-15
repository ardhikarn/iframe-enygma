import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueIframe from 'vue-iframes'

Vue.use(VueIframe)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
