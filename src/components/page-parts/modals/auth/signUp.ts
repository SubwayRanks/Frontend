import {Component, Vue} from 'vue-property-decorator';
import {TranslateResult} from 'vue-i18n';

@Component({
  template: require('./signUp.vue'),
})
export class SignUpModal extends Vue {
  public user: ISignUP = new ISignUP();
  public errorMessage: TranslateResult | null = null;

  mounted () {
  }
  async onSubmit() {
    this.errorMessage = null;
    try {
      await this.$auth.signUp(this.user, true);
      this.$root.$emit('bv::hide::modal', 'modal-sign-up');
    } catch (e) {
      console.log(JSON.stringify(e));
      this.errorMessage = this.$root.$t('layout.auth.signUp.' + e.response.data.message);
    }
  }
}

class ISignUP {
  login: string = '';
  email: string = '';
  name: string = '';
  firstName: string = '';
  lastName: string = '';
  password: string = '';
  passwordRepeat: string = '';
}
