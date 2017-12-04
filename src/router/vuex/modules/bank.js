import Vue from 'vue'

export default {
  state: {
    bankList: []
  },
  mutations: {
    updateBanktList (state, data) {
      state.bankList = data
    }
  },
  actions: {
    getBanks (context) {
      Vue.http.get('banks?_limit=30').then(response => {
        context.commit('updateBanktList', response.data)
      })
    }
  }
}
