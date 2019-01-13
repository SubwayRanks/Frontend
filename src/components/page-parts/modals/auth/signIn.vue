<b-modal id="modal-sign-in" size="sm" :hide-footer="true" :hide-header="true" modal-class="modal-sign-in" lazy>
  <b-form @submit.prevent="login">
    <b-form-group>
      <b-form-input id="login"
                    type="text"
                    v-model="user.login"
                    required
                    @focus="loginFocused = true"
                    @blur="loginFocused = false"
                    :placeholder="$root.$t('layout.auth.signIn.login')" />
    </b-form-group>
    <b-form-group>
      <b-input-group>
        <b-form-input id="password"
                      type="password"
                      v-model="user.password"
                      required
                      v-if="loginFocused || user.login"
                      :placeholder="$root.$t('layout.auth.signIn.password')" />
        <b-input-group-append v-if="user.password && user.login">
          <b-btn variant="success" type="submit">{{ $root.$t('layout.auth.signIn.signIn') }}</b-btn>
        </b-input-group-append>
        <b-btn variant="primary" @click="loginSteam" v-if="!loginFocused && !user.login" block>
          <i class="fab fa-steam-symbol"></i> {{ $root.$t('layout.auth.signIn.steam') }}
        </b-btn>
      </b-input-group>
    </b-form-group>
    <p class="text-danger text-center" v-if="errorMessage !== null">
      {{errorMessage}}
    </p>
  </b-form>
</b-modal>
