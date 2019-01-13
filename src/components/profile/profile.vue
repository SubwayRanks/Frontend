<b-container class="content">
  <b-row v-if="loaded">
    <b-col>
      <h2 class="text-left">
        <strong>
          {{ user.firstName }} &laquo;<span class="text-primary">{{ user.name }}</span>&raquo; {{ user.lastName }}
        </strong>
      </h2>
      <h5 v-if="user.age">
        {{ $root.$tc('routes.profile.yearsOld', user.age) }}
      </h5>
    </b-col>
  </b-row>
</b-container>
