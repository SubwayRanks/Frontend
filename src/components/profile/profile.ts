import { Component } from 'vue-property-decorator';

import './profile.scss';
import {User} from '../../models/user';
import {BaseComponent} from '../component';

@Component({
  template: require('./profile.vue'),
})
export class ProfileComponent extends BaseComponent {
  user?: User;
  loaded: boolean = false;
  async mounted () {
    this.user = (await this.$http.get<User>('/api/users/' + this.$route.params.id)).data;
    this.loaded = true;
    this.$store.commit('navbarActive', '');
  }
}
