<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const stars = ref([]);
let animationInterval = null;

const createStar = () => {
  const id = Date.now() + Math.random();
  const star = {
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 12 + 8,
    duration: Math.random() * 2 + 1.5,
    delay: Math.random() * 0.5
  };
  
  stars.value.push(star);
  
  // Remove star after animation
  setTimeout(() => {
    stars.value = stars.value.filter(s => s.id !== id);
  }, (star.duration + star.delay) * 1000);
};

onMounted(() => {
  // Create initial stars
  for (let i = 0; i < 5; i++) {
    setTimeout(() => createStar(), i * 300);
  }
  
  // Continuously create new stars
  animationInterval = setInterval(() => {
    if (stars.value.length < 8) {
      createStar();
    }
  }, 800);
});

onUnmounted(() => {
  if (animationInterval) {
    clearInterval(animationInterval);
  }
});
</script>

<template>
  <div class="stars-container">
    <svg 
      v-for="star in stars" 
      :key="star.id"
      class="star"
      :style="{
        left: star.x + '%',
        top: star.y + '%',
        width: star.size + 'px',
        height: star.size + 'px',
        animationDuration: star.duration + 's',
        animationDelay: star.delay + 's'
      }"
      viewBox="0 0 24 24"
    >
      <!-- Flower/Star shape -->
      <path 
        d="M12 2C12 2 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 2 12 2Z
           M12 22C12 22 10 18 10 16C10 14 12 12 12 12C12 12 14 14 14 16C14 18 12 22 12 22Z
           M2 12C2 12 6 10 8 10C10 10 12 12 12 12C12 12 10 14 8 14C6 14 2 12 2 12Z
           M22 12C22 12 18 14 16 14C14 14 12 12 12 12C12 12 14 10 16 10C18 10 22 12 22 12Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="2" fill="#f0e68c"/>
    </svg>
  </div>
</template>

<style scoped>
.stars-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.star {
  position: absolute;
  color: #4ecdc4;
  animation: twinkle ease-in-out forwards;
  filter: drop-shadow(0 0 3px rgba(78, 205, 196, 0.5));
}

@keyframes twinkle {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
  30% {
    opacity: 1;
    transform: scale(1) rotate(15deg);
  }
  70% {
    opacity: 1;
    transform: scale(1) rotate(-15deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
}
</style>
