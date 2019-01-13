import {Component, Vue} from 'vue-property-decorator';
import {MenuItemInfo} from './menuItemInfo';

@Component({
  template: require('./menuItem.vue'),
  components: {
    MenuItem
  },
  props: {
    info: {
      type: MenuItemInfo,
      required: true
    }
  }
})
export class MenuItem extends Vue {
  public info?: MenuItemInfo;

  name = 'MenuItem';

  mounted () {
    this.$forceUpdate();
  }
}
