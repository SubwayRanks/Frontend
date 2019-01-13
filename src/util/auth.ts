import {VueAxiosHttpClient} from '@authllizer/vue';
import {BackendAdapter, BrowserDialog, IAuthllizerOptions, JWT, LocalStorage} from '@authllizer/core';
import {OpenID2Provider} from './openid';

export default {
  httpClient: new VueAxiosHttpClient,
  adapter: BackendAdapter.extend({
    baseUrl: '/api/auth',
    signUp: '/signup',
    signIn: '/login',
  //  signOut: '/logout',
  }),
  dialog: BrowserDialog,
  interceptList: ['/api/'],
  providers: {
  steam: OpenID2Provider.extend({
    displayOptions: {width: 990, height: 615},
    authorizationEndpoint: 'https://steamcommunity.com/openid/login',
  }),
},
  storage: new LocalStorage(),
    token: JWT
} as IAuthllizerOptions;
