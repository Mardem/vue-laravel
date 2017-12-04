<template>
<!--HTML -> Marcação-->

  <div class="row">
    <div class="content-header">
      <h1>Contas bancárias <small>Gerenciamento de contas</small></h1>
      <div class="grey-text">
        <small>
          <a href="#/">iFinance</a> >
          <span>Suas contas</span>
        </small>
      </div>
    </div>
    <div class="card col s12">
      <div class="card-content">
        <table class="highlight">
          <thead>
          <tr>
            <th>contas</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="account in accounts" @click="goTo(account.id)">
            <td class="valign-wrapper">
              Conta &nbsp;<b>{{ account.bank }}</b> &nbsp;
              <small>agência: {{ account.agency }} / conta: {{ account.account }}  / código do banco: {{ account.id }} </small>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="card-action">
        <a href="#/contas/novo">Nova conta</a>
      </div>
    </div>
  </div>
</template>

<script>
  // Javascript -> Comportamento

  export default {
    name: 'accounts',
    methods: {
      goTo: function (id) {
        this.$router.push('/contas/' + id)
      }
    },
    computed: {
      accounts () {
        return this.$store.state.account.accountsList
      }
    },
    created () {
      this.$store.dispatch('getAccounts')
    }
  }
</script>

<style>
  /*CSS -> Aparência*/
  tbody tr {
    cursor: pointer;
  }
</style>