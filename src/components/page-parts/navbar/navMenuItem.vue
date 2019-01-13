<b-nav-item v-if="info.children.length === 0 && info.getTypeName() === 'MODAL'" :active="info.active" :key="info.name" v-b-modal="info.path">{{info.name}}</b-nav-item>
<b-nav-item v-else-if="info.children.length === 0 && info.getTypeName() === 'FUNCTIONAL'" :active="info.active" :key="info.name" @click.prevent="info.path">{{info.name}}</b-nav-item>
<b-nav-item v-else-if="info.children.length === 0" :active="true" :key="info.name" :to="info.path" active-class="" exact-active-class="" :class="info.active ? 'active' : undefined">{{info.name}}</b-nav-item>
<b-nav-item-dropdown v-else :text="info.name" :active="info.active" right>
  <menu-item v-for="child in info.children" :key="child.id" :info="child" />
</b-nav-item-dropdown>
