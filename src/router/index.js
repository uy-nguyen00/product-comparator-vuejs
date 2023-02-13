import {createRouter, createWebHistory} from "vue-router";

import ProductsListView from "@/views/products/ProductsListView.vue";
import ProductDetail from "@/views/products/ProductDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: ProductsListView},
        {path: '/product/:id', name: 'ProductDetail', component: ProductDetail}
    ]
});

export default router;