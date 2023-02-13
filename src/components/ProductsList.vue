<template>
  <router-link v-for="product in products" :key="product.id" :to="{name: 'ProductDetail', params: {id: product.id}}">
    <product-card :brand="product.brand"
                    :model="product.model"
                    :size="product.size"
                    :resolution="product.resolution"
                    :refresh-rate="product.refreshRate"
                    :connectivity="product.connectivity">
    </product-card>
  </router-link>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductsList",
  props: {
    products: Array
  },
  components: {
    ProductCard
  }
}
</script>

<style scoped>

</style>