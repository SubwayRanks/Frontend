<b-modal id="modal-otp" size="sm" :hide-footer="true" :hide-header="true" modal-class="modal-otp" lazy>
  <b-form @submit.prevent="onSubmit">
    <b-form-group>
      <b-form-input id="login"
                    type="text"
                    v-model="otpPassword"
                    required
                    :placeholder="$root.$t('layout.auth.otp.password')" />
    </b-form-group>
    <b-form-group>
      <b-btn variant="primary" type="submit" block>
        {{ $root.$t('layout.auth.otp.submit') }}
      </b-btn>
    </b-form-group>
    <p class="text-danger text-center" v-if="errorMessage !== null">
      {{errorMessage}}
    </p>
  </b-form>
</b-modal>
