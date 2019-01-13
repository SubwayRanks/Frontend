import Vuex, {GetterTree, MutationTree, StoreOptions} from 'vuex';

export interface State {
  permissions: string[];
  navbarActive: string;
}
const mutations: MutationTree<State> = {
  permissions(state: State, permissions: string[]) {
    state.permissions = permissions;
  },
  navbarActive(state: State, active: string) {
    state.navbarActive = active;
  }
};
const getters: GetterTree<State, State> = {
  hasPermission(state: State) {
    return function (permission: string): boolean {
      return state.permissions.some(p => p === permission || (p === '*' && permission !== 'guest' && !/^otp/.test(permission)));
    };
  }
};

const store: StoreOptions<State> = {
  state: {
    permissions: ['guest'],
    navbarActive: ''
  },
  mutations,
  getters
};
export default store;
