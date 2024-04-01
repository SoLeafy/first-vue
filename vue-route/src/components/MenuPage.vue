<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/">index</router-link></li> <!-- IndexPage.vue -->
                <li><router-link to="/boardList">게시판</router-link></li> <!-- BoardList.vue -->
                <li><router-link to="/main">메인페이지</router-link></li> <!-- MainPage.vue -->
                <li><router-link to="/login">로그인</router-link></li> <!-- LoginPage.vue -->
                <li><router-link to="/join">가입페이지</router-link></li> <!-- JoinPage.vue -->
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MenuPage'
}
</script>
<style scoped>
/* nav를 fixed로 하였기 때문에 높이를 높여 영역을 확보하게 합니다 */
header {
    height: 50px;
}

nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: gray;
}

nav ul {
    margin: 0;
    padding: 0;
}

nav li {
    list-style: none;
    float: left;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}

nav li:hover {
    font-weight: bold;
}

a {
    text-decoration: none;
    color: white
}

.lir {
    float: right;
    width: 80px;
}
</style>