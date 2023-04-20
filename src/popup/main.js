import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './Popup.vue'
import axios from 'axios'

const app = createApp(App).use(createPinia())
app.mount('#app')

console.log(axios)
