<template>
  <h2>{{ title }}</h2>
  <p>{{ size }} inches</p>
  <p>{{ resolution }} pixels</p>
  <p>{{ refreshRate }} Hz</p>
  <p>
    <span v-for="(c, index) in connectivity" :key="index"> {{ c }}, </span>
  </p>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    brand: String,
    model: String,
    size: Number,
    resolution: String,
    refreshRate: Number,
    connectivity: Array
  },
  computed: {
    title() {
      return this.brand + ' ' + this.model;
    }
  }
}
</script>

<style scoped>

</style>