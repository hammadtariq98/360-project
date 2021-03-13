import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueThreeSixty from 'vue-360';

import 'vue-360/dist/css/style.css'
createApp(App).use(VueThreeSixty)
createApp(App).use(router).mount('#app')
