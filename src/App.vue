<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   
    <BlockChain v-bind:blocks="blocks" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import BlockChain from './components/BlockChain.vue';

import Test from './test.js';
const test = new Test();
const data = test.getData();
console.log("Test data: ", data )

export default {
  name: 'App',
  components: {
    HelloWorld,
    BlockChain
  },
  data() {
    return {
    blocks: [
      {
        "id": "Genesis"
      },
      {
        "id": "Block One"
      }
    ]
    }//end return
  }//end data
}//end export
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
