import { Component } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';

import './account.scss';
import {User} from '../../models/user';
import {BaseComponent} from '../component';
import {AxiosError} from 'axios';

@Component({
  template: require('./account.vue'),
  components: {
    datepicker: Datepicker,
  }
})
export class AccountComponent extends BaseComponent {
  user?: User;
  loaded: boolean = false;
  password: string = '';
  passwordRepeat: string = '';
  passwordOld: string = '';
  passwordOTP: string = '';
  imageOTP: string = '';
  async mounted () {
    await this.refreshProfile();
    this.$store.commit('navbarActive', 'account');
  }
  async refreshProfile () {
    this.user = (await this.$http.get<{user: User}>('/api/auth/me')).data.user;
    this.$forceUpdate();
    this.loaded = true;
  }
  async linkSteam () {
    await this.$auth.link('steam');
    await this.refreshProfile();
  }
  async showOTPDialog () {
    if (!this.$store.getters.hasPermission('otpEnabled')) {
      this.imageOTP = (await this.$http.post('/api/auth/otp/qr')).data.image;
    }
    this.$root.$emit('bv::show::modal', 'modal-otp-setup');
  }
  async submitOTPForm () {
    if (this.$store.getters.hasPermission('otpEnabled')) {
      try {
        this.imageOTP = (await this.$http.post('/api/auth/otp/qr', { otp: this.passwordOTP })).data.image;
      } catch (e) {
        this.$notify({
          title: this.$root.$t('routes.account.failTitle') as string,
          text: this.$root.$t('routes.account.' +  e.response.data.message) as string,
          type: 'error',
        });
      }
      return;
    }
    await this.$http.post('/api/auth/otp', { otp: this.passwordOTP });
    this.$notify({
      title: this.$root.$t('routes.account.successTitle') as string,
      text: this.$root.$t('routes.account.otpLinkSuccess') as string,
      type: 'success',
    });
    await this.$auth.refresh({ otp: this.passwordOTP });
    this.$root.$emit('bv::hide::modal', 'modal-otp-setup');
    this.$root.$forceUpdate();
  }
  async removeOTP () {
    try {
      await this.$http.delete('/api/auth/otp', { params: { otp: this.passwordOTP } });
      this.$notify({
        title: this.$root.$t('routes.account.successTitle') as string,
        text: this.$root.$t('routes.account.otpUnlinkSuccess') as string,
        type: 'success',
      });
      await this.$auth.refresh({ otp: this.passwordOTP });
      this.$root.$emit('bv::hide::modal', 'modal-otp-setup');
      this.$root.$forceUpdate();
    } catch (e) {
      this.$notify({
        title: this.$root.$t('routes.account.failTitle') as string,
        text: this.$root.$t('routes.account.' +  e.response.data.message) as string,
        type: 'error',
      });
    }
    return;
  }
  async changePassword () {
    if (this.passwordRepeat !== this.password) {
      this.$notify({
        title: this.$root.$t('routes.account.failTitle') as string,
        text: this.$root.$t('routes.account.passwordsNotMatch') as string,
        type: 'error',
      });
      return;
    }
    try {
      this.user = (await this.$http.put<{user: User}>('/api/auth/me', {
        newPassword: this.password, password: this.passwordOld
      })).data.user;
      this.$root.$emit('bv::hide::modal', 'modal-passwd');
      this.$forceUpdate();
    } catch (e) {
      this.$notify({
        title: this.$root.$t('routes.account.failTitle') as string,
        text: this.$root.$t('routes.account.' +  e.response.data.message) as string,
        type: 'error',
      });
    }
  }
  async changeProfile () {
    try {
      this.user = (await this.$http.put<{user: User}>('/api/auth/me', this.user)).data.user;
      this.$root.$emit('bv::hide::modal', 'modal-profile');
      this.$notify({
        title: this.$root.$t('routes.account.successTitle') as string,
        text: this.$root.$t('routes.account.profileSuccess') as string,
        type: 'success',
      });
      this.$forceUpdate();
    } catch (e) {
      this.$notify({
        title: this.$root.$t('routes.account.failTitle') as string,
        text: this.$root.$t('routes.account.' +  e.response.data.message) as string,
        type: 'error',
      });
    }
  }
}
