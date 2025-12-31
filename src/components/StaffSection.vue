<script setup>
import { ref } from 'vue';

import bgBase from '../assets/bg_base.jpg';

const sectionRef = ref(null);

// Staff data from official website
const staff = ref([
  { role: '原作', name: '三香見サカ', sub: '『薫る花は凛と咲く』（講談社「マガジンポケット」連載）' },
  { role: '監督', name: '黒木美幸', sub: '' },
  { role: '准監督', name: '山口 智', sub: '' },
  { role: 'シリーズ構成', name: '山崎莉乃', sub: '' },
  { role: 'シリーズ演出', name: '都築 遥', sub: '' },
  { role: 'キャラクターデザイン・総作画監督', name: '徳岡紘平', sub: '' },
  { role: 'サブキャラクターデザイン・衣装デザイン', name: '梅下麻奈未', sub: '' },
  { role: '美術監督', name: '幸喜あすか', sub: '' },
  { role: '美術設定', name: '塩澤良憲', sub: '' },
  { role: '色彩設計', name: '横田明日香', sub: '' },
  { role: '撮影監督', name: '長瀬由起子', sub: '' },
  { role: '3D監督', name: '渡邉啓太', sub: '（サブリメイション）' },
  { role: '編集', name: '新居和弘', sub: '' },
  { role: '音楽', name: '原田萌喜', sub: '' },
  { role: '音響監督', name: '濱野高年', sub: '' },
  { role: '音響制作', name: 'マジックカプセル', sub: '' },
  { role: '制作', name: 'CloverWorks', sub: '' }
]);

// Cast data from official website
const cast = ref([
  { 
    character: '紬 凛太郎', 
    characterEn: 'Rintaro Tsumugi',
    actor: '中山祥徳',
    actorEn: 'Yoshinori Nakayama'
  },
  { 
    character: '和栗 薫子', 
    characterEn: 'Kaoruko Waguri',
    actor: '井上ほの花',
    actorEn: 'Honoka Inoue'
  },
  { 
    character: '宇佐美 翔平', 
    characterEn: 'Shohei Usami',
    actor: '戸谷菊之介',
    actorEn: 'Kikunosuke Toya'
  },
  { 
    character: '夏沢 朔', 
    characterEn: 'Saku Natsuzawa',
    actor: '内山昂輝',
    actorEn: 'Koki Uchiyama'
  },
  { 
    character: '依田 絢斗', 
    characterEn: 'Ayato Yoda',
    actor: '石橋陽彩',
    actorEn: 'Hisai Ishibashi'
  },
  { 
    character: '保科 昴', 
    characterEn: 'Subaru Hoshina',
    actor: '山根 綺',
    actorEn: 'Aya Yamane'
  }
]);
</script>

<template>
  <section id="staff" class="staff-section" ref="sectionRef" :style="{ backgroundImage: `url(${bgBase})` }">
    <div class="staff-container">
      
      <!-- Section Title -->
      <div class="staff-title">
        <span class="title-en">STAFF & CAST</span>
        <span class="title-jp">ースタッフ＆キャストー</span>
      </div>

      <!-- Cast Section -->
      <div class="cast-section">
        <h3 class="subsection-title">CAST</h3>
        <div class="cast-grid">
          <div v-for="c in cast" :key="c.character" class="cast-card">
            <div class="cast-character">
              <span class="character-name">{{ c.character }}</span>
              <span class="character-en">{{ c.characterEn }}</span>
            </div>
            <div class="cast-divider"></div>
            <div class="cast-actor">
              <span class="cv-label">CV</span>
              <span class="actor-name">{{ c.actor }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Staff Section -->
      <div class="staff-list-section">
        <h3 class="subsection-title">STAFF</h3>
        <div class="staff-grid">
          <div v-for="s in staff" :key="s.role" class="staff-item">
            <span class="staff-role">{{ s.role }}</span>
            <span class="staff-name">{{ s.name }}</span>
            <span v-if="s.sub" class="staff-sub">{{ s.sub }}</span>
          </div>
        </div>
      </div>

      <!-- Production Credit -->
      <div class="production-credit">
        <span class="credit-label">アニメーション制作</span>
        <span class="credit-name">CloverWorks</span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.staff-section {
  padding: 80px 40px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
}

.staff-section::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.staff-container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Title */
.staff-title {
  text-align: center;
  margin-bottom: 50px;
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

/* Subsection Title */
.subsection-title {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.3em;
  color: #9080a8;
  margin-bottom: 30px;
  position: relative;
}

.subsection-title::before,
.subsection-title::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c8a8d8);
}

.subsection-title::before {
  right: calc(50% + 60px);
}

.subsection-title::after {
  left: calc(50% + 60px);
  background: linear-gradient(90deg, #c8a8d8, transparent);
}

/* Cast Section */
.cast-section {
  margin-bottom: 60px;
}

.cast-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.cast-card {
  background: #fff;
  border: 1px solid #e8e0f0;
  border-radius: 12px;
  padding: 25px 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(150, 130, 180, 0.1);
  transition: all 0.3s ease;
}

.cast-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(150, 130, 180, 0.2);
  border-color: #c8a8d8;
}

.cast-character {
  margin-bottom: 15px;
}

.character-name {
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a4a6a;
  letter-spacing: 0.1em;
}

.character-en {
  display: block;
  font-size: 0.75rem;
  color: #999;
  margin-top: 5px;
}

.cast-divider {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #c8a8d8, #a8d8c8);
  margin: 0 auto 15px;
  border-radius: 1px;
}

.cast-actor {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.cv-label {
  background: #9080a8;
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
}

.actor-name {
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
}

/* Staff Section */
.staff-list-section {
  margin-bottom: 50px;
}

.staff-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.staff-item {
  display: flex;
  align-items: baseline;
  gap: 15px;
  padding: 12px 20px;
  background: #fff;
  border-radius: 8px;
  border-left: 3px solid #c8a8d8;
}

.staff-role {
  min-width: 180px;
  font-size: 0.8rem;
  color: #888;
}

.staff-name {
  font-size: 0.95rem;
  color: #555;
  font-weight: 500;
}

.staff-sub {
  font-size: 0.75rem;
  color: #999;
}

/* Production Credit */
.production-credit {
  text-align: center;
  padding: 30px;
  background: linear-gradient(135deg, #c8a8d8 0%, #a8c8d8 100%);
  border-radius: 12px;
  color: white;
}

.credit-label {
  display: block;
  font-size: 0.85rem;
  opacity: 0.9;
  margin-bottom: 8px;
}

.credit-name {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.2em;
}

/* Responsive */
@media (max-width: 900px) {
  .cast-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .staff-grid {
    grid-template-columns: 1fr;
  }
  
  .staff-role {
    min-width: 140px;
  }
}

@media (max-width: 600px) {
  .staff-section {
    padding: 50px 20px;
  }
  
  .title-en {
    font-size: 1.4rem;
    letter-spacing: 0.3em;
  }
  
  .cast-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .cast-card {
    padding: 20px 15px;
  }
  
  .character-name {
    font-size: 1rem;
  }
  
  .staff-item {
    flex-direction: column;
    gap: 5px;
    padding: 15px;
  }
  
  .staff-role {
    min-width: auto;
    font-size: 0.75rem;
  }
  
  .subsection-title::before,
  .subsection-title::after {
    width: 30px;
  }
  
  .subsection-title::before {
    right: calc(50% + 40px);
  }
  
  .subsection-title::after {
    left: calc(50% + 40px);
  }
  
  .credit-name {
    font-size: 1.2rem;
  }
}

@media (max-width: 400px) {
  .staff-section {
    padding: 40px 15px;
  }
  
  .title-en {
    font-size: 1.2rem;
  }
  
  .title-jp {
    font-size: 0.7rem;
  }
}
</style>
