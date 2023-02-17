import {createRouter, createWebHistory} from "vue-router";

import ProductsList from "@/views/products/ProductsList.vue";
import ProductDetail from "@/views/products/ProductDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: ProductsList},
        {path: '/product/:id', name: 'ProductDetail', component: ProductDetail}
    ]
});

export default router;