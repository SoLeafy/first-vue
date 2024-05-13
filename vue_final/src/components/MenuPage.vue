<template>
    <header>
        <nav class="nav">
            <ul>
                <li><router-link to="/">index</router-link></li>
                <li><router-link to="/boardList">게시판</router-link></li>
                <li v-if="userInfo == null">
                    <router-link to="/login">로그인</router-link>
                </li>
                <li v-if="userInfo != null">
                    <router-link to="/loginout">{{ userInfo }}님</router-link>
                </li>
                <li v-if="userInfo != null" v-on:click="logout">로그아웃</li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: "MenuPage",
    data() {
        return {
            userInfo: null
        }
    },
    mounted() { // 페이지가 로딩될 때 수행
        if (!this.$store.state.mname) {
            this.userInfo = null
        } else {
            this.userInfo = this.$store.state.mname
        }
    },
    methods: {
        logout() {
            if (confirm('로그아웃하시겠습니까?')) {
                this.$store.logout
            }
        }
    },
};
</script>
<style>
a:link {color: black; text-decoration: none;}
a:visited {color: black; text-decoration: none;}
header {height: 50px;}
nav {position: fixed; top: 0;width: 100%;height: 30px;
background-color: gray;}
nav ul {margin: 0;padding: 0;}
nav li {list-style: none;float: left;width: 100px;height: 30px;
line-height: 30px;text-align: center;}
nav li:hover {font-weight: bold; background-color: aqua;}
</style>