import axios from "axios";

export default {
    setProducts(context, data) {
        context.commit('setProducts', data);
    },
    async loadProducts(context) {
        const products = (await axios.get('http://localhost:3000/product/all')).data.products;
        context.commit('setProducts', products);
    }
};
