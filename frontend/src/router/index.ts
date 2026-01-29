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
    },
    {
        path: "/product/:id",
        name: "ProductDetails",
        component: () => import("../views/ProductDetails.vue"),
    },
    {
        path: "/aboutus",
        name: "AboutUs",
        component: () => import("../views/AboutUS.vue"),
    },
    {
        path: "/contactus",
        name: "ContactUs",
        component: () => import("../views/ContactUs.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router