import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import { createMetaManager } from 'vue-meta'
import { createHead } from '@vueuse/head'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
// app.use(createMetaManager())
app.use(createHead())
app.mount('#app')
