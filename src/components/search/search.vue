<b-container class="content">
  <b-row>
    <b-col cols="12" md="10" lg="8" offset-md="1" offset-lg="2">
      <b-form @submit.prevent="search()">
        <b-input-group size="lg">
          <b-form-input :placeholder="$root.$t('routes.search.placeholder')" v-model="query"></b-form-input>
          <b-input-group-append>
            <b-btn variant="primary" type="submit">{{ $root.$t('routes.search.submit') }}</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-form>
    </b-col>
    <b-col cols="12">
      <table class="table table-borderless">
        <tr v-for="u in results">
          <td><b-link :to="'/profile/' + u.id"><img src="..." width="32" height="32" class="rounded float-left" alt="...">{{u.name}}</b-link></td>
        </tr>
      </table>
    </b-col>
  </b-row>
</b-container>
