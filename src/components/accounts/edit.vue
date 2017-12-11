<script>
  export default {
    name: 'accounts-edit',
    data: function () {
      return {
        sub_title: 'Editando conta'
      }
    },
    template: require('./edit.html'),

    computed: {
      showData () {
        return this.$store.state.account.accountView
      }
    },
    created () {
      this.$store.dispatch('getAccount', this.$route.params.id)
    },
    methods: {
      save () {
        this.$store.dispatch('updateAccount', this.showData).then(() => {
          this.$router.push('/contas')
        })
      }
    }
  }
</script>