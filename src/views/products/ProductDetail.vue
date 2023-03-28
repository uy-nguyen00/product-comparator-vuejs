<template>
  <div v-if="isLoading">
    LOADING
  </div>

  <div v-else>
    <h3>{{ product.formattedTitle }}</h3>
    <div @click="toggleShowProducts">
      <base-button mode="outline">Add to comparison</base-button>
    </div>

    <div v-if="showProducts">
      <select v-model="selectedProduct" @change="compareProduct(selectedProduct)">
        <option v-for="prod in productsToCompare" :key="prod.id" :value="prod">
          {{ prod.formattedTitle }}
        </option>
      </select>

      <section v-if="!comparisonResult">
        LOADING>>>
      </section>

      <base-card v-if="comparisonResult">
        <section>
          <p>Result</p>
          <table>
            <tr>
              <th style="width:50%">Criteria</th>
              <th>{{ product.formattedTitle }}</th>
              <th>{{ selectedProduct.formattedTitle }}</th>
            </tr>
            <tr v-for="(data, criteria) in comparisonResult" :key="criteria">
              <td>{{ criteria }}</td>
              <td>
                <i class="fa fa-remove" v-if="data.value < 1"></i>
                <i class="fa fa-check" v-else></i>

                <p>{{ data.p1 }}</p>
              </td>
              <td>
                <i class="fa fa-check" v-if="data.value <= 1"></i>
                <i class="fa fa-remove" v-else></i>

                <p>{{ data.p2 }}</p>
              </td>

            </tr>
          </table>
        </section>
      </base-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  name: "ProductDetail",
  components: {BaseCard, BaseButton},
  data() {
    return {
      isLoading: true,
      product: {},
      showProducts: false,
      selectedProduct: {},
      comparisonResult: null
    }
  },
  computed: {
    productsToCompare() {
      const prods = this.$store.getters['products/getProducts'].filter(product => product.id !== this.product.id);
      return prods.map(prod => {
        return {...prod, formattedTitle: prod.brand + ' ' + prod.model}
      });
    }
  },
  methods: {
    toggleShowProducts() {
      this.showProducts = !this.showProducts;
    },
    async compareProduct(product) {
      this.comparisonResult = null;
      const result = (await axios.post(`http://localhost:3000/product/${this.product.id}/${product.id}`)).data.result;

      this.comparisonResult = {
        "Price": {
          value: result.price,
          p1: this.product.price + ' €',
          p2: product.price + ' €'
        },
        "Refresh Rate": {
          value: result.refreshRate,
          p1: this.product.refreshRate + ' Hz',
          p2: product.refreshRate + ' Hz'
        },
        "Size": {
          value: result.size,
          p1: this.product.size + ' inches',
          p2: product.size + ' inches'
        },
        "Connectivity": {
          value: result.connectivity,
          p1: this.product.connectivity.toString(),
          p2: product.connectivity.toString()
        }
      };
    },
  },
  async mounted() {
    const product = (await axios.get(`http://localhost:3000/product/${this.$route.params.id}`)).data.product;
    this.product = {...product, formattedTitle: product.brand + ' ' + product.model};
    this.isLoading = false;
  }
}
</script>

<style scoped>
/* Style the table */
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

/* Style table headers and table data */
th, td {
  text-align: center;
  padding: 16px;
}

th:first-child, td:first-child {
  text-align: left;
}

/* Zebra-striped table rows */
tr:nth-child(even) {
  background-color: #f2f2f2
}

.fa-check {
  color: green;
}

.fa-remove {
  color: red;
}
</style>