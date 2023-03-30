import {createRouter, createWebHistory} from "vue-router";

import ProductsList from "@/views/products/ProductsList.vue";
import ProductDetail from "@/views/products/ProductDetail.vue";
import UserRegistration from "@/views/users/UserRegistration.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: ProductsList},
        {path: '/product/:id', name: 'ProductDetail', component: ProductDetail},
        {path: '/authentication', component: UserRegistration}
    ]
});

export default router;