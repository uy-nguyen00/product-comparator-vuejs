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
        return 'epic';
      }
      else {
        return 'rare';
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
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.mythic {
  background-color: #ffd700;
  color: white;
}

.epic {
  background-color: #ADD8E6;
  color: white;
}

.rare {
  background-color: #8d006e;
  color: white;
}
</style>