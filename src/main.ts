import Vue from 'vue';
import { createRouter } from './router';
import BootstrapVue from 'bootstrap-vue';
import Notifications from 'vue-notification';
import velocity from 'velocity-animate';
import VueAuthllizer, {VueAxiosTokenInterceptor} from '@authllizer/vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import Store, {State} from './util/store';
import './sass/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import {SignUpModal} from './components/page-parts/modals/auth/signUp';
import {SignInModal} from './components/page-parts/modals/auth/signIn';
import {NavbarComponent} from './components/page-parts/navbar';
import PlurVueI18n from './util/i18n';
const navbarComponent = () => import('./components/page-parts/navbar').then(({ NavbarComponent }) => NavbarComponent);
const signInModal = () => import('./components/page-parts/modals/auth/signIn').then(({ SignInModal }) => SignInModal);
const signUpModal = () => import('./components/page-parts/modals/auth/signUp').then(({ SignUpModal }) => SignUpModal);

Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.use(VueAuthllizer, require('./util/auth').default);
Vue.use(BootstrapVue);
Vue.use(PlurVueI18n);
Vue.use(Notifications, {velocity});
Vue.axios.interceptors.request.use(VueAxiosTokenInterceptor);
// tslint:disable-next-line:no-unused-expression
new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'navbar': navbarComponent,
    'sign-in-modal': signInModal,
    'sign-up-modal': signUpModal
  },
  i18n: new PlurVueI18n(require('./i18n').default),
  store: new Vuex.Store<State>(Store)
});
