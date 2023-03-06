import { createApp } from 'vue'
import App from './App.vue'
import GlobalA from './components/GlobalComponentA.vue'
import GlobalB from './components/GlobalComponentB.vue'

const app = createApp(App)
app.component("GlobalA", GlobalA)
app.component("GlobalB", GlobalB)
app.mount('#app')