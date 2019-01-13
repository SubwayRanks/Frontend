import { Component, Vue } from 'vue-property-decorator';

import './search.scss';
import {User} from '../../models/user';
import {BaseComponent} from '../component';

@Component({
  template: require('./search.vue'),
})
export class SearchComponent extends BaseComponent {

  query: string = '';
  page: number = 1;
  numberPerPage: number = 25;
  results: object[] = [];
  mounted() {
    this.setMenuActive('search');
  }

  async search (): Promise<void> {
    this.results = (await this.$http.get<SearchResponse>('/api/users', {
      params: {
        name: this.query,
        skip: (this.page - 1) * this.numberPerPage,
        limit: this.numberPerPage,
      }
    })).data.users;
  }
}

interface SearchResponse {
  users: User[];
}
