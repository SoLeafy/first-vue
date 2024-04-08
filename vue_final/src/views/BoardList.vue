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
        <link href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" rel="stylesheet" />
        <div class="paging">
            <button v-bind:disabled="this.pageNo == 1" v-on:click="board(1)">
                <i class="xi-fast-backward"></i></button>
            <button v-bind:disabled="this.pageNo - 10 < 1" v-on:click="board(this.pageNo - 10)">
                <i class="xi-step-backward"></i></button>
            <button v-bind:disabled="this.pageNo - 1 < 1" v-on:click="board(this.pageNo - 1)">
                <i class="xi-arrow-left"></i></button>
            <button v-for="i in pageList" :key="i" v-on:click="board(i)">{{ i
                }}</button>
            <button v-bind:disabled="this.pageNo + 1 > this.totalPage" v-on:click="board(this.pageNo + 1)">
                <i class="xi-arrow-right"></i>
            </button>
            <button v-bind:disabled="this.pageNo + 10 > this.totalPage" v-on:click="board(this.pageNo + 10)">
                <i class="xi-step-forward"></i></button>
            <button v-bind:disabled="this.pageNo == this.totalPage" v-on:click="board(this.totalPage)">
                <i class="xi-fast-forward"></i></button>
        </div>
        <button @click="$router.push('/write')">글쓰기</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'BoardList',
    data() {
        return {
            list: [], pageList: [],
            requestBody: this.$route.query, //route로 보내서 사용하게 추가
            bno: this.$route.query.bno, //추가
            totalcount: null, totalPage: null, startPage: null, endPage: null,
        }
    },
    methods: {
        paging(totalcount) { // 페이징 관련 일을 여기에서 처리합니다.
            this.totalcount = totalcount;
            this.totalPage = Math.ceil(this.totalcount / 10);
            this.startPage =
                this.pageNo / 11 > 0 ? parseInt(this.pageNo / 11) * 10 + 1 : 1;
            this.endPage =
                this.startPage + 10 > this.totalPage ? (this.totalPage + 10) % 10 : 10;
            this.pageList = [];
            for (let i = 0; i < this.endPage; i++) {
                this.pageList[i] = this.startPage + i;
            }
        },
        board(pageNo) {
            this.requestBody.pageNo = pageNo;
            axios.get("http://172.30.1.59:3000/board", { params: this.requestBody })
                .then(res => {
                    this.list = res.data.list;
                    this.pageNo = res.data.pageNo;
                    this.paging(res.data.totalcount);
                }).catch(err => { alert("문제가 발생했습니다." + err); });
        },
        detail(bno) {
            //alert('글 번호는 ' + bno);
            this.requestBody.bno = bno
            this.$router.push({ path: './detail', query: this.requestBody })
        }
    },
    mounted() {
        axios.get(this.$server + "/board")
            .then((res) => {
                this.list = res.data.list;
                this.pageNo = res.data.pageNo;
                this.paging(res.data.totalcount);
            })
            .catch((err) => { alert('문제가 발생했습니다. 다시 시도해주세요.' + err); });
    }
}
</script>
<style>
.paging {
    width: 100%;
    height: 30px;
    text-align: center;
}
</style>