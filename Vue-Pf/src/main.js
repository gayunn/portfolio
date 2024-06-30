import Vue from 'vue'
import portfolio from './index.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(portfolio),
}).$mount('#app')
