import { Component } from 'vue-property-decorator';

import './home.scss';
import {BaseComponent} from '../component';

@Component({
  template: require('./home.vue'),
})
export class HomeComponent extends BaseComponent {

  mounted() {
    this.$store.commit('navbarActive', 'home');
  }

}
