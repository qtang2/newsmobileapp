import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import global styles
import './styles/index.less'

// import vant and its styles
import Vant from 'vant'
import 'vant/lib/index.css'

// dynamically set base rem value
import 'amfe-flexible'

// reg and use vant
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')