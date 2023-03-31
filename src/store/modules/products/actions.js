import axios from "axios";

export default {
    setProducts(context, data) {
        context.commit('setProducts', data);
    },
    async loadProducts(context) {
        const products = (await axios.get('http://localhost:3000/product/all')).data.products;
        context.commit('setProducts', products);

        let lastId = 0;
        products.forEach(prod => lastId = prod.id > lastId ? prod.id : lastId);
        context.commit('setLastId', lastId);
        console.log(lastId);
    },
    async saveProduct(context, data) {
        let id;
        if (data.mode === 'create') {
            id = context.rootGetters["products/getLastId"] + 1;
        } else {
            id = data.id;
        }

        await axios.post(`http://localhost:3000/product/${id}/create-update`, data);

        context.commit('addProduct', data);
    },
};
