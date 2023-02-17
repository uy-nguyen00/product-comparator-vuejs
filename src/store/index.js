import {createStore} from "vuex";

import productsModules from "@/store/products/index";

const store = createStore({
    modules: {
        products: productsModules
    }
});

export default store;