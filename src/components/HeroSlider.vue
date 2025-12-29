<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import kvImage from '../assets/kv_pc_1.jpg';
import logoPc from '../assets/logo_pc.png';

gsap.registerPlugin(ScrollTrigger);

const slides = ref([
  {
    id: 1,
    image: kvImage,
    logo: logoPc
  }
]);

const currentSlide = ref(0);
const heroRef = ref(null);
const slideRef = ref(null);
const logoRef = ref(null);
const scrollHintRef = ref(null);

onMounted(() => {
  // Entrance animations
  gsap.from('.hero-content', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });

  gsap.from(logoRef.value, {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    delay: 0.5,
    ease: "power3.out"
  });

  gsap.from(scrollHintRef.value, {
    opacity: 0,
    y: -20,
    duration: 0.6,
    delay: 1,
    ease: "power2.out"
  });

  // Scroll hint fade out on scroll
  gsap.fromTo(scrollHintRef.value, 
    { opacity: 1 },
    {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.value,
        start: 'top top',
        end: '20% top',
        scrub: 0.3
      }
    }
  );

  // Logo fade out on scroll down, fade in on scroll up
  gsap.fromTo(logoRef.value, 
    { opacity: 1 },
    {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.value,
        start: 'top top',
        end: '40% top',
        scrub: 0.5
      }
    }
  );
});
</script>

<template>
  <section class="hero-slider" ref="heroRef">
    <div 
      class="hero-slide" 
      ref="slideRef"
      :style="{ backgroundImage: `url(${slides[currentSlide].image})` }"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <img 
          ref="logoRef"
          :src="slides[currentSlide].logo" 
          alt="Logo" 
          class="hero-logo" 
        />
      </div>
    </div>
    
    <!-- Scroll Hint -->
    <div class="scroll-hint" ref="scrollHintRef">
      <span>Scroll</span>
      <div class="scroll-arrow">
        <svg width="20" height="30" viewBox="0 0 20 30">
          <path d="M10 0 L10 25 M3 18 L10 25 L17 18" stroke="currentColor" stroke-width="2" fill="none"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-slide {
  width: 100%;
  height: 100%;
  background-size: 110%;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: kenBurns 20s ease-in-out infinite alternate;
}

@keyframes kenBurns {
  0% {
    background-size: 110%;
    background-position: 30% 30%;
  }
  50% {
    background-size: 115%;
    background-position: 70% 50%;
  }
  100% {
    background-size: 120%;
    background-position: 50% 70%;
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(245, 240, 248, 0.8) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-logo {
  max-width: 500px;
  width: 80%;
  height: auto;
  filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.1));
}

/* Scroll Hint */
.scroll-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #666;
  z-index: 5;
}

.scroll-hint span {
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.scroll-arrow {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

/* Responsive - Tablet */
@media (max-width: 768px) {
  .hero-slide {
    background-size: cover;
    background-position: center;
    animation: kenBurnsMobile 15s ease-in-out infinite alternate;
  }

  @keyframes kenBurnsMobile {
    0% {
      background-position: center top;
    }
    100% {
      background-position: center bottom;
    }
  }

  .hero-logo {
    max-width: 280px;
  }
  
  .scroll-hint {
    bottom: 25px;
  }

  .scroll-hint span {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
  }

  .scroll-arrow svg {
    width: 16px;
    height: 24px;
  }
}

/* Responsive - Mobile */
@media (max-width: 480px) {
  .hero-logo {
    max-width: 200px;
  }
  
  .scroll-hint {
    bottom: 20px;
    gap: 6px;
  }

  .scroll-hint span {
    font-size: 0.6rem;
    letter-spacing: 0.1em;
  }

  .scroll-arrow svg {
    width: 14px;
    height: 20px;
  }
}
</style>
