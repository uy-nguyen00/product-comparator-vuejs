<template>
  <div v-if="isLoading">
    LOADING
  </div>

  <div v-else class="grid">
    <router-link v-for="product in products" :key="product.id" :to="{name: 'ProductDetail', params: {id: product.id}}">
      <base-card>
        <product-item :brand="product.brand"
                      :model="product.model"
                      :size="product.size"
                      :width="product.width"
                      :height="product.height"
                      :refresh-rate="product.refreshRate"
                      :connectivity="product.connectivity"
                      :image="product.image"
                      :price="product.price">
        </product-item>
        <div class="controls">
          <base-button mode="outline">action1</base-button>
          <base-button>action2</base-button>
        </div>
      </base-card>
    </router-link>
  </div>
</template>

<script>

import ProductItem from "@/components/products/ProductItem.vue";
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";

export default {
  name: "ProductsListView",
  data() {
    return {
      isLoading: true,
      products: []
    }
  },
  components: {
    BaseButton,
    BaseCard,
    ProductItem
  },
  async mounted() {
    await this.$store.dispatch('products/loadProducts');
    this.products = this.$store.getters['products/getProducts'];
    this.isLoading = false;
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  justify-content: space-between;
  position: absolute;
  bottom: 20px;
}

a, a:active {
  text-decoration: none;
  color: black;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
}
</style>