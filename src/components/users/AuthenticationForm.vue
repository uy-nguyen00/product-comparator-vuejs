<template>
  <h2>{{ authModeCaption }}</h2>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !email.isValid}">
      <label for="firstname">Email</label>
      <input type="email" id="email" v-model.trim="email.val" @blur="clearValidity('email')"/>
      <p v-if="!email.isValid">Email must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !password.isValid}">
      <label for="lastname">Password</label>
      <input type="password" id="password" v-model.trim="password.val" @blur="clearValidity('password')"/>
      <p v-if="!password.isValid">Password must not be empty.</p>
    </div>

    <div v-if="mode === 'signup'" class="form-control" :class="{invalid: !confirmedPassword.isValid}">
      <label for="lastname">Confirm Password</label>
      <input type="password" id="confirm-password" v-model.trim="confirmedPassword.val"
             @blur="clearValidity('confirmedPassword')"/>
      <p v-if="!confirmedPassword.isValid">Please make sure this is identical with the line above.</p>
    </div>

    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>

    <base-button>{{ authModeCaption }}</base-button>
    <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchAuthModeCaption }}</base-button>
  </form>
</template>

<script>

export default {
  name: "AuthenticationForm",
  emits: ['authenticate-user'],
  data() {
    return {
      email: {
        val: '',
        isValid: true
      },
      password: {
        val: '',
        isValid: true
      },
      confirmedPassword: {
        val: '',
        isValid: true
      },
      formIsValid: true,
      mode: 'login'
    }
  },
  computed: {
    authModeCaption() {
      if (this.mode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchAuthModeCaption() {
      if (this.mode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.val === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === '') {
        this.password.isValid = false;
        this.formIsValid = false;
      }
      if ((this.confirmedPassword.val === '' || this.confirmedPassword.val !== this.password.val)
          && this.mode === 'signup'
      ) {
        this.confirmedPassword.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }

      const formData = {
        email: this.email.val,
        password: this.password.val,
        mode: this.mode
      };

      this.$emit('authenticate-user', formData);
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