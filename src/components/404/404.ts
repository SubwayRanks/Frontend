import { Component } from 'vue-property-decorator';

import './404.scss';
import {BaseComponent} from '../component';

@Component({
  template: require('./404.vue'),
})
export class NotFoundComponent extends BaseComponent {

}
