<template>
  <div>
      <h3>Blocks</h3>
    <div v-bind:key="block.id" v-for="block in blocks" >
    {{block}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockChain',
  props: ["blocks"]

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
