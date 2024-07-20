import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import "./index.css";
import Home from "./pages/Home.vue";
import Buttons from "./pages/Buttons.vue";
import Badges from "./pages/Badges.vue";
import Tables from "./pages/Tables.vue";


////// router //////
const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: "/", component: Home },
        { path: "/Buttons", component: Buttons },
        { path: "/Badges", component: Badges },
        { path: "/Tables", component: Tables },
    ],
    linkActiveClass: "active",
})
////////

createApp(App)
.use(router)
.mount("#app");
