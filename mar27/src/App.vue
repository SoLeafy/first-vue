<template>
  <div>
    <h1>연습중</h1>
    이름 : {{ name }}<br> <!-- 머스타치 -->
    이름 : <span v-text="name"></span> <br>
    이름 : <span v-html="name + '<br>' + '같이 사용합니다'"></span>
    나이 : {{ human.age }}<br>
    사는 곳 : {{ human.addr }}<br>
    <div v-bind:id="test">없어도 됩니다</div>
    <div v-bind:class="test">없어도됨</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}, 
  data(){
    return{
      //jsx
      test : 'test1',
      name : '김채원',
      human : {name : '쟝원영', age : 38, addr: '한양'}
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
