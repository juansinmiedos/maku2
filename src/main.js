import "./scss/index.scss"

import { createApp } from 'vue'
import { createPinia } from "pinia"
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import i18nOptions from "./i18n"
// import { registerPlugins } from "./plugins"

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n(i18nOptions)

// registerPlugins(app)
app.use(router).use(pinia).use(i18n)

app.mount('#app')
