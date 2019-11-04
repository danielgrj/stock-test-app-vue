import Vue from 'vue';
import Router from 'vue-router';

import 'bulma/css/bulma.css';
import 'animate.css';

import routes from './routes';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
