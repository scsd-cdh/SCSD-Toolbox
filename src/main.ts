import { createApp } from "vue";
import { createWebHistory, createRouter } from 'vue-router'
import App from "./App.vue";
import "./index.css";
import Home from "./pages/Home.vue";
import Buttons from "./pages/Buttons.vue";
import Graphs from "./pages/Graphs.vue";

///// fontawesome /////
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faTriangleExclamation, faXmark)
///////



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
.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");
