<template>
  <span class="badge" :class="tier">
    {{ content }}
  </span>
</template>

<script>
export default {
  name: "BaseBadge",
  props: ['price'],
  computed: {
    tier() {
      if (this.price > 1000) {
        return 'mythic';
      }
      if (this.price >= 500 && this.price <= 1000) {
        return 'rare';
      }
      else {
        return 'epic';
      }
    },
    content() {
      return this.price + '€';
    },
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.3rem 1rem;
  display: inline-block;
}

.mythic {
  background-color: #FF8C00;
  color: white;
}

.epic {
  background-color: #6495ED;
  color: white;
}

.rare {
  background-color: #EE82EE;
  color: white;
}
</style>