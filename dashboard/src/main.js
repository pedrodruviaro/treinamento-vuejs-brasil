import '@/assets/css/tailwind.css'
import '@/assets/css/fonts.css'
import 'animate.css'
import 'vue-toastification/dist/index.css'

import Toast, { POSITION } from 'vue-toastification'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast, { position: POSITION.BOTTOM_RIGHT })

app.mount('#app')
