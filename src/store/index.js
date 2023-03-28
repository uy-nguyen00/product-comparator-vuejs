import {createStore} from "vuex";

import productsModules from "@/store/modules/products/index";

const store = createStore({
    modules: {
        products: productsModules
    }
});

export default store;