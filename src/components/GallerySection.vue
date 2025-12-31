<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import character images for gallery
import img1 from '../assets/img_main_chara_1.png';
import img2 from '../assets/img_main_chara_2.png';
import img3 from '../assets/img_main_chara_3.png';
import img4 from '../assets/img_main_chara_4.png';
import img5 from '../assets/img_main_chara_5.png';
import img6 from '../assets/img_main_chara_6.png';
import kvImage from '../assets/kv_pc_1.jpg';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const selectedImage = ref(null);

const gallery = ref([
  { id: 1, src: kvImage, title: 'キービジュアル' },
  { id: 2, src: img1, title: '薫子' },
  { id: 3, src: img2, title: '凛太郎' },
  { id: 4, src: img3, title: '美咲' },
  { id: 5, src: img4, title: '雪' },
  { id: 6, src: img5, title: '葵' },
  { id: 7, src: img6, title: '月' },
  { id: 8, src: kvImage, title: 'キービジュアル 2' }
]);

const openLightbox = (image) => {
  selectedImage.value = image;
};

const closeLightbox = () => {
  selectedImage.value = null;
};

onMounted(() => {
  gsap.from('.gallery-title', {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%'
    },
    opacity: 0,
    y: 20,
    duration: 0.6
  });

  gsap.from('.gallery-item', {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%'
    },
    opacity: 0,
    scale: 0.9,
    stagger: 0.08,
    duration: 0.5
  });
});
</script>

<template>
  <section id="gallery" class="gallery-section" ref="sectionRef">
    <div class="gallery-container">
      <!-- Title -->
      <div class="gallery-title">
        <span class="title-en">GALLERY</span>
        <span class="title-jp">ーギャラリーー</span>
      </div>

      <!-- Gallery Grid -->
      <div class="gallery-grid">
        <div 
          v-for="item in gallery" 
          :key="item.id" 
          class="gallery-item"
          @click="openLightbox(item)"
        >
          <img :src="item.src" :alt="item.title" loading="lazy" />
          <div class="item-overlay">
            <span class="item-title">{{ item.title }}</span>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div class="gallery-more">
        <a href="#" class="more-btn">VIEW MORE</a>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="selectedImage" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="close-btn" @click="closeLightbox">×</button>
        <img :src="selectedImage.src" :alt="selectedImage.title" />
        <p class="lightbox-title">{{ selectedImage.title }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 80px 40px;
  background-image: url('../assets/bg_watercolor.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.gallery-container {
  max-width: 1100px;
  margin: 0 auto;
}

/* Title */
.gallery-title {
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

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  padding: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .item-overlay {
  opacity: 1;
}

.item-title {
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
}

/* View More Button */
.gallery-more {
  text-align: center;
  margin-top: 40px;
}

.more-btn {
  display: inline-block;
  padding: 12px 40px;
  border: 2px solid #9080a8;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #9080a8;
  text-decoration: none;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}

.more-btn:hover {
  background: #9080a8;
  color: white;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
}

.lightbox-title {
  text-align: center;
  color: white;
  margin-top: 15px;
  font-size: 1rem;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.close-btn:hover {
  transform: scale(1.2);
}

/* Responsive */
@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 600px) {
  .gallery-section {
    padding: 40px 15px;
  }

  .gallery-title {
    margin-bottom: 25px;
  }

  .title-en {
    font-size: 1.3rem;
    letter-spacing: 0.3em;
  }

  .title-jp {
    font-size: 0.7rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .gallery-item {
    border-radius: 8px;
  }

  .more-btn {
    padding: 10px 30px;
    font-size: 0.75rem;
  }

  .gallery-more {
    margin-top: 25px;
  }

  .lightbox-content img {
    max-height: 60vh;
  }

  .close-btn {
    font-size: 2rem;
    top: -30px;
  }
}

@media (max-width: 400px) {
  .gallery-section {
    padding: 30px 10px;
  }

  .title-en {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
  }

  .gallery-grid {
    gap: 6px;
  }

  .gallery-item {
    border-radius: 6px;
  }

  .more-btn {
    padding: 8px 25px;
    font-size: 0.7rem;
  }

  .lightbox-content img {
    max-height: 50vh;
  }
}
</style>
