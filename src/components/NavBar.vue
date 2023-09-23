<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <router-link class="navbar-item" :to="{ name: 'Home' }">Home</router-link>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid rgb(222, 222, 222);
}
</style>
