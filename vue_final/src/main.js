import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import axios from "axios"
import store from './store/store'

const app = createApp(App)
app.config.globalProperties.$axios = axios //전역변수로 설정하기
app.config.globalProperties.$server = "http://172.30.1.59:3000"
app.config.globalProperties.$store = store

app.use(router)
app.use(BootstrapVue3)
app.mount("#app")