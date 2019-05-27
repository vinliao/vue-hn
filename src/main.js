import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import { routes } from './routes'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

// for some reason, vuetify can only be
// imported here
import './plugins/vuetify'

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
