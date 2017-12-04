import Vue from 'vue'

export default {
  state: {
    accountsList: [],
    accountView: {}
  },
  mutations: {
    updateAccountList (state, data) {
      state.accountsList = data
    },
    updateAccountView (state, data) {
      state.accountView = data
    }
  },
  actions: {
    getAccounts (context) {
      Vue.http.get('accounts').then(response => {
        context.commit('updateAccountList', response.data)
      })
    },
    getAccount (context, id) {
      Vue.http.get('accounts/' + id).then(response => {
        context.commit('updateAccountView', response.data)
      })
    },
    newAccount (context, data) {
      Vue.http.post('accounts', data)
    },
    updateAccount (context, params) {
      // Vue.http.put('accounts/' + params.id, params.data)
      console.log(params)
    },
    removeAccount (context, id) {
      Vue.http.delete('accounts/' + id)
    }
  }
}
