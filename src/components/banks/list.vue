<template lang="html">
  <div class="row">
    <div class="content-header">
      <h1>Bancos <small>Gerenciamento de bancos</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Seus Bancos</span>
        </small>
      </div>
    </div>
    <div class="card col s12">
      <div class="card-content">
        <table class="highlight">
          <thead>
          <tr>
            <th>Banco</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(bank, $index) in banks">
            <td class="valign-wrapper">
              {{ $index + 1}} - {{ bank.name }} ({{ bank.id }})
            </td>
          </tr>
          </tbody>
        </table>
        <pagination totalPerPage="4" resource="getBanks" file="Hello props"></pagination>
      </div>
    </div>
  </div>
</template>


<script>
import Pagination from './../sharedComponents/Pagination'

export default {
  name: 'Banks',
  components: {
    'pagination': Pagination
  },
  computed: {
    banks () {
      return this.$store.state.bank.bankList
    }
  }
}
</script>
