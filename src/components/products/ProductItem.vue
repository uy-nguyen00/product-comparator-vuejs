<template>
  <div>
    <img :src="image" :alt="model" class="center"/>
    <h4>{{ title }}</h4>

    <base-badge :price="price"></base-badge>

    <p>{{ size }} inches</p>

    <p>{{ resolution }} pixels</p>

    <p>{{ refreshRate }} Hz</p>

    <p>{{ connectivity.toString() }}</p>
  </div>
</template>

<script>
import BaseBadge from "@/components/ui/BaseBadge.vue";
import textHelper from "@/script/textHelper"

export default {
  name: "ProductCard",
  components: {BaseBadge},
  props: {
    brand: String,
    model: String,
    size: Number,
    width: Number,
    height: Number,
    refreshRate: Number,
    connectivity: Array,
    image: String,
    price: Number
  },
  computed: {
    title() {
      return this.brand + ' ' + this.model;
    },
    resolution() {
      return textHelper.calculateResolution(this.width, this.height);
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

h4 {
  margin: 0.5rem 0;
  text-align: center;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

img {
  width: 80%;
  height: 30%;
  display: block;
}

.center {
  margin: auto;
}
</style>