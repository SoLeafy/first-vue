<template>
    <div>
        <div class="board-detail">
            글번호 : {{ detail.board_no }}번글
            <button class="btn btn-primary" v-on:click="del()">삭제</button>
            <button class="btn btn-secondary" v-on:click="up(detail.board_no)">수정</button><br />
            글제목 : {{ detail.board_title }}<br />
            글쓴이 : {{ detail.mno }}<br />
            쓴날짜 : {{ detail.board_date }}<br />
            내 용 : <span v-html="detail.board_content"></span><br />
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        //변수생성
        return {
            requestBody: this.$route.query,
            detail: {
                board_no: this.$route.query.bno,
                board_title: "기본",
                mno: "기본",
                board_content: "기본",
                board_date: "기본"
            }
        };
    },
    mounted() {
        this.boardDetail();
    },
    methods: {
        up(bno) {
            //alert(bno)
            this.requestBody.bno = bno
            this.$router.push({ path: './update', query: this.requestBody })
        },

        del() {
            //alert(bno)
            if (confirm("삭제하시겠습니까?")) {
                axios({
                    url: this.$server + "/del",
                    method: "post",
                    params: { bno: this.detail.board_no }
                }).then((res) => {
                    if (res.data.result == 1) {
                        this.$router.push({ path: "./boardList", query: this.requestBody, });
                    } else {
                        alert('문제가 발생했습니다')
                    }
                }).catch((err) => {
                    alert(err)
                })
            }
        },
        boardDetail() {
            axios.get(this.$server + "/detail?bno=" + this.$route.query.bno)
                .then(res => { this.detail = res.data })
                .catch(err => {
                    alert("문제가 발생했습니다. 잠시 후 다시 시도해주세요." + err);
                });
        }
    }
};
</script>
<style scoped></style>