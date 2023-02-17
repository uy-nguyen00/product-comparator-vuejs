import mutations from "@/store/products/mutations";
import actions from "@/store/products/actions";
import getters from "@/store/products/getters";

export default {
    namespaced: true,
    state() {
        return {
            products: []
        }
    },
    mutations,
    actions,
    getters
};