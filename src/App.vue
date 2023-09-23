<template>
  <!-- <NavBar></NavBar> -->
  <Chat></Chat>
  <router-view></router-view>
</template>

<script setup lang="ts">
// import NavBar from './components/NavBar.vue';
import Chat from './components/Chat.vue';
</script>

<style lang="scss">
@import './src/assets/scss/helpers.scss';
@import './src/assets/scss/montserrat-fontface.scss';

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
