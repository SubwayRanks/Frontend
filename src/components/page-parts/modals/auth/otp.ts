import {Component, Vue} from 'vue-property-decorator';
import {TranslateResult} from 'vue-i18n';

@Component({
  template: require('./otp.vue'),
})
export class OTPModal extends Vue {
  public otpPassword: string = '';
  public errorMessage: TranslateResult | null = null;

  mounted () {
  }
  async onSubmit() {
    this.errorMessage = null;
    try {
      await this.$auth.refresh({ otp: this.otpPassword });
      this.$root.$emit('bv::hide::modal', 'modal-otp');
    } catch (e) {
      console.log(JSON.stringify(e));
      this.errorMessage = this.$root.$t('layout.auth.otp.' + e.response.data.message);
    }
  }
}
