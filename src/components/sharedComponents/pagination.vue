<template>
   <center>
  <ul class="pagination">
    <li class="waves-effect" :class="{active: n == active}" v-for="n in parseInt(total)">
      <a href="" @click.prevent="navigate(n)">{{ n }}</a>
    </li>
  </ul>
  <p>Exibindo página {{ active }} de {{ total }}, total de {{ totalRegistries }} registros.</p>
</center>
</template>

<script>
export default {
  name: 'pagination',
  props: [
    'totalPerPage',
    'resource',
    'file'
  ],
  data: function () {
    return {
      active: 1,
      total: 50,
      totalRegistries: 75
    }
  },
  methods: {
    navigate: function (n) {
      this.active = n
    }
  },
  created () {
    this.$store.dispatch(this.resource)
    console.log(this.file)
  }
}
</script>
