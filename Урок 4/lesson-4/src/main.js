import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)
createApp(App).mount('#app')

import 'bootstrap/dist/css/bootstrap.min.css'
