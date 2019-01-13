<div>
  <b-container class="content" v-if="loaded">
    <h2 class="text-center">
      <strong>
        {{ $root.$t('routes.account.title') }}
      </strong>
    </h2>
    <b-row>
      <b-col md="4" align="right">{{ $root.$t('routes.account.name') }}</b-col>
      <b-col md="8">{{ user.name }}</b-col>
    </b-row>
    <b-row>
      <b-col md="4" align="right">{{ $root.$t('routes.account.firstName') }}</b-col>
      <b-col md="8">{{ user.firstName }}</b-col>
    </b-row>
    <b-row>
      <b-col md="4" align="right">{{ $root.$t('routes.account.lastName') }}</b-col>
      <b-col md="8">{{ user.lastName }}</b-col>
    </b-row>
    <b-row>
      <b-col md="4" align="right">{{ $root.$t('routes.account.login') }}</b-col>
      <b-col md="8">{{ user.login }}</b-col>
    </b-row>
    <b-row>
      <b-col md="4" align="right">{{ $root.$t('routes.account.email') }}</b-col>
      <b-col md="8">{{ user.email }}</b-col>
    </b-row>
    <b-row>
      <b-col md="4" align="right">{{ $root.$t('routes.account.birthDate') }}</b-col>
      <b-col md="8">
        {{ user.birthDate ? ($root.$d(user.birthDate, 'short') + $root.$tc('routes.account.yearsOld', user.age)) : $root.$t('routes.account.notSet') }}
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4" align="right">{{ $root.$t('routes.account.steamID') }}</b-col>
      <b-col md="4">
        <b-btn variant="primary" size="sm" @click="linkSteam()" v-if="!user.steamID">
          <i class="fab fa-steam-symbol"></i> {{ $root.$t('routes.account.linkSteam') }}
        </b-btn>
        <b-link v-else :href="'https://steamcommunity.com/profiles/' + user.steamID" target="_blank">
          <i class="fab fa-steam-symbol"></i> {{ user.steamID }}
        </b-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6" offset-md="3">
        <b-btn-group style="width: 100%; margin-bottom: 5px;">
          <b-btn variant="success" size="sm" v-b-modal="'modal-profile'">
            <i class="fa fa-pencil-alt"></i> {{ $root.$t('routes.account.profile') }}
          </b-btn>
          <b-btn variant="warning" size="sm" v-b-modal="'modal-passwd'">
            <i class="fa fa-key"></i> {{ $root.$t('routes.account.passwd') }}
          </b-btn>
          <b-btn variant="danger" size="sm">
            <i class="fa fa-lock"></i> {{ $root.$t('routes.account.updateEmail') }}
          </b-btn>
        </b-btn-group>
        <b-btn variant="outline-danger" size="sm" block class="text-left" @click="showOTPDialog">
          <i class="fa fa-lock"></i> {{ $root.$t('routes.account.otp' + ($store.getters.hasPermission('otpEnabled') ? 'Options' : 'Setup')) }}
        </b-btn>
      </b-col>
    </b-row>
  </b-container>
  <b-modal id="modal-passwd" size="sm" :hide-footer="true" :hide-header="true" modal-class="modal-passwd" lazy>
    <b-form @submit.prevent="changePassword">
      <b-form-group>
        <b-form-input id="passwordOld"
                      type="password"
                      v-model="passwordOld"
                      required
                      :placeholder="$root.$t('routes.account.passwordOld')" />
      </b-form-group>
      <b-form-group>
        <b-form-input id="password"
                      type="password"
                      v-model="password"
                      required
                      :placeholder="$root.$t('routes.account.password')" />
      </b-form-group>
      <b-form-group>
        <b-form-input id="passwordRepeat"
                      type="password"
                      v-model="passwordRepeat"
                      required
                      :placeholder="$root.$t('routes.account.passwordRepeat')" />
      </b-form-group>
      <b-form-group>
        <b-btn variant="primary" type="submit" block>
          {{ $root.$t('routes.account.passwdSubmit') }}
        </b-btn>
      </b-form-group>
    </b-form>
  </b-modal>
  <b-modal id="modal-otp-setup" size="sm" :hide-footer="true" :hide-header="true" modal-class="modal-passwd" lazy>
    <b-form @submit.prevent="submitOTPForm">
      <b-form-group v-if="imageOTP !== undefined" class="text-center">
        <img :src="imageOTP" alt="OTP QR-code" />
      </b-form-group>
      <b-form-group>
        <b-form-input id="passwordOTP"
                      v-model="passwordOTP"
                      required
                      :placeholder="$root.$t('routes.account.passwordOTP')" />
      </b-form-group>
      <b-form-group>
        <b-btn-group style="width: 100%">
          <b-btn variant="primary" type="submit">
            {{ $root.$t('routes.account.otpSubmit') }}
          </b-btn>
          <b-btn variant="danger" @click="removeOTP" v-if="$store.getters.hasPermission('otpEnabled')">
            {{ $root.$t('routes.account.removeOTP') }}
          </b-btn>
        </b-btn-group>
      </b-form-group>
    </b-form>
  </b-modal>
  <b-modal id="modal-profile" v-if="loaded" size="sm" :hide-footer="true" :hide-header="true" modal-class="modal-sign-up" lazy>
    <b-form @submit.prevent="changeProfile">
      <b-form-group :label="$root.$t('routes.account.firstName')" label-for="firstName">
        <b-form-input id="firstName"
                      type="text"
                      v-model="user.firstName"
                      required
                      :placeholder="''" />
      </b-form-group>
      <b-form-group :label="$root.$t('routes.account.lastName')" label-for="lastName">
        <b-form-input id="lastName"
                      type="text"
                      v-model="user.lastName"
                      required
                      :placeholder="''" />
      </b-form-group>
      <b-form-group :label="$root.$t('routes.account.name')" label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="user.name"
                      required
                      :placeholder="''" />
      </b-form-group>
      <b-form-group :label="$root.$t('routes.account.birthDate')" label-for="name">
        <datepicker id="birthDate"
                    :monday-first="true"
                    v-model="user.birthDate"
                    :language="datepickerLangs[$i18n.locale]"
                    :bootstrap-styling="true"
                    :disabled-dates="{ from: new Date() }"
                    :placeholder="$root.$t('routes.account.birthDatePlaceholder')" />
      </b-form-group>
      <b-form-group>
        <b-btn variant="primary" type="submit" block>
          {{ $root.$t('routes.account.changeProfile') }}
        </b-btn>
      </b-form-group>
    </b-form>
  </b-modal>
</div>
