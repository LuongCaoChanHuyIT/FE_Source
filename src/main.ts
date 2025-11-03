import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'
import piniaPersistedState from 'pinia-plugin-persistedstate'
import router from '@/routers'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersistedState)
app.use(pinia)
app.use(router)
app.mount('#app')
