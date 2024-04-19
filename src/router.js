import {createWebHistory,createRouter} from "vue-router";
const routes = [
    {
        path: "/",
        alias: "/products",
        name: "products",
        component: ()=> import("./components/ProductList")
    },
    {
        path: "/about",
        alias: "/about",
        name: "about",
        component: ()=> import("./components/AboutUs")
    },
    {
        path: "/",
        alias: "/cart",
        name: "cart",
        component: ()=> import("./components/CartVue")
    },
    {
        path: "/products/:id",
        name: "product-detay",
        component: ()=> import("./components/ProductDetail")
    },
    {
        path: "/register",
        name: "Register",
        component: ()=> import("./auth/RegisterVue")
    },
    {
        path: "/login",
        name: "Login",
        component: ()=> import("./auth/LoginVue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
