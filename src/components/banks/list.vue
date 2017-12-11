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
          <tr v-for="bank in banks">
            <td class="valign-wrapper">
              {{ bank.name }} - {{ bank.id }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: 'Banks',
    computed: {
        
    }
}
</script>
