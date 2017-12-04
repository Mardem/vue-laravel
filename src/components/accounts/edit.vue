<script>
  export default {
    name: 'accounts-edit',
    data: function () {
      return {
        sub_title: 'Editando conta',
        updated: {
        }
      }
    },
    template: require('./edit.html'),
    methods: {
      save () {
        this.$store.dispatch('updateAccount', this.updated).then(() => {
          // this.$router.push('/contas')
        })
      }
    },
    computed: {
      showData () {
        return this.$store.state.account.accountView
      }
    },
    created () {
      this.$store.dispatch('getAccount', this.$route.params.id)
    }
  }
</script>