import {Vue} from 'vue-property-decorator';
import {en, ru, uk} from 'vuejs-datepicker/dist/locale';

export class BaseComponent extends Vue {
  datepickerLangs = {
    ru, en, ua: uk
  };
  setMenuActive (key: string) {
    setTimeout(() => this.$store.commit('navbarActive', key), 88);
  }
  matchPattern (s: string, p: RegExp): boolean | null {
    if (!s) {
      return null;
    }
    return p.exec(s) !== null && null;
  }
  notMatchPattern (s: string, p: RegExp) {
    if (!s) {
      return null;
    }
    return p.exec(s) === null;
  }
}
