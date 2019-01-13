<b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand href="#">SubwayRanks.SU</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav class="ml-auto">
      <nav-menu-item v-for="link in permittedLinks" :key="link.id" :info="link" />
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
