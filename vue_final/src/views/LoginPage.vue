<template>
    <div class="login">
        <h1>LOGIN : {{ this.$store.state.mname }}</h1>
        <input 
            v-bind:disabled="check == 1" 
            v-model="id" 
            type="text" 
            ref="id" 
            placeholder="아이디를 입력하세요" />
        <input 
            v-bind:disabled="check == 1" 
            v-model="password" 
            type="password" 
            name="pw" 
            ref="pw"
            placeholder="암호를 입력하세요" />
        <button 
            v-bind:disabled="check == 1" 
            class="btn btn-primary" 
            @click="loginSubmit">
            login
        </button>
        <p class="err">{{ error }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return { error: "", id: null, password: null, check: 0 };
    },
    mounted() {
        // 페이지가 로딩될 때 수행
        if (!this.$store.state.mname) {
            this.error = "로그인해주세요";
            this.$refs.id.focus(); // 포커스 이동
        } else {
            this.error = "이미 로그인 하셨습니다";
        }
    },
    methods: {
        loginSubmit() {
            if (this.id == null) {
                this.error = "올바른 아이디를 입력하세요";
                this.$refs.id.focus();
            } else if (this.password == null) {
                this.error = "올바른 암호를 입력하세요";
                this.$refs.pw.focus();
            } else {
                this.check = 1; // 로그인 버튼을 누르면 더이상 입력하지 못하게 disabled 활성화 하기
                const loginData = {};
                loginData.mid = this.id;
                loginData.mpw = this.password;
                try {
                    this.$axios
                        .post(this.$server + "/login", loginData)
                        .then((res) => {
                            // 로그인 성공시 : {"count":1,"mid":"poseidon","mname":"포세이돈","mno":1}
                            if (res.status === 200) {
                                if (res.data.count == 1) {
                                    this.$store.commit("login", res.data)
                                    this.$router.push("/boardList");
                                } else {
                                    this.error = "올바른 아이디와 암호를 입력하세요ㅜㅜ.";
                                }
                            }
                        })
                        .catch((err) => (this.error = "문제가 발생했습니다." + err));
                } catch (error) {
                    this.error = "로그인 할 수 없습니다." + error;
                }
            }
        },
    },
};
</script>

<style scoped>
.login {
    margin: 0 auto;
    width: 300px;
    height: 300px;
    background-color: gray;
    padding: 10px;
}

.login input,
button {
    border: 0px;
    width: 100%;
    height: 30px;
    padding: 5px;
    margin-bottom: 5px;
    box-sizing: border-box;
}

.err {
    color: red;
}
</style>