import {createStore} from "vuex";

import productsModules from "@/store/modules/products/index";
import usersModules from "@/store/modules/users/index";

const store = createStore({
    modules: {
        products: productsModules,
        users: usersModules
    }
});

export default store;