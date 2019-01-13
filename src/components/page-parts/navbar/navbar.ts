import {Component, Vue, Watch} from 'vue-property-decorator';
import {MenuItemInfo, MenuItemType} from './menuItemInfo';
import {Logger} from '../../../util/log';
import {NavMenuItem} from './navMenuitem';

@Component({
  template: require('./navbar.vue'),

  components: {
    NavMenuItem
  }
})
export class NavbarComponent extends Vue {

  object: { default: string } = { default: 'Default object property!' };
  tokenRefreshing: boolean = false;
  public links: MenuItemInfo[] = [];
  get permittedLinks () {
    return this.links.filter(link => this.canSee(link));
  }

  protected logger: Logger;
  constructor() {
    super();
    this.logger = new Logger();
  }

  // @Watch('$route.path')
  // pathChanged () {
  //   this.logger.info('Changed current path to: ' + this.$route.path);
  // }

  @Watch('$store.state.navbarActive')
  activeChanged () {
    this.links.forEach(link => link.setActive(this.$store.state.navbarActive));
  }

  @Watch('$i18n.locale')
  languageChanged () {
    this.links = [
      new MenuItemInfo('home', this.$root.$t('layout.navbar.home'), '/'),
      new MenuItemInfo('search', this.$root.$t('layout.navbar.search'), '/search'),
      new MenuItemInfo('account', this.$root.$t('layout.navbar.account'), '/account', undefined, ['authenticated']),
      new MenuItemInfo('signIn', this.$root.$t('layout.navbar.signIn'), 'modal-sign-in', MenuItemType.MODAL, ['guest']),
      new MenuItemInfo('signUp', this.$root.$t('layout.navbar.signUp'), 'modal-sign-up', MenuItemType.MODAL, ['guest']),
      new MenuItemInfo('signOut', this.$root.$t('layout.navbar.signOut'), this.signOut, MenuItemType.FUNCTIONAL, ['authenticated']),
      new MenuItemInfo('i18n', this.$i18n.locale, '/search').withChildren([
        new MenuItemInfo('ru', 'ru', this.changeLocale('ru'), MenuItemType.FUNCTIONAL),
        new MenuItemInfo('en', 'en', this.changeLocale('en'), MenuItemType.FUNCTIONAL)
      ])
    ];
  }

  @Watch('$route.path')
  async refreshToken () {
    if (this.tokenRefreshing) {
      return;
    }
    this.tokenRefreshing = true;
    this.$auth.onChange.remove(this.refreshToken);
    try {
      this.$store.commit('permissions', (<IRefresh> await this.$auth.refresh()).permissions);
    } catch (e) {
      this.$store.commit('permissions', ['guest']);
    }
    this.$root.$forceUpdate();
    this.$auth.onChange.on(this.refreshToken);
    this.tokenRefreshing = false;
  }

  async auth () {
    try {
      await this.$auth.authenticate('steam');
    } catch (e) {
      console.error(e);
    }
  }

  mounted () {
    if (!this.logger) this.logger = new Logger();
    this.$nextTick(() => this.logger.info(this.object.default));
    // this.$auth.onChange.on(this.refreshToken);
    this.refreshToken().then();
    this.activeChanged();
    this.languageChanged();
  }

  canSee (item: MenuItemInfo): boolean {
    return item.permissions.every(i => this.$store.getters.hasPermission(i));
  }

  changeLocale (l: string) {
    let self = this;
    return () => { self.$i18n.locale = l; window.localStorage.setItem('locale', l); };
  }

  async signOut () {
    await this.$auth.signOut();
    this.$root.$forceUpdate();
  }
}

interface IRefresh {
  permissions: string[];
}
