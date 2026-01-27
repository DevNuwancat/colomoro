import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/all-products",
        name: "AllProducts",
        component: () => import("../views/AllProducts.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router