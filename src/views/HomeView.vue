<script setup>
import HeroSlider from '../components/HeroSlider.vue';
import MovieSection from '../components/MovieSection.vue';
import CharacterCarousel from '../components/CharacterCarousel.vue';
import NewsSection from '../components/NewsSection.vue';
import GallerySection from '../components/GallerySection.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="home-page">
    <HeroSlider />
    <MovieSection />
    <CharacterCarousel />
    <NewsSection />
    <GallerySection />
    <Footer />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
</style>
