<template>
  <div>
    <img :src="image" :alt="model"/>
    <h3>{{ title }}</h3>
    <h4>{{ resolution }} pixels</h4>
    <p>{{ size }} inches</p>
    <p>{{ refreshRate }} Hz</p>
    <p>
      <span v-for="(c, index) in connectivity" :key="index"> {{ c }}, </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    brand: String,
    model: String,
    size: Number,
    width: Number,
    height: Number,
    refreshRate: Number,
    connectivity: Array,
    image: String
  },
  computed: {
    title() {
      return this.brand + ' ' + this.model;
    },
    resolution() {
      return this.width + ' x ' + this.height
    }
  }
}
</script>

<style scoped>
div {
  margin: 1rem 0;
  /*border: 1px solid #424242;*/
  /*border-radius: 12px;*/
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>