<template>
  <div>
    <button @click="play('siren.mp3')">사이렌</button>
    카운트 : {{ count }}
    <button v-on:click="countClick">클릭해보세요</button>
    <button v-on:click="up">up</button>
    <button v-on:click="down">down</button>
    <button v-on:click="reset">reset</button>
    <DivCopy></DivCopy>
    <DivCopy></DivCopy>
    <DivCopy></DivCopy>
  </div>
</template>
<script>
import DivCopy from './components/DivCopy.vue';

export default {
  name: 'App',
  components: {
    DivCopy
  },
  data : function() {
    return {
      count : 1
    }
  },
  methods: {
    up() {
      this.count++
    },
    down() {
      this.count--
    },
    reset() {
      this.count = 0;
    },

    countClick() {
      this.count += 1;
    },

    play(mp3) {
      let audio = new Audio(mp3);
      audio.play();
    }
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
