<template>
  <nav class="">
    <section class="top-links">
      <router-link class="navbar-item" :to="{ name: 'Home' }">Home</router-link>
    </section>
    <div class="is-flex">
      <section class="side-links">
  
      </section>
      <section class="content is-flex-grow-1 p-4">
        <slot></slot>
      </section>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.top-links {
  border-bottom: 1px solid rgb(222, 222, 222);
  background-color: rgb(237, 237, 237);
}

.side-links {
  width: 250px;
  border-right: 1px solid rgb(222, 222, 222);
  background-color: rgb(237, 237, 237);
  height: 100vh;
}
</style>
