import {Component} from 'vue-property-decorator';
import {MenuItem} from './menuitem';

@Component({
  template: require('./navMenuItem.vue'),
  components: {
    MenuItem
  }
})
export class NavMenuItem extends MenuItem {
  name = 'NavMenuItem';
}
