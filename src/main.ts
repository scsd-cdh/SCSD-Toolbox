import { createApp } from "vue";
import { createWebHistory, createRouter } from 'vue-router'
import App from "./App.vue";
import "./index.css";
import Home from "./pages/Home.vue";
import Buttons from "./pages/Buttons.vue";
import Graphs from "./pages/Graphs.vue";


////// router //////
const routes = [
    { path: '/', component: Home },
    { path: '/Buttons', component: Buttons },
    { path: '/Graphs', component: Graphs }
]
  
const router = createRouter({
    history: createWebHistory(),
    routes : routes
})
////////

createApp(App)
.use(router)
.mount("#app");
