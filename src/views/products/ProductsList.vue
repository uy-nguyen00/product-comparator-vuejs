<template>
  <div v-if="isLoading">
    LOADING
  </div>

  <div v-else>
    <router-link v-for="product in products" :key="product.id" :to="{name: 'ProductDetail', params: {id: product.id}}">
      <base-card>
        <product-item :brand="product.brand"
                      :model="product.model"
                      :size="product.size"
                      :width="product.width"
                      :height="product.height"
                      :refresh-rate="product.refreshRate"
                      :connectivity="product.connectivity"
                      :image="product.image">
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
import axios from "axios";

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
    this.products = (await axios.get('http://localhost:3000/product/all')).data.products;
    this.$store.dispatch('products/setProducts', this.products);
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
  display: flex;
  justify-content: space-between;
}

a, a:active {
  text-decoration: none;
  color: black;
}
</style>