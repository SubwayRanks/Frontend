import {Component, Vue} from 'vue-property-decorator';
import {TranslateResult} from 'vue-i18n';

@Component({
  template: require('./signIn.vue'),
})
export class SignInModal extends Vue {
  public user: IAuth = new IAuth();
  public errorMessage: TranslateResult | null = null;
  public loginFocused: boolean = false;

  mounted () {
  }
  async login() {
    this.errorMessage = null;
    try {
      await this.$auth.signIn(this.user);
      this.$root.$emit('bv::hide::modal', 'modal-sign-in');
    } catch (e) {
      console.log(JSON.stringify(e));
      this.errorMessage = this.$root.$t('layout.auth.signIn.' + e.response.data.message);
    }
  }
  async loginSteam() {
    this.errorMessage = null;
    try {
      await this.$auth.authenticate('steam');
      this.$root.$emit('bv::hide::modal', 'modal-sign-in');
    } catch (e) {
      this.errorMessage = this.$root.$t('layout.auth.signIn.' + e.response.data.message);
    }
  }
}

class IAuth {
  login: string = '';
  password: string = '';
}
