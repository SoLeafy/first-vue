<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>날짜</th>
                    <th>ip</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="n in list" v-bind:key="n.board_no">
                    <td>{{ n.board_no }}</td>
                    <td v-text="n.board_title" v-on:click="detail(n.board_no)"></td>
                    <td>{{ n.mno }}</td>
                    <td>{{ n.board_date }}</td>
                    <td>{{ n.board_ip }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="$router.push('/write')">글쓰기</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'BoardList',
    data() {
        return {
            list: [],
            requestBody: this.$route.query, //route로 보내서 사용하게 추가
            bno: this.$route.query.bno //추가
        }
    },
    methods: {
        detail(bno) {
            //alert('글 번호는 ' + bno);
            this.requestBody.bno = bno
            this.$router.push({path: './detail', query: this.requestBody})
        }
    }, 
    mounted() {
        axios.get('http://172.30.1.59:3000/board')
        .then((res) => {this.list = res.data.list})
        .catch((err) => {alert('문제가 발생했습니다. 다시 시도해주세요.' + err);});
    }
}
</script>