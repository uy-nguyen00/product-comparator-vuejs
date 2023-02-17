<template>
  <the-header/>
  <div class="layout">
    <router-view></router-view>
  </div>
  <the-footer/>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  name: 'App',
  components: {TheFooter, TheHeader},
  mounted() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.layout {
  max-width: 40rem;
  margin: 2rem auto;
}
</style>
