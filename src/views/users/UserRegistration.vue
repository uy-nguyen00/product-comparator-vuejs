<template>
  <base-card>
    <authentication-form @authenticate-user="authenticateUser"></authentication-form>
  </base-card>
  {{ error }}
</template>

<script>
import AuthenticationForm from "@/components/users/AuthenticationForm.vue";

export default {
  name: "UserRegistration",
  components: {AuthenticationForm},
  data() {
    return {
      error: null
    }
  },
  methods: {
    async authenticateUser(data) {
      try {
        if (data.mode === 'login') {
          await this.$store.dispatch('users/login', data);
        } else {
          await this.$store.dispatch('users/signup', data);
        }
        const redirectUrl = '/' + (this.$route.query.redirect || 'products');
        this.$router.replace(redirectUrl);
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try later.';
      }
    }
  }
}
</script>

<style scoped>

</style>