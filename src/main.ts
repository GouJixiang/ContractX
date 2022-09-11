import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import './index.css'
import { setupStore } from './store'
import { setupNaive } from './plugins'
import { setupIcons } from './plugins/xicons/ index'

async function setupApp() {

    const app = createApp(App)
    
    // store plugin: pinia
    setupStore(app)

    // router
    setupRouter(app)

    // naive
    setupNaive(app)

    // xicons
    setupIcons(app)

    app.mount('#app')
}

setupApp()
