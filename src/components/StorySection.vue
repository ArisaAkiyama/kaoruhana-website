<script setup>
import { ref, computed } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import kvImage from '../assets/kv_pc_1.jpg';
import bgBase from '../assets/bg_base.jpg';

// Import cached YouTube thumbnails
import thumb1 from '../assets/thumbnails/ep_1_KEIlHZqYfSY.jpg';
import thumb2 from '../assets/thumbnails/ep_2_5KTlvN61vb4.jpg';
import thumb3 from '../assets/thumbnails/ep_3_Cxeq2IeiZWQ.jpg';
import thumb4 from '../assets/thumbnails/ep_4_J1CPKlnILL4.jpg';
import thumb5 from '../assets/thumbnails/ep_5_c_yNgIae6i4.jpg';
import thumb6 from '../assets/thumbnails/ep_6_orxUSsDnaGQ.jpg';
import thumb7 from '../assets/thumbnails/ep_7_2FNYqlwNRSg.jpg';
import thumb8 from '../assets/thumbnails/ep_8_bWteiUJZcd4.jpg';
import thumb9 from '../assets/thumbnails/ep_9_V82eVUbm_sM.jpg';
import thumb10 from '../assets/thumbnails/ep_10_sejTGHHsYyY.jpg';
import thumb11 from '../assets/thumbnails/ep_11_lh7R9Z2xSFY.jpg';
import thumb12 from '../assets/thumbnails/ep_12_05Y_hhVntbE.jpg';
import thumb13 from '../assets/thumbnails/ep_13_i5_w0CiLjnI.jpg';

// Import episode images from id_1 folder
import ep1_1 from '../assets/id_1/1.jpg';
import ep1_2 from '../assets/id_1/2.jpg';
import ep1_3 from '../assets/id_1/3.jpg';
import ep1_4 from '../assets/id_1/4.jpg';
import ep1_5 from '../assets/id_1/5.jpg';
import ep1_6 from '../assets/id_1/6.jpg';
import ep1_7 from '../assets/id_1/7.jpg';
import ep1_8 from '../assets/id_1/8.jpg';
import ep1_9 from '../assets/id_1/9.jpg';
import ep1_10 from '../assets/id_1/10.jpg';
import ep1_11 from '../assets/id_1/11.jpg';
import ep1_12 from '../assets/id_1/12.jpg';
import ep1_13 from '../assets/id_1/13.jpg';

// Import episode images from id_2 folder
import ep2_1 from '../assets/id_2/1.jpg';
import ep2_2 from '../assets/id_2/2.jpg';
import ep2_3 from '../assets/id_2/3.jpg';
import ep2_4 from '../assets/id_2/4.jpg';
import ep2_5 from '../assets/id_2/5.jpg';
import ep2_6 from '../assets/id_2/6.jpg';
import ep2_7 from '../assets/id_2/7.jpg';
import ep2_8 from '../assets/id_2/8.jpg';
import ep2_9 from '../assets/id_2/9.jpg';
import ep2_10 from '../assets/id_2/10.jpg';
import ep2_11 from '../assets/id_2/11.jpg';
import ep2_12 from '../assets/id_2/12.jpg';

// Import episode images from id_3 folder
import ep3_1 from '../assets/id_3/1.jpg';
import ep3_2 from '../assets/id_3/2.jpg';
import ep3_3 from '../assets/id_3/3.jpg';
import ep3_4 from '../assets/id_3/4.jpg';
import ep3_5 from '../assets/id_3/5.jpg';
import ep3_6 from '../assets/id_3/6.jpg';
import ep3_7 from '../assets/id_3/7.jpg';
import ep3_8 from '../assets/id_3/8.jpg';
import ep3_9 from '../assets/id_3/9.jpg';
import ep3_10 from '../assets/id_3/10.jpg';
import ep3_11 from '../assets/id_3/11.jpg';
import ep3_12 from '../assets/id_3/12.jpg';
import ep3_13 from '../assets/id_3/13.jpg';
import ep3_14 from '../assets/id_3/14.jpg';

const ep1Images = [ep1_1, ep1_2, ep1_3, ep1_4, ep1_5, ep1_6, ep1_7, ep1_8, ep1_9, ep1_10, ep1_11, ep1_12, ep1_13];
const ep2Images = [ep2_1, ep2_2, ep2_3, ep2_4, ep2_5, ep2_6, ep2_7, ep2_8, ep2_9, ep2_10, ep2_11, ep2_12];
const ep3Images = [ep3_1, ep3_2, ep3_3, ep3_4, ep3_5, ep3_6, ep3_7, ep3_8, ep3_9, ep3_10, ep3_11, ep3_12, ep3_13, ep3_14];

// Import episode images from id_4 folder
import ep4_1 from '../assets/id_4/1.jpg';
import ep4_2 from '../assets/id_4/2.jpg';
import ep4_3 from '../assets/id_4/3.jpg';
import ep4_4 from '../assets/id_4/4.jpg';
import ep4_5 from '../assets/id_4/5.jpg';
import ep4_6 from '../assets/id_4/6.jpg';
import ep4_7 from '../assets/id_4/7.jpg';
import ep4_8 from '../assets/id_4/8.jpg';
import ep4_9 from '../assets/id_4/9.jpg';

const ep4Images = [ep4_1, ep4_2, ep4_3, ep4_4, ep4_5, ep4_6, ep4_7, ep4_8, ep4_9];

// Import episode images from id_5 folder
import ep5_1 from '../assets/id_5/1.jpg';
import ep5_2 from '../assets/id_5/2.jpg';
import ep5_3 from '../assets/id_5/3.jpg';
import ep5_4 from '../assets/id_5/4.jpg';
import ep5_5 from '../assets/id_5/5.jpg';
import ep5_6 from '../assets/id_5/6.jpg';
import ep5_7 from '../assets/id_5/7.jpg';
import ep5_8 from '../assets/id_5/8.jpg';
import ep5_9 from '../assets/id_5/9.jpg';
import ep5_10 from '../assets/id_5/10.jpg';
import ep5_11 from '../assets/id_5/11.jpg';
import ep5_12 from '../assets/id_5/12.jpg';
import ep5_13 from '../assets/id_5/13.jpg';
import ep5_14 from '../assets/id_5/14.jpg';

const ep5Images = [ep5_1, ep5_2, ep5_3, ep5_4, ep5_5, ep5_6, ep5_7, ep5_8, ep5_9, ep5_10, ep5_11, ep5_12, ep5_13, ep5_14];

// Import episode images from id_6 folder
import ep6_1 from '../assets/id_6/1.jpg';
import ep6_2 from '../assets/id_6/2.jpg';
import ep6_3 from '../assets/id_6/3.jpg';
import ep6_4 from '../assets/id_6/4.jpg';
import ep6_5 from '../assets/id_6/5.jpg';
import ep6_6 from '../assets/id_6/6.jpg';
import ep6_7 from '../assets/id_6/7.jpg';
import ep6_8 from '../assets/id_6/8.jpg';
import ep6_9 from '../assets/id_6/9.jpg';
import ep6_10 from '../assets/id_6/10.jpg';
import ep6_11 from '../assets/id_6/11.jpg';
import ep6_12 from '../assets/id_6/12.jpg';
import ep6_13 from '../assets/id_6/13.jpg';
import ep6_14 from '../assets/id_6/14.jpg';
import ep6_15 from '../assets/id_6/15.jpg';

const ep6Images = [ep6_1, ep6_2, ep6_3, ep6_4, ep6_5, ep6_6, ep6_7, ep6_8, ep6_9, ep6_10, ep6_11, ep6_12, ep6_13, ep6_14, ep6_15];

// Import episode images from id_7 folder
import ep7_1 from '../assets/id_7/1.jpg';
import ep7_2 from '../assets/id_7/2.jpg';
import ep7_3 from '../assets/id_7/3.jpg';
import ep7_4 from '../assets/id_7/4.jpg';
import ep7_5 from '../assets/id_7/5.jpg';
import ep7_6 from '../assets/id_7/6.jpg';
import ep7_7 from '../assets/id_7/7.jpg';
import ep7_8 from '../assets/id_7/8.jpg';
import ep7_9 from '../assets/id_7/9.jpg';
import ep7_10 from '../assets/id_7/10.jpg';
import ep7_11 from '../assets/id_7/11.jpg';
import ep7_12 from '../assets/id_7/12.jpg';

const ep7Images = [ep7_1, ep7_2, ep7_3, ep7_4, ep7_5, ep7_6, ep7_7, ep7_8, ep7_9, ep7_10, ep7_11, ep7_12];

// Import episode images from id_8 folder
import ep8_1 from '../assets/id_8/1.jpg';
import ep8_2 from '../assets/id_8/2.jpg';
import ep8_3 from '../assets/id_8/3.jpg';
import ep8_4 from '../assets/id_8/4.jpg';
import ep8_5 from '../assets/id_8/5.jpg';
import ep8_6 from '../assets/id_8/6.jpg';
import ep8_7 from '../assets/id_8/7.jpg';
import ep8_8 from '../assets/id_8/8.jpg';
import ep8_9 from '../assets/id_8/9.jpg';
import ep8_10 from '../assets/id_8/10.jpg';
import ep8_11 from '../assets/id_8/11.jpg';
import ep8_12 from '../assets/id_8/12.jpg';
import ep8_13 from '../assets/id_8/13.jpg';
import ep8_14 from '../assets/id_8/14.jpg';
import ep8_15 from '../assets/id_8/15.jpg';

const ep8Images = [ep8_1, ep8_2, ep8_3, ep8_4, ep8_5, ep8_6, ep8_7, ep8_8, ep8_9, ep8_10, ep8_11, ep8_12, ep8_13, ep8_14, ep8_15];

// Import episode images from id_9 folder
import ep9_1 from '../assets/id_9/1.jpg';
import ep9_2 from '../assets/id_9/2.jpg';
import ep9_3 from '../assets/id_9/3.jpg';
import ep9_4 from '../assets/id_9/4.jpg';
import ep9_5 from '../assets/id_9/5.jpg';
import ep9_6 from '../assets/id_9/6.jpg';
import ep9_7 from '../assets/id_9/7.jpg';
import ep9_8 from '../assets/id_9/8.jpg';
import ep9_9 from '../assets/id_9/9.jpg';
import ep9_10 from '../assets/id_9/10.jpg';
import ep9_11 from '../assets/id_9/11.jpg';
import ep9_12 from '../assets/id_9/12.jpg';
import ep9_13 from '../assets/id_9/13.jpg';

const ep9Images = [ep9_1, ep9_2, ep9_3, ep9_4, ep9_5, ep9_6, ep9_7, ep9_8, ep9_9, ep9_10, ep9_11, ep9_12, ep9_13];

// Import episode images from id_10 folder
import ep10_1 from '../assets/id_10/1.jpg';
import ep10_2 from '../assets/id_10/2.jpg';
import ep10_3 from '../assets/id_10/3.jpg';
import ep10_4 from '../assets/id_10/4.jpg';
import ep10_5 from '../assets/id_10/5.jpg';
import ep10_6 from '../assets/id_10/6.jpg';
import ep10_7 from '../assets/id_10/7.jpg';
import ep10_8 from '../assets/id_10/8.jpg';
import ep10_9 from '../assets/id_10/9.jpg';
import ep10_10 from '../assets/id_10/10.jpg';
import ep10_11 from '../assets/id_10/11.jpg';
import ep10_12 from '../assets/id_10/12.jpg';
import ep10_13 from '../assets/id_10/13.jpg';
import ep10_14 from '../assets/id_10/14.jpg';

const ep10Images = [ep10_1, ep10_2, ep10_3, ep10_4, ep10_5, ep10_6, ep10_7, ep10_8, ep10_9, ep10_10, ep10_11, ep10_12, ep10_13, ep10_14];

// Import episode images from id_11 folder
import ep11_1 from '../assets/id_11/1.jpg';
import ep11_2 from '../assets/id_11/2.jpg';
import ep11_3 from '../assets/id_11/3.jpg';
import ep11_4 from '../assets/id_11/4.jpg';
import ep11_5 from '../assets/id_11/5.jpg';
import ep11_6 from '../assets/id_11/6.jpg';
import ep11_7 from '../assets/id_11/7.jpg';
import ep11_8 from '../assets/id_11/8.jpg';
import ep11_9 from '../assets/id_11/9.jpg';
import ep11_10 from '../assets/id_11/10.jpg';
import ep11_11 from '../assets/id_11/11.jpg';
import ep11_12 from '../assets/id_11/12.jpg';
import ep11_13 from '../assets/id_11/13.jpg';

const ep11Images = [ep11_1, ep11_2, ep11_3, ep11_4, ep11_5, ep11_6, ep11_7, ep11_8, ep11_9, ep11_10, ep11_11, ep11_12, ep11_13];

// Import episode images from id_12 folder
import ep12_1 from '../assets/id_12/1.jpg';
import ep12_2 from '../assets/id_12/2.jpg';
import ep12_3 from '../assets/id_12/3.jpg';
import ep12_4 from '../assets/id_12/4.jpg';
import ep12_5 from '../assets/id_12/5.jpg';
import ep12_6 from '../assets/id_12/6.jpg';
import ep12_7 from '../assets/id_12/7.jpg';
import ep12_8 from '../assets/id_12/8.jpg';
import ep12_9 from '../assets/id_12/9.jpg';
import ep12_10 from '../assets/id_12/10.jpg';
import ep12_11 from '../assets/id_12/11.jpg';
import ep12_12 from '../assets/id_12/12.jpg';

const ep12Images = [ep12_1, ep12_2, ep12_3, ep12_4, ep12_5, ep12_6, ep12_7, ep12_8, ep12_9, ep12_10, ep12_11, ep12_12];

// Import episode images from id_13 folder
import ep13_1 from '../assets/id_13/1.jpg';
import ep13_2 from '../assets/id_13/2.jpg';
import ep13_3 from '../assets/id_13/3.jpg';
import ep13_4 from '../assets/id_13/4.jpg';
import ep13_5 from '../assets/id_13/5.jpg';
import ep13_6 from '../assets/id_13/6.jpg';
import ep13_7 from '../assets/id_13/7.jpg';
import ep13_8 from '../assets/id_13/8.jpg';
import ep13_9 from '../assets/id_13/9.jpg';
import ep13_10 from '../assets/id_13/10.jpg';
import ep13_11 from '../assets/id_13/11.jpg';
import ep13_12 from '../assets/id_13/12.jpg';
import ep13_13 from '../assets/id_13/13.jpg';
import ep13_14 from '../assets/id_13/14.jpg';
import ep13_15 from '../assets/id_13/15.jpg';
import ep13_16 from '../assets/id_13/16.jpg';

const ep13Images = [ep13_1, ep13_2, ep13_3, ep13_4, ep13_5, ep13_6, ep13_7, ep13_8, ep13_9, ep13_10, ep13_11, ep13_12, ep13_13, ep13_14, ep13_15, ep13_16];

const activeEpisode = ref(0);
const isPlaying = ref(false);

const episodes = ref([
  { id: 1, title: '第1話', subtitle: '凛太郎と薫子', images: ep1Images, videoId: 'KEIlHZqYfSY', thumbnail: thumb1 },
  { id: 2, title: '第2話', subtitle: '二人の距離', images: ep2Images, videoId: '5KTlvN61vb4', thumbnail: thumb2 },
  { id: 3, title: '第3話', subtitle: '想いの行方', images: ep3Images, videoId: 'Cxeq2IeiZWQ', thumbnail: thumb3 },
  { id: 4, title: '第4話', subtitle: '揺れる心', images: ep4Images, videoId: 'J1CPKlnILL4', thumbnail: thumb4 },
  { id: 5, title: '第5話', subtitle: '告白の時', images: ep5Images, videoId: 'c_yNgIae6i4', thumbnail: thumb5 },
  { id: 6, title: '第6話', subtitle: '新たな一歩', images: ep6Images, videoId: 'orxUSsDnaGQ', thumbnail: thumb6 },
  { id: 7, title: '第7話', subtitle: '二人の約束', images: ep7Images, videoId: '2FNYqlwNRSg', thumbnail: thumb7 },
  { id: 8, title: '第8話', subtitle: '未来へ', images: ep8Images, videoId: 'bWteiUJZcd4', thumbnail: thumb8 },
  { id: 9, title: '第9話', subtitle: '嵐の前の静けさ', images: ep9Images, videoId: 'V82eVUbm_sM', thumbnail: thumb9 },
  { id: 10, title: '第10話', subtitle: '運命の選択', images: ep10Images, videoId: 'sejTGHHsYyY', thumbnail: thumb10 },
  { id: 11, title: '第11話', subtitle: '再会の日', images: ep11Images, videoId: 'lh7R9Z2xSFY', thumbnail: thumb11 },
  { id: 12, title: '第12話', subtitle: '薫る花は凛と咲く', images: ep12Images, videoId: '05Y_hhVntbE', thumbnail: thumb12 },
  { id: 13, title: '第13話', subtitle: '新たなる始まり', images: ep13Images, videoId: 'i5_w0CiLjnI', thumbnail: thumb13 },
]);

// Get current episode filmstrip images (duplicated for seamless loop)
const currentFilmstripImages = computed(() => {
  const images = episodes.value[activeEpisode.value].images;
  // Duplicate images for seamless infinite scroll
  return [...images, ...images];
});

// Track loaded state for each image
const imageLoadedStates = ref({});

const onImageLoad = (idx) => {
  imageLoadedStates.value[idx] = true;
};

const isImageLoaded = (idx) => {
  return imageLoadedStates.value[idx] === true;
};

const staff = ref([
  { role: '原作', name: '三香見サカ (講談社「マガジンポケット」連載)' },
  { role: '監督', name: '橘　秀樹' },
  { role: '脚本', name: '山口宏' },
  { role: 'キャラクターデザイン', name: '高野綾' },
  { role: 'アニメーション制作', name: 'CloverWorks' },
]);

const synopsis = `男子校に通う高校生・紬 凛太郎は、祖父母が営む和菓子屋を手伝いながら、穏やかな日々を送っていた。

ある日、店を訪れた女子高生・和栗 薫子と出会う。お嬢様学校に通う薫子との交流が始まり、二人の距離は少しずつ縮まっていく。

異なる世界に生きる二人が紡ぐ、甘くて優しい青春ラブストーリー。`;

const selectEpisode = (idx) => {
  activeEpisode.value = idx;
  isPlaying.value = false;
  // Reset image loaded states when changing episode
  imageLoadedStates.value = {};
};

const playVideo = () => {
  const currentEp = episodes.value[activeEpisode.value];
  if (currentEp.videoId) {
    isPlaying.value = true;
  }
};
</script>

<template>
  <section id="story" class="story-section" :style="{ backgroundImage: `url(${bgBase})` }">
    <!-- Section Title -->
    <div class="section-header">
      <h2 class="section-title">
        <span class="title-en">STORY</span>
        <span class="title-jp">ーストーリーー</span>
      </h2>
    </div>

    <!-- Episode Tabs -->
    <div class="episode-tabs">
      <span class="tab-label">Introduction</span>
      <div class="tab-divider">|</div>
      <div class="tabs-container">
        <button 
          v-for="(ep, idx) in episodes" 
          :key="ep.id"
          class="tab-btn"
          :class="{ active: idx === activeEpisode }"
          @click="selectEpisode(idx)"
        >
          {{ ep.title }}
        </button>
      </div>
    </div>

    <!-- Current Episode Title -->
    <div class="episode-title">
      <span class="ep-number">{{ episodes[activeEpisode].title }}</span>
      <span class="ep-subtitle">{{ episodes[activeEpisode].subtitle }}</span>
    </div>

    <!-- Episode Filmstrip -->
    <div class="filmstrip-container">
      <div class="filmstrip" :key="activeEpisode">
        <div 
          v-for="(img, idx) in currentFilmstripImages" 
          :key="idx" 
          class="filmstrip-item"
        >
          <!-- Skeleton placeholder -->
          <div v-if="!isImageLoaded(idx)" class="skeleton-wrapper">
            <div class="skeleton"></div>
          </div>
          <!-- Actual image -->
          <img 
            :src="img" 
            :alt="`Episode ${activeEpisode + 1} - ${idx + 1}`"
            :class="{ 'image-loaded': isImageLoaded(idx) }"
            loading="lazy"
            @load="onImageLoad(idx)"
          />
        </div>
      </div>
    </div>

    <!-- Story Content -->
    <div class="story-content">
      <!-- Synopsis -->
      <div class="synopsis-section">
        <h3 class="synopsis-title">STORY</h3>
        <p class="synopsis-text">{{ synopsis }}</p>
      </div>

      <!-- Staff -->
      <div class="staff-section">
        <h3 class="staff-title">STAFF</h3>
        <div class="staff-list">
          <div v-for="s in staff" :key="s.role" class="staff-item">
            <span class="staff-role">{{ s.role }}</span>
            <span class="staff-name">{{ s.name }}</span>
          </div>
        </div>
      </div>

      <!-- Episode Preview -->
      <div class="episode-preview">
        <div class="preview-card" @click="playVideo">
          <div class="preview-inner">
            <!-- Video or Thumbnail -->
            <template v-if="isPlaying && episodes[activeEpisode].videoId">
              <iframe 
                :src="`https://www.youtube.com/embed/${episodes[activeEpisode].videoId}?autoplay=1&rel=0`"
                title="Episode Video"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                class="video-iframe"
              ></iframe>
            </template>
            <template v-else>
              <img 
                v-if="episodes[activeEpisode].thumbnail"
                :src="episodes[activeEpisode].thumbnail" 
                alt="Episode Preview" 
                class="preview-image" 
              />
              <img 
                v-else
                :src="kvImage" 
                alt="Episode Preview" 
                class="preview-image" 
              />
              <div class="preview-overlay">
                <div class="play-icon" v-if="episodes[activeEpisode].videoId">
                  <svg width="80" height="80" viewBox="0 0 100 100">
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
                <div class="preview-info">
                  <span class="preview-ep">{{ episodes[activeEpisode].title }}</span>
                  <span class="preview-title">{{ episodes[activeEpisode].subtitle }}</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-section {
  padding: 80px 40px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-weight: 300;
}

.title-en {
  display: block;
  font-size: 2.5rem;
  letter-spacing: 0.5em;
  color: #9080a8;
}

.title-jp {
  display: block;
  font-size: 0.85rem;
  color: #999;
  margin-top: 8px;
}

/* Episode Tabs */
.episode-tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.tab-label {
  font-size: 0.8rem;
  color: #9080a8;
  letter-spacing: 0.1em;
}

.tab-divider {
  color: #ddd;
}

.tabs-container {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.tab-btn {
  padding: 6px 12px;
  border: none;
  background: transparent;
  font-size: 0.75rem;
  color: #888;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.tab-btn:hover {
  color: #9080a8;
}

.tab-btn.active {
  color: #9080a8;
  border-bottom-color: #9080a8;
  font-weight: 600;
}

/* Episode Title */
.episode-title {
  text-align: center;
  margin-bottom: 30px;
}

.ep-number {
  font-size: 0.9rem;
  color: #c8a8d8;
  margin-right: 10px;
}

.ep-subtitle {
  font-size: 1.3rem;
  color: #7a6090;
  font-weight: 500;
}

/* Filmstrip */
.filmstrip-container {
  width: 100%;
  overflow: hidden;
  margin-bottom: 50px;
}

.filmstrip {
  display: flex;
  gap: 5px;
  animation: scrollFilmstrip 40s linear infinite;
  width: max-content;
  
}

.filmstrip-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  transition: filter 0.3s ease, transform 0.3s ease, opacity 0.5s ease;
  opacity: 0;
}

.filmstrip-item img.image-loaded {
  opacity: 1;
}

.filmstrip-item:hover img.image-loaded {
  filter: brightness(1);
  transform: scale(1.05);
}

@keyframes scrollFilmstrip {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Skeleton Loading */
.skeleton-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.skeleton {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #e8e0f0 0%,
    #f5f0fa 50%,
    #e8e0f0 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
  border-radius: 4px;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.filmstrip-item {
  flex-shrink: 0;
  width: 560px;
  height: 360px;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
}

/* Story Content */
.story-content {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.synopsis-section,
.staff-section {
  padding: 20px 0;
}

.synopsis-title,
.staff-title {
  font-size: 0.9rem;
  color: #9080a8;
  letter-spacing: 0.2em;
  margin-bottom: 15px;
  font-weight: 500;
}

.synopsis-text {
  font-size: 0.9rem;
  line-height: 2;
  color: #555;
  white-space: pre-line;
}

.staff-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.staff-item {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
}

.staff-role {
  color: #888;
  min-width: 120px;
}

.staff-name {
  color: #555;
}

/* Episode Preview */
.episode-preview {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.preview-card {
  width: 600px;
  max-width: 90vw;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.preview-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
}

.preview-inner {
  width: 100%;
  height: 100%;
  position: relative;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-overlay {
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

.preview-card:hover .play-icon {
  transform: translate(-50%, -50%) scale(1.1);
}

.preview-info {
  text-align: center;
  color: white;
}

.preview-ep {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.preview-title {
  display: block;
  font-size: 0.8rem;
  opacity: 0.8;
}

.video-iframe {
  width: 100%;
  height: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .story-section {
    padding: 60px 20px;
  }

  .story-content {
    grid-template-columns: 1fr;
  }

  .filmstrip-item {
    width: 200px;
    height: 150px;
  }

  .preview-card {
    width: 100%;
    max-width: 350px;
  }
}
</style>
