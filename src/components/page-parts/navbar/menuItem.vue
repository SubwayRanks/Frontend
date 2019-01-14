<b-dropdown-item v-if="info.children.length === 0 && info.getTypeName() === 'MODAL'" :key="info.name" v-b-modal="info.path" :active="info.active"><span v-html="info.name"></span></b-dropdown-item>
<b-dropdown-item v-else-if="info.children.length === 0 && info.getTypeName() === 'FUNCTIONAL'" :key="info.name" @click.prevent="info.path" :active="info.active"><span v-html="info.name"></span></b-dropdown-item>
<b-dropdown-item v-else-if="info.children.length === 0 || true" :key="info.name" :to="info.path" :active="info.active"><span v-html="info.name"></span></b-dropdown-item>
<b-nav-item-dropdown v-else :text="info.name" right>
  <menu-item v-for="child in info.children" :key="child.id" :info="child" />
</b-nav-item-dropdown>
