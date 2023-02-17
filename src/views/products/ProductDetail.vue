<template>
  <div v-if="isLoading">
    LOADING
  </div>

  <div v-else>
    {{ product.brand }} {{ product.model }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      isLoading: true,
      product: {}
    }
  },
  async mounted() {
    this.product = (await axios.get(`http://localhost:3000/product/${this.$route.params.id}`)).data.product;
    this.isLoading = false;
  }
}
</script>

<style scoped>

</style>