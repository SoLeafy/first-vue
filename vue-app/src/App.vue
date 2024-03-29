<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TestText test="연습해본다."/>
  <HelloWorld msg="안녕 vue"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestText from './components/TestText.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestText
  }
}
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
