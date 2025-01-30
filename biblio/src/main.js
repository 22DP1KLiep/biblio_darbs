// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HomeView from './views/HomeView.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
