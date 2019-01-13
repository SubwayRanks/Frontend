import { expect } from 'chai';
import { NotFoundComponent } from './404';
import { ComponentTest } from '../../util/component-test';

describe('404 component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><home></home></div>', { 'home': NotFoundComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => {
      debugger;
      expect((vm.$el.querySelector('.code') || new Element()).textContent).to.equal(`404`);
    });
  });
});
