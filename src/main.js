import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** BootstrapVue */
import BootstrapVue from 'bootstrap-vue'

/**elimminar para dar estilos propios*/
/*import 'bootstrap/dist/css/bootstrap.css' */
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
