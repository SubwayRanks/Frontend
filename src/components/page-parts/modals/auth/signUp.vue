<b-modal id="modal-sign-up" size="sm" :hide-footer="true" :hide-header="true" modal-class="modal-sign-up" lazy>
  <b-form @submit.prevent="login">
    <b-form-group :label="$root.$t('layout.auth.signUp.firstName')" label-for="firstName">
      <b-form-input id="firstName"
                    type="text"
                    v-model="user.firstName"
                    required
                    :placeholder="''" />
    </b-form-group>
    <b-form-group :label="$root.$t('layout.auth.signUp.lastName')" label-for="lastName">
      <b-form-input id="lastName"
                    type="text"
                    v-model="user.lastName"
                    required
                    :placeholder="''" />
    </b-form-group>
    <b-form-group :label="$root.$t('layout.auth.signUp.name')" label-for="name">
      <b-form-input id="name"
                    type="text"
                    v-model="user.name"
                    required
                    :placeholder="''" />
    </b-form-group>
    <b-form-group :label="$root.$t('layout.auth.signUp.email')" label-for="email">
      <b-form-input id="email"
                    type="email"
                    v-model="user.email"
                    required
                    :placeholder="''" />
    </b-form-group>
    <b-form-group :label="$root.$t('layout.auth.signUp.login')" label-for="login">
      <b-form-input id="login"
                    type="text"
                    v-model="user.login"
                    required
                    :placeholder="''" />
    </b-form-group>
    <b-form-group :label="$root.$t('layout.auth.signUp.password')" label-for="password">
      <b-form-input id="password"
                    type="password"
                    v-model="user.password"
                    required
                    placeholder="•••••••••••••" />
    </b-form-group>
    <b-form-group :label="$root.$t('layout.auth.signUp.passwordRepeat')" label-for="passwordRepeat">
      <b-form-input id="passwordRepeat"
                    type="password"
                    v-model="user.passwordRepeat"
                    required
                    placeholder="•••••••••••••" />
    </b-form-group>
    <b-form-group>
      <b-btn variant="primary" type="submit" block>
        {{ $root.$t('layout.auth.signUp.signUp') }}
      </b-btn>
    </b-form-group>
    <p class="text-danger text-center" v-if="errorMessage !== null">
      {{errorMessage}}
    </p>
  </b-form>
</b-modal>
