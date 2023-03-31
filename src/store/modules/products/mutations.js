export default {
    setProducts(state, payload) {
        state.products = payload;
    },
    addProduct(state, payload) {
        state.products.push(payload);
    },
    setLastId(state, payload) {
        state.lastId = payload;
    }
};