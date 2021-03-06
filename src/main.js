import Vue from 'vue';
import AwesomeTable from 'AwesomeTable';
import axios from 'axios';
import Snotify, { SnotifyPosition } from 'vue-snotify';
import VueAxios from 'vue-axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleNotch, faInfoCircle, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'AwesomeTable/dist/awesome-table.css';
import 'vue-snotify/styles/material.css';
import App from './App.vue';
import router from './router';
import { version } from '../package.json';

Vue.use(VueAxios, axios);
Vue.use(Snotify, {
  toast: {
    position: SnotifyPosition.rightTop,
    showProgressBar: true,
    timeout: 5000,
  },
});

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('awesome-table', AwesomeTable);

library.add(
  fasStar,
  farStar,
  faInfoCircle,
  faCircleNotch,
);

Vue.config.productionTip = false;

new Vue({
  router,
  data: { version },
  render: h => h(App),
}).$mount('#app');
