<template>
  <base-card>
    <product-form @save-product="saveProduct" :mode="mode"></product-form>
    <base-spinner v-if="isLoading"></base-spinner>
  </base-card>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard.vue";
import ProductForm from "@/components/products/ProductForm.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

export default {
  name: "ProductCreationEdition",
  components: {BaseSpinner, ProductForm, BaseCard},
  data() {
    return {
      isLoading: false,
      mode: null
    }
  },
  methods: {
    async saveProduct(data) {
      this.isLoading = true;

      data.mode = this.mode;
      data.id = this.$route.params.id;
      await this.$store.dispatch('products/saveProduct', data);

      this.$router.replace('/products');
    }
  },
  created() {
    if (this.$route.params.id === 'new') {
      this.mode = 'create';
    } else {
      this.mode = 'update';
    }
  }
}
</script>

<style scoped>

</style>