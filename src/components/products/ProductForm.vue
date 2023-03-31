<template>
  <base-spinner v-if="isLoading"></base-spinner>

  <h4 v-if="!isLoading">{{ formCaption }}</h4>

  <form v-if="!isLoading" @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !brand.isValid}">
      <label for="brand">Brand</label>

      <input type="text" id="brand" v-model.trim="brand.val" @blur="clearValidity('brand')"/>

      <p v-if="!brand.isValid">Brand must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !model.isValid}">
      <label for="model">Model</label>

      <input type="text" id="model" v-model.trim="model.val" @blur="clearValidity('model')"/>

      <p v-if="!model.isValid">Model must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !size.isValid}">
      <label for="size">Size</label>

      <input type="number" step="0.1" id="size" v-model.trim="size.val" @blur="clearValidity('size')"/>

      <p v-if="!size.isValid">Size must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !width.isValid}">
      <label for="width">Width</label>

      <input type="number" id="width" v-model.trim="width.val" @blur="clearValidity('width')"/>

      <p v-if="!width.isValid">Width must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !height.isValid}">
      <label for="height">Height</label>

      <input type="number" id="height" v-model.trim="height.val" @blur="clearValidity('height')"/>

      <p v-if="!height.isValid">Height must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !refreshRate.isValid}">
      <label for="refresh-rate">Refresh Rate</label>

      <input type="number" step="0.1" id="refresh-rate" v-model.trim="refreshRate.val" @blur="clearValidity('refreshRate')"/>

      <p v-if="!refreshRate.isValid">Refresh Rate must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !connectivity.isValid}">
      <h3>Connectivity</h3>

      <div>
        <input
            type="checkbox"
            id="vga"
            value="VGA"
            v-model="connectivity.val"
            @blur="clearValidity('connectivity')"
        />
        <label for="frontend">VGA</label>
      </div>

      <div>
        <input
            type="checkbox"
            id="hdmi"
            value="HDMI"
            v-model="connectivity.val"
            @blur="clearValidity('connectivity')"
        />
        <label for="backend">HDMI</label>
      </div>

      <div>
        <input
            type="checkbox"
            id="displayport"
            value="Display Port"
            v-model="connectivity.val"
            @blur="clearValidity('connectivity')"
        />
        <label for="career">Display Port</label>
      </div>

      <div>
        <input
            type="checkbox"
            id="usbc"
            value="USB-C"
            v-model="connectivity.val"
            @blur="clearValidity('connectivity')"
        />
        <label for="career">USB-C</label>
      </div>

      <p v-if="!connectivity.isValid">At least one must be selected.</p>
    </div>

    <div class="form-control" :class="{invalid: !image.isValid}">
      <label for="image">Image Link</label>

      <input type="url" id="image" v-model.trim="image.val"
             @blur="clearValidity('image')"/>

      <p v-if="!image.isValid">Image Link must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !price.isValid}">
      <label for="price">Price</label>

      <input type="number" id="price" v-model.trim="price.val"
             @blur="clearValidity('price')"/>

      <p v-if="!price.isValid">Price must not be empty.</p>
    </div>

    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>

    <base-button>{{ formCaption }}</base-button>
    <base-button type="button" mode="flat">Test</base-button>
  </form>
</template>

<script>
import axios from "axios";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

export default {
  name: "ProductForm",
  components: {BaseSpinner},
  emits: ['save-product'],
  props: {
    mode: {
      type: String,
      required: true,
      default: null
    }
  },
  data() {
    return {
      brand: {
        val: '',
        isValid: true
      },
      model: {
        val: '',
        isValid: true
      },
      size: {
        val: '',
        isValid: true
      },
      width: {
        val: '',
        isValid: true
      },
      height: {
        val: '',
        isValid: true
      },
      refreshRate: {
        val: '',
        isValid: true
      },
      connectivity: {
        val: [],
        isValid: true
      },
      image: {
        val: '',
        isValid: true
      },
      price: {
        val: '',
        isValid: true
      },
      formIsValid: true,
      isLoading: false
    }
  },
  computed: {
    formCaption() {
      if (this.mode === 'create') {
        return "Create";
      }
      return "Update";
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.brand.val === '') {
        this.brand.isValid = false;
        this.formIsValid = false;
      }
      if (this.model.val === '') {
        this.model.isValid = false;
        this.formIsValid = false;
      }
      if (this.size.val === '') {
        this.size.isValid = false;
        this.formIsValid = false;
      }
      if (this.width.val === '') {
        this.width.isValid = false;
        this.formIsValid = false;
      }
      if (this.height.val === '') {
        this.height.isValid = false;
        this.formIsValid = false;
      }
      if (this.refreshRate.val === '') {
        this.refreshRate.isValid = false;
        this.formIsValid = false;
      }
      if (this.connectivity.val.length === 0) {
        this.connectivity.isValid = false;
        this.formIsValid = false;
      }
      if (this.image.val === '') {
        this.image.isValid = false;
        this.formIsValid = false;
      }
      if (this.price.val === '') {
        this.price.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }

      const formData = {
        brand: this.brand.val,
        model: this.model.val,
        size: this.size.val,
        width: this.width.val,
        height: this.height.val,
        refreshRate: this.refreshRate.val,
        connectivity: this.connectivity.val,
        image: this.image.val,
        price: this.price.val
      };

      this.$emit('save-product', formData);
    }
  },
  async created() {
    if (this.mode === 'update') {
      this.isLoading = true;

      const product = (await axios.get(`http://localhost:3000/product/${this.$route.params.id}`)).data.product;

      this.brand.val = product.brand;
      this.model.val = product.model;
      this.size.val = product.size;
      this.width.val = product.width;
      this.height.val = product.height;
      this.refreshRate.val = product.refreshRate;
      this.connectivity.val = product.connectivity;
      this.image.val = product.image;
      this.price.val = product.price;

      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>