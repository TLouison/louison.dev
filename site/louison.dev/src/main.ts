import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Configure FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
library.add(faGithub, faTwitter, faEnvelope)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
