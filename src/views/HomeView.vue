<script setup>
import HeroSlider from '../components/HeroSlider.vue';
import MovieSection from '../components/MovieSection.vue';
import CharacterCarousel from '../components/CharacterCarousel.vue';
import StorySection from '../components/StorySection.vue';
import NewsSection from '../components/NewsSection.vue';
import StaffSection from '../components/StaffSection.vue';
import GallerySection from '../components/GallerySection.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="home-page">
    <HeroSlider />
    <MovieSection />
    <CharacterCarousel />
    <StorySection />
    <NewsSection />
    <StaffSection />
    <GallerySection />
    <Footer />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}
</style>

