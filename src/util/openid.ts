import {
  BaseProvider,
  IAdapterRequestOptions,
  IAdapterResponse,
  IBaseProviderOptions,
  IProvider
} from '@authllizer/core';

export interface IOpenID2CodeDialogResponse {
  'openid.signed': string;
  'openid.sig': string;
  [key: string]: string;
}

export interface IOpenID2TokenDialogResponse {
  'openid.signed': string;
  'openid.sig': string;
  [key: string]: string;
}


export interface IOpenID2ProviderOptions extends IBaseProviderOptions {
  baseDialogParams?: string[];
  dialogParams?: string[];
  mode?: string;
  realm?: string;
  returnTo?: string;
  authenticateParams?: {
    mode: string,
    realm: string,
    returnTo: string,
    [key: string]: string
  };
}

export class OpenID2Provider extends BaseProvider implements IProvider {

  static extend: (options: IOpenID2ProviderOptions) => typeof OpenID2Provider;
  protected baseDialogParams: string[] = ['mode', 'realm', 'return_to'];
  protected dialogParams?: string[];
  protected realm?: string = 'http://' + window.location.hostname;
  protected returnTo?: string = 'http://' + window.location.host;
  protected mode: string = 'checkid_setup';
  protected authenticateParams: {
    [key: string]: string
  } = {
    'openid.identity': 'id',
  };

  public authenticate<R>(requestOptions: IAdapterRequestOptions): Promise<IAdapterResponse<R>> {
    return this.getPermissions().then((dialogResponse: IOpenID2CodeDialogResponse | IOpenID2TokenDialogResponse) => {
      return this.getAccessToken<R>(dialogResponse, requestOptions);
    });
  }

  protected getPermissions(): Promise<IOpenID2CodeDialogResponse | IOpenID2TokenDialogResponse> {
    let { baseDialogParams, dialogParams } = this;
    let keys = baseDialogParams.concat(dialogParams || []);
    let params: string[] = [
      'openid.ns=http://specs.openid.net/auth/2.0',
      'openid.identity=http://specs.openid.net/auth/2.0/identifier_select',
      'openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select'
    ];

    keys.forEach((key: string) => {
      let camelKey = toCamelCase(key) as keyof this;
      let value: this[keyof this] = this[camelKey];
      if (value !== void 0) { params.push(`openid.${key}=${value}`); }
    });

    let query = params.join('&');
    let url = [this.authorizationEndpoint, query].join('?');

    return this.openDialog<IOpenID2CodeDialogResponse | IOpenID2TokenDialogResponse>(url);
  }

  public getAccessToken<R>(openidData: IOpenID2CodeDialogResponse | IOpenID2TokenDialogResponse, requestOptions: IAdapterRequestOptions): Promise<IAdapterResponse<R>> {
    let { authenticateParams } = this;
    let data = this.prepareData(Object.assign({}, authenticateParams), openidData);
    requestOptions.data = Object.assign(openidData, data || {});
    return this._adapter.request<R>(requestOptions);
  }
}
function toCamelCase(str: string) {
  return str.split('_').map(function(word, index) {
    // If it is the first word make sure to lowercase all the chars.
    if (index === 0) {
      return word.toLowerCase();
    }
    // If it is not the first word only upper case the first char and lowercase the rest.
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}
