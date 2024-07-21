import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Buttons from "../pages/Buttons.vue";
import Badges from "../pages/Badges.vue";
import Tables from "../pages/Tables.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/Buttons", component: Buttons },
    { path: "/Badges", component: Badges },
    { path: "/Tables", component: Tables },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
});

export default router;