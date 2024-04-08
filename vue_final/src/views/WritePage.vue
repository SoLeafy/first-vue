<template>
    <div class="write">
        <h1>글쓰기</h1>
        <input v-model="title" />
        <textarea v-model="content"></textarea>
        <button @click="write">글쓰기</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "WritePage",
    data() {
        return {
            title: null,
            content: null
        }
    },
    methods: {
        write() {
            let saveData = {}
            saveData.title = this.title
            saveData.content = this.content
            saveData.mno = 1
            axios.post(this.$server+'/write', JSON.stringify(saveData), {
                headers: { "Content-Type": "application/json" }
            }).then((res) => alert("통신결과 : " + res.data.result)
            ).catch((err) => alert('문제가 발생했습니다' + err))
        }
    }
};
</script>
<style>
.write {
    width: 100%;
    height: 500px;
    background-color: rgb(114, 255, 255);
    padding: 10px;
}

.write input {
    width: 100%;
    height: 30px;
    margin-bottom: 5px;
    box-sizing: border-box;
}

.write textarea {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
}
</style>