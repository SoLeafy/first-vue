<template>
    <div class="update">
        <h1>{{ upData.bno }}번 글 수정하기 / {{ upData.mno }}</h1>
        <input v-model="upData.title" />
        <textarea v-model="upData.content"></textarea>
        <button class="btn btn-primary" @click="up">글수정하기</button>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: "UpdatePage",
    data() {
        return {
            requestBody: this.$route.query,
            upData: {
                title: 1,
                content: 1,
                mno: 1,
                bno: this.$route.query.bno
            },
        }
    },
    mounted() {
        axios.get(this.$server+"/detail?bno=" + this.$route.query.bno)
            .then((res) => {
                this.upData.title = res.data.board_title,
                    this.upData.content = res.data.board_content,
                    this.upData.mno = res.data.mno,
                    this.upData.bno = res.data.board_no
            })
            .catch(err => {
                alert("문제가 발생했습니다. 잠시 후 다시 시도해주세요." + err);
            });
    },
    methods: {
        up() {
            axios.post(this.$server+"/update", this.upData)
                .then(res => {
                    if (res.data.result == 1) { //페이지 이동
                        this.requestBody.bno = this.upData.bno
                        this.$router.push({ path: './detail', query: this.requestBody })
                    } else { // 통신 문제 발생
                        alert("통신결과 : " + res.data.result)
                    }
                })
                .catch(err => alert("문제가 발생했습니다" + err));
        }
    }
};
</script>
<style>
.update {
    width: 100%;
    height: 500px;
    background-color: rgb(114, 255, 255);
    padding: 10px;
}

.update input {
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    box-sizing: border-box;
}

.update textarea {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
}
</style>