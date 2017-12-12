<template>
   <center>
  <ul class="pagination">
    <li class="waves-effect">
      <a href="">1</a>
    </li>
    <li class="active waves-effect">
      <a href="">2</a>
    </li>
    <li class="waves-effect">
      <a href="">3</a>
    </li>
    <li class="waves-effect">
      <a href="">4</a>
    </li>
    <li class="waves-effect">
      <a href="">5</a>
    </li>
  </ul>
  <p>Exibindo página 2 de 5, total de 85 registros.</p>
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
  created () {
    this.$store.dispatch(this.resource)
    console.log(this.file)
  }
}
</script>
