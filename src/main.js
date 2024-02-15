import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(VueGtag, {
    config: { id: "G-7MN862MB30" }
});

app.mount('#app');
