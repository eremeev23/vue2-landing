import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/global.scss';
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false;
Vue.use(VueCookies, { expires: '5d' });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
