<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import logoMain from '../assets/logo_main.png';

const isLoading = ref(true);
const loadingRef = ref(null);
const logoRef = ref(null);

const emit = defineEmits(['loaded']);

onMounted(() => {
  // Logo entrance animation
  gsap.fromTo(logoRef.value,
    { opacity: 0, scale: 0.5 },
    { 
      opacity: 1, 
      scale: 1, 
      duration: 0.8, 
      ease: "back.out(1.5)",
      delay: 0.2
    }
  );

  // Logo pulse animation
  gsap.to(logoRef.value, {
    scale: 1.05,
    duration: 0.6,
    yoyo: true,
    repeat: 2,
    ease: "power1.inOut",
    delay: 1
  });

  // Hide loading screen after animation
  setTimeout(() => {
    gsap.to(loadingRef.value, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        isLoading.value = false;
        emit('loaded');
      }
    });
  }, 2500);
});
</script>

<template>
  <div v-if="isLoading" class="loading-screen" ref="loadingRef">
    <div class="loading-content">
      <img ref="logoRef" :src="logoMain" alt="薫る花は凛と咲く" class="loading-logo" />
      <div class="loading-bar">
        <div class="loading-progress"></div>
      </div>
      <p class="loading-text">Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  inset: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.loading-logo {
  max-width: 400px;
  width: 80%;
  height: auto;
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: rgba(200, 180, 220, 0.3);
  border-radius: 2px;
  overflow: hidden;
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4 0%, #3dbdb5 50%, #4ecdc4 100%);
  background-size: 200% 100%;
  border-radius: 2px;
  animation: loadingBar 2s ease-in-out forwards, shimmer 1s ease-in-out infinite;
}

@keyframes loadingBar {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.loading-text {
  font-size: 0.9rem;
  color: #9080a8;
  letter-spacing: 0.2em;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 480px) {
  .loading-logo {
    max-width: 250px;
  }

  .loading-bar {
    width: 150px;
  }

  .loading-text {
    font-size: 0.75rem;
  }
}
</style>
