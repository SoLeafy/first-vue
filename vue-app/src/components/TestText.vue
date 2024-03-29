<template>
    <div id="test">
        <h1>연습한다.</h1>
        {{ test }}
    </div>
</template>

<script>
export default {
    name:'TestText',
    props:{
        test:String
    }
}
</script>

<style scoped>
    h1{
        background-color: cadetblue;
    }
</style>