<template>
  <products-list :products="products"></products-list>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "ProductsListView",
  data() {
    return {
      products: [
        {
          id: 1,
          brand: "DELL",
          model: "UltraSharp U2722D",
          size: 27,
          resolution: "2560 x 1440",
          refreshRate: 60,
          connectivity: ["HDMI", "USB-C"]
        },
        {
          id: 2,
          brand: "Samsung",
          model: "Odyssey G9",
          size: 48.7,
          resolution: "5120 x 1440",
          refreshRate: 240,
          connectivity: ["HDMI", "Display Port"]
        }
      ]
    }
  },
  components: {
    ProductsList
  }
}
</script>

<style scoped>

</style>