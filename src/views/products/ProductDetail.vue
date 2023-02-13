<template>
  <span v-if="isLoaded">Loading</span>
  <div v-else>
    {{ product.brand }}
  </div>
</template>

<script>
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https://productcomparator-a082.restdb.io/rest/',
  headers: {
    'cache-control': 'no-cache',
    'x-apikey': '65b115cbca07970e6d0079ebf747d26ad5fac',
    'content-type': 'application/json'
  },
  json: true
});
const collection = 'products';

export default {
  name: "ProductDetail",
  data() {
    return {
      isLoaded: false,
      product: {}
    }
  },
  async mounted() {
    this.product = await axiosInstance.get(collection + `?q={"id":"${this.$router.params.id}"}`);
    this.isLoaded = true;
  }
}
</script>

<style scoped>

</style>