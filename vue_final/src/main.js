import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.config.globalProperties.$server = "http://172.30.1.59:3000"

app.use(router)
app.use(BootstrapVue3)
app.mount('#app')