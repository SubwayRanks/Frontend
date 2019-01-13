import Vue from 'vue';
import VueRouter from 'vue-router';
import Component from 'vue-class-component';
import { spy, assert } from 'sinon';
import { expect } from 'chai';
import { ComponentTest, MockLogger } from '../../../util/component-test';
import { NavbarComponent } from './navbar';
import {MenuItemInfo, MenuItemType} from './menuItemInfo';

let loggerSpy = spy();

@Component({
  template: require('./navbar.vue')
})
class MockNavbarComponent extends NavbarComponent {
  constructor () {
    super();
    this.logger = new MockLogger(loggerSpy);
    this.$store.commit('permissions', ['*', 'guest']);
  }
  async refreshToken() {
    this.$store.commit("permissions", ['*', 'guest']);
  }
}

describe('Navbar component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;

  before(() => {
    Vue.use(VueRouter);
    directiveTest = new ComponentTest('<div><navbar ref="navbar"></navbar><router-view>loading...</router-view></div>', { 'navbar': MockNavbarComponent });

    let homeComponent = { template: '<div class="home">Home</div>' };
    let aboutComponent = { template: '<div class="about">About</div>' };
    let listComponent = { template: '<div class="list">List</div>' };

    router = new VueRouter({
      routes: [
        { path: '/', component: homeComponent },
        { path: '/about', component: aboutComponent },
        { path: '/list', component: listComponent }
      ]
    });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent({ router: router });

    await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
      debugger;
      assert.calledWith(loggerSpy, 'Default object property!');
      // @ts-ignore
      expect(vm.$el.querySelectorAll('.navbar-nav li').length).to.equal(directiveTest.vm.$refs.navbar.permittedLinks.length);
    });
  });

});
