<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import StarAnimation from './components/StarAnimation.vue'
import LoadingScreen from './components/LoadingScreen.vue'

const isLoaded = ref(false);

const onLoaded = () => {
  isLoaded.value = true;
};
</script>

<template>
  <LoadingScreen @loaded="onLoaded" />
  <template v-if="isLoaded">
    <StarAnimation />
    <Navbar />
    <RouterView />
  </template>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Zen Maru Gothic', sans-serif;
  background: #f5f0f8;
  min-height: 100vh;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
