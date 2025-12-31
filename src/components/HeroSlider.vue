<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import logoPc from '../assets/logo_pc.png';
import scrollVideoSrc from '../assets/id_scroll_keyframes.mp4';

gsap.registerPlugin(ScrollTrigger);

const heroRef = ref(null);
const logoRef = ref(null);
const scrollHintRef = ref(null);
const videoRef = ref(null);
const scrollContainerRef = ref(null);
const isVideoLoaded = ref(false);

let scrollTriggerInstance = null;
let intersectionObserver = null;

const initScrollVideo = () => {
  if (videoRef.value && !isVideoLoaded.value) {
    const video = videoRef.value;
    
    // Set video source and load
    video.src = scrollVideoSrc;
    isVideoLoaded.value = true;
    
    video.addEventListener('loadedmetadata', () => {
      const videoDuration = video.duration;
      
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: scrollContainerRef.value,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          video.currentTime = self.progress * videoDuration;
        }
      });
    });
    
    video.load();
  }
};

onMounted(() => {
  // Lazy load video using Intersection Observer
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initScrollVideo();
          // Stop observing after video is loaded
          intersectionObserver.disconnect();
        }
      });
    },
    {
      rootMargin: '200px', // Load video 200px before it enters viewport
      threshold: 0
    }
  );
  
  if (scrollContainerRef.value) {
    intersectionObserver.observe(scrollContainerRef.value);
  }
  
  // Fade out hero-content (logo) on scroll
  gsap.to('.hero-content', {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: scrollContainerRef.value,
      start: 'top top',
      end: '30% top',
      scrub: true
    }
  });
  
  // Fade out scroll hint on scroll  
  gsap.to('.scroll-hint', {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: scrollContainerRef.value,
      start: 'top top',
      end: '15% top',
      scrub: true
    }
  });
});

onUnmounted(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
  if (intersectionObserver) {
    intersectionObserver.disconnect();
  }
});
</script>

<template>
  <div class="scroll-video-container" ref="scrollContainerRef">
    <section class="hero-slider" ref="heroRef">
      <!-- Video Background (Lazy Loaded) -->
      <video 
        ref="videoRef"
        class="hero-video"
        muted
        playsinline
        preload="metadata"
      ></video>
      
      <!-- Logo -->
      <div class="hero-content">
        <img 
          ref="logoRef"
          :src="logoPc" 
          alt="Logo" 
          class="hero-logo" 
        />
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
  </div>
</template>

<style scoped>
.scroll-video-container {
  height: 300vh;
  position: relative;
}

.hero-slider {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
}

.hero-logo {
  max-width: 500px;
  width: 80%;
  height: auto;
  filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.1));
}

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
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

@media (max-width: 768px) {
  .scroll-video-container {
    height: 200vh;
  }
  .hero-logo {
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .hero-logo {
    max-width: 200px;
  }
}
</style>
