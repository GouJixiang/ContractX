import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import './index.css'
import { setupStore } from './store'
import { setupNaive } from './plugins'

async function setupApp() {

    const app = createApp(App)
    
    // store plugin: pinia
    setupStore(app)

    // router
    setupRouter(app)

    // naive
    setupNaive(app)

    app.mount('#app')
}

setupApp()
