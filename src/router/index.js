import {createRouter, createWebHistory} from "vue-router";

import ProductsList from "@/views/products/ProductsList.vue";
import ProductDetail from "@/views/products/ProductDetail.vue";
import ProductCreationEdition from "@/views/products/ProductCreationEdition.vue";
import UserRegistration from "@/views/users/UserRegistration.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/products'},
        {path: '/products', component: ProductsList},
        {path: '/product/:id', name: 'ProductDetail', component: ProductDetail},
        {path: '/product/create-update/:id', name: 'ProductCreationEdition', component: ProductCreationEdition},
        {path: '/authentication', name: 'UserRegistration', component: UserRegistration}
    ]
});

export default router;