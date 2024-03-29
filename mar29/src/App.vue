<template>
  <div>
    <h1>2024-03-29 실무프로젝트(p-1)</h1>
    <!-- 표 그리기 = 게시판 -->
    <!-- <div v-for="(it, index) in arr" v-bind:key="index">
      <button>{{ index }} : {{ it }}</button>
    </div> -->
    <hr>
    <!-- <a v-for="i in 10" v-bind:key="i">
      {{ i }}
    </a> -->

    <table border="1">
      <tr>
        <th>번호</th>
        <th>제목</th>
        <th>글쓴이</th>
        <th>날짜</th>
        <th>읽음</th>
      </tr>
      <tr v-for="i in items" v-bind:key="i">
        <td v-text="i.boardNo"></td>
        <td>{{ i.title }}</td>
        <td>{{ i.writer }}</td>
        <td>{{ i.date }}</td>
        <td v-text="i.read"></td>
      </tr>
    </table>

  </div>

</template>

<script>


export default {
  name: 'App',
  components: {
  }, 
  data() {
    return {
      arr : [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      items : [
        {boardNo : 10, title : '10번 글입니다', writer: '쟝원영', date: '2024-03-29', read:35},
        {boardNo : 9, title : '9번 글입니다', writer: '민지', date: '2024-03-24', read:30},
        {boardNo : 8, title : '8번 글입니다', writer: '제니', date: '2024-03-23', read:22},
        {boardNo : 7, title : '7번 글입니다', writer: '안유진', date: '2024-03-22', read:19},
        {boardNo : 6, title : '6번 글입니다', writer: '김채원', date: '2024-03-21', read:16},
        {boardNo : 5, title : '5번 글입니다', writer: '하니', date: '2024-03-19', read:28},
        {boardNo : 4, title : '4번 글입니다', writer: '로제', date: '2024-03-18', read:99},
        {boardNo : 3, title : '3번 글입니다', writer: '예나', date: '2024-03-17', read:70},
        {boardNo : 2, title : '2번 글입니다', writer: '류진', date: '2024-03-16', read:5},
        {boardNo : 1, title : '1번 글입니다', writer: '예지', date: '2024-03-15', read:100}
        
      ]
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
