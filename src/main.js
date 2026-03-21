import "./scss/index.scss"

import { createApp } from 'vue'
import { createPinia } from "pinia"
import App from './App.vue'
import router from './router'
import { registerPlugins } from "./plugins"

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)
app.use(router).use(pinia)

app.mount('#app')
