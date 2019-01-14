import Vue, { Component } from 'vue';
import { SinonSpy } from 'sinon';
import {merge} from 'lodash';
import { ILogger } from './log';
import BootstrapVue from "bootstrap-vue";
import VueI18n from 'vue-i18n';
import Vuex from 'vuex';
import {State} from './store';
import Store from './store';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueAuthllizer from '@authllizer/vue';

export interface IComponents {
  [key: string]: Component;
}

export class ComponentTest {

  public vm?: Vue;

  constructor (private template: string, private components: IComponents) {
  }

  public createComponent (createOptions?: any): void {
    Vue.use(VueAxios, axios);
    Vue.use(Vuex);
    Vue.use(VueAuthllizer, require('./auth').default);
    Vue.use(BootstrapVue);
    Vue.use(VueI18n);

    let options = {
      created() { console.log('test'); },
      template: this.template,
      components: this.components,
      i18n: new VueI18n(require('../i18n')),
      store: new Vuex.Store<State>(Store)
    };
    if (createOptions) merge(options, createOptions);

    this.vm = new Vue(options).$mount();
  }

  public async execute (callback: (vm: Vue) => Promise<void> | void): Promise<void> {
    await Vue.nextTick();
    await callback(this.vm || new Vue());
  }

}

export class MockLogger implements ILogger {

  constructor (private loggerSpy: SinonSpy) {
  }

  info (msg: any) {
    this.loggerSpy(msg);
  }

  warn (msg: any) {
    this.loggerSpy(msg);
  }

  error (msg: any) {
    this.loggerSpy(msg);
  }
}
