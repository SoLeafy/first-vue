<template>
    <div>
        <!-- html 주석 -->
        <h1>vue test입니다.</h1>
        <h2>{{ arr[arr.length-1] }}</h2>
        <h2 v-if="true">if문이 참이면 출력합니다.</h2>
        <h2 v-if="false">if문이 거짓이면 출력합니다.</h2>

        <div v-if="arr[4] == 60">60입니다.</div>
        <div v-else>거짓이면 출력합니다.</div>

        <div v-if="check">참입니다.</div>
        <div v-else>거짓입니다.</div>

        <div v-if="number < arr[0]">10보다 작아요.</div>
    </div>
</template>

<script>
//스크립트
export default {
    name : 'VueTest', 
    data() {
        return {
            check : false,
            number : 5,
            arr : [10, 20, 30, 40, 50]
        }
    }
}
</script>

<style scoped>
/* css 입니다. */

</style>