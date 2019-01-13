import {TranslateResult} from 'vue-i18n';

export class MenuItemInfo {
  id?: string;
  name: TranslateResult;
  path?: string | Function;
  permissions: string[];
  type: MenuItemType;
  active: boolean = false;
  hideCaret: boolean = false;
  children: MenuItemInfo[] = [];

  constructor (id: string, name: TranslateResult, path: string | Function, type: MenuItemType = MenuItemType.LINK, permissions: string[] = [], hideCaret: boolean = false) {
    if (type === MenuItemType.FUNCTIONAL && typeof path !== 'function') {
      throw new TypeError("path must be a function");
    }
    this.id = id;
    this.name = name;
    this.path = path;
    this.type = type;
    this.permissions = permissions;
    this.hideCaret = hideCaret;
  }

  public withChildren (children: MenuItemInfo[]): MenuItemInfo {
    this.children = children;
    return this;
  }

  public isActive (): boolean {
    return this.active === true || this.children.some(child => child.isActive());
  }

  public setActive (id: string): void {
    this.active = id === this.id;
    this.children.forEach(value => {
      value.setActive(id);
    });
  }

  public getTypeName (): string {
    return MenuItemType[this.type];
  }
}

export enum MenuItemType {
  LINK, MODAL, FUNCTIONAL
}
