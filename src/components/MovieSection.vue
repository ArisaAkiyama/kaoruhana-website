<script setup>
import { ref, onMounted, computed } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const currentIndex = ref(0);
const isPlaying = ref(false);
const activeVideoId = ref(null);

// 5 Movie data - Kaoru Hana wa Rin to Saku Trailers
const movies = ref([
  {
    id: 1,
    title: 'ファーストPV',
    subtitle: 'TVアニメ「薫る花は凛と咲く」',
    videoId: 'X2YvvntQTls'
  },
  {
    id: 2,
    title: 'ティザーPV',
    subtitle: '2025年7月放送開始',
    videoId: '1FcVJxxPWh4'
  },
  {
    id: 3,
    title: '本PV',
    subtitle: 'CloverWorks制作',
    videoId: 'wMDwbC-cAQg'
  },
  {
    id: 4,
    title: 'Netflix予告編',
    subtitle: 'The Fragrant Flower Blooms with Dignity',
    videoId: '8WLNNu78mUk'
  },
  {
    id: 5,
    title: 'アニメ化決定PV',
    subtitle: '薫る花は凛と咲く',
    videoId: 'PvU2WPw6DoI'
  }
]);

// Single slide for minimal clean design
const currentMovie = computed(() => movies.value[currentIndex.value]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % movies.value.length;
  isPlaying.value = false;
  activeVideoId.value = null;
};

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 ? movies.value.length - 1 : currentIndex.value - 1;
  isPlaying.value = false;
  activeVideoId.value = null;
};

const playVideo = (videoId) => {
  activeVideoId.value = videoId;
  isPlaying.value = true;
};

const selectSlide = (index) => {
  if (index === currentIndex.value) return;
  currentIndex.value = index;
  isPlaying.value = false;
  activeVideoId.value = null;
};

onMounted(() => {
  // No animations
});
</script>

<template>
  <section id="movie" class="movie-section" ref="sectionRef">
    <div class="movie-container">
      <!-- Title -->
      <div class="movie-title">
        <span class="title-en">MOVIE</span>
        <span class="title-jp">ームービーー</span>
      </div>

      <!-- Slider -->
      <div class="slider-wrapper">
        <!-- Prev Button -->
        <button class="slider-btn prev" @click="prevSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- Single Slide Container -->
        <div class="slides-container">
          <transition name="slide-fade" mode="out-in">
            <div 
              :key="currentIndex"
              class="slide center"
              @click="playVideo(currentMovie.videoId)"
            >
              <div class="slide-inner">
                <!-- Video or Thumbnail -->
                <template v-if="isPlaying && activeVideoId === currentMovie.videoId">
                  <iframe 
                    :src="`https://www.youtube.com/embed/${currentMovie.videoId}?autoplay=1&rel=0`"
                    title="Movie"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="video-iframe"
                  ></iframe>
                </template>
                <template v-else>
                  <img 
                    :src="`https://img.youtube.com/vi/${currentMovie.videoId}/maxresdefault.jpg`" 
                    :alt="currentMovie.title"
                    class="slide-thumbnail"
                  />
                  <div class="slide-overlay">
                    <div class="play-icon">
                      <svg width="100" height="100" viewBox="0 0 100 100">
                        <g class="rotating-group">
                          <!-- Dashed circle with gap centered on star -->
                          <circle 
                            cx="50" cy="50" r="38" 
                            fill="none" 
                            stroke="rgba(255,255,255,0.7)" 
                            stroke-width="1.5"
                            stroke-dasharray="210 29"
                            stroke-dashoffset="185"
                            stroke-linecap="round"
                          />
                          <!-- Star positioned in center of gap -->
                          <g transform="translate(69, 83)">
                            <path d="M0,-5 L1.5,-1.5 L5,0 L1.5,1.5 L0,5 L-1.5,1.5 L-5,0 L-1.5,-1.5 Z" fill="white"/>
                          </g>
                        </g>
                        <!-- Play triangle centered -->
                        <polygon points="40,32 40,68 68,50" fill="rgba(255,255,255,0.9)"/>
                      </svg>
                    </div>
                    <div class="slide-info">
                      <span class="slide-title">{{ currentMovie.title }}</span>
                      <span class="slide-subtitle">{{ currentMovie.subtitle }}</span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </transition>
        </div>

        <!-- Next Button -->
        <button class="slider-btn next" @click="nextSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- Dots -->
      <div class="slider-dots">
        <button 
          v-for="(movie, idx) in movies" 
          :key="movie.id"
          class="dot"
          :class="{ active: idx === currentIndex }"
          @click="selectSlide(idx)"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.movie-section {
  padding: 80px 40px;
  background-image: url('../assets/bg_watercolor.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
}

.movie-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Title */
.movie-title {
  text-align: center;
  margin-bottom: 40px;
}

.title-en {
  display: block;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.5em;
  color: #555;
}

.title-jp {
  display: block;
  font-size: 0.85rem;
  color: #999;
  margin-top: 8px;
}

/* Slider */
.slider-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0 20px;
}

.slider-btn {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #9080a8;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.slider-btn:hover {
  background: #9080a8;
  color: white;
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(144, 128, 168, 0.4);
}

.slider-btn svg {
  width: 24px;
  height: 24px;
}

/* Slides Container */
.slides-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
}

.slide {
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.slide:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
}

.slide.center {
  width: 600px;
  max-width: 90vw;
  aspect-ratio: 16 / 9;
}

/* Slide Transition Animation */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-inner {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  z-index: 2;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease;
}

.play-icon svg {
  filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
}

.rotating-group {
  transform-origin: 50px 50px;
  animation: rotateCircle 6s linear infinite;
}

@keyframes rotateCircle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.slide.center:hover .play-icon {
  transform: translate(-50%, -50%) scale(1.1);
}

.slide-info {
  text-align: center;
  color: white;
}

.slide-title {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.slide-subtitle {
  display: block;
  font-size: 0.8rem;
  opacity: 0.8;
}

.video-iframe {
  width: 100%;
  height: 100%;
}

/* Dots */
.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d8d0e0;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #9080a8;
  transform: scale(1.2);
}

.dot:hover {
  background: #b8a8c8;
}

/* Responsive */
@media (max-width: 900px) {
  .slide.center {
    width: 350px;
  }
  
  .slide.side {
    display: none;
  }
  
  .slider-wrapper {
    gap: 10px;
  }
}

@media (max-width: 600px) {
  .movie-section {
    padding: 40px 15px;
  }

  .movie-title {
    margin-bottom: 25px;
  }

  .title-en {
    font-size: 1.3rem;
    letter-spacing: 0.3em;
  }

  .title-jp {
    font-size: 0.7rem;
  }
  
  .slide.center {
    width: 100%;
  }
  
  .slider-btn {
    width: 35px;
    height: 35px;
    font-size: 1.3rem;
  }

  .slider-dots {
    margin-top: 20px;
  }

  .dot {
    width: 8px;
    height: 8px;
  }

  .play-icon svg {
    width: 40px;
    height: 40px;
  }

  .slide-title {
    font-size: 0.8rem;
  }

  .slide-subtitle {
    font-size: 0.65rem;
  }
}

@media (max-width: 400px) {
  .movie-section {
    padding: 30px 10px;
  }

  .title-en {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
  }

  .slider-btn {
    width: 30px;
    height: 30px;
    font-size: 1.1rem;
  }

  .dot {
    width: 6px;
    height: 6px;
  }

  .play-icon svg {
    width: 35px;
    height: 35px;
  }
}
</style>
