<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';

// Import assets
import thumb1 from '../assets/chara_thumb_1.png';
import thumb2 from '../assets/chara_thumb_2.png';
import thumb3 from '../assets/chara_thumb_3.png';
import thumb4 from '../assets/chara_thumb_4.png';
import thumb5 from '../assets/chara_thumb_5.png';
import thumb6 from '../assets/chara_thumb_6.png';

import main1 from '../assets/img_main_chara_1.png';
import main2 from '../assets/img_main_chara_2.png';
import main3 from '../assets/img_main_chara_3.png';
import main4 from '../assets/img_main_chara_4.png';
import main5 from '../assets/img_main_chara_5.png';
import main6 from '../assets/img_main_chara_6.png';

import sub1 from '../assets/img_sub_chara_1.png';
import sub2 from '../assets/img_sub_chara_2.png';
import sub3 from '../assets/img_sub_chara_3.png';
import sub4 from '../assets/img_sub_chara_4.png';
import sub5 from '../assets/img_sub_chara_5.png';
import sub6 from '../assets/img_sub_chara_6.png';

import bgBase from '../assets/bg_base.jpg';
import charaBgL from '../assets/chara_bg_L.png';
import charaBgR from '../assets/chara_bg_R.png';
import charaNameBg from '../assets/chara_name_bg.png';

// Character data
const characters = ref([
  {
    id: 1,
    name: '和栗 薫子',
    nameEn: 'Kaoruko Waguri',
    cv: '井上ほの花',
    cvEn: 'Honoka Inoue',
    description: '食べることが大好きで、月に1〜2回程度、春太郎の実家のケーキ屋を利用している。何事にもまっすぐな性格。',
    birthday: '7/22',
    height: '148cm',
    bloodType: 'B',
    zodiac: '蟹',
    favorite: 'ケーキ、シチュー',
    hobby: '読書、弟とドラマ鑑賞',
    qa1_q: '休日の過ごし方は？',
    qa1_a: 'お洋服買いに行ったりします！何も用事がないときは勉強してます',
    qa2_q: '何してる時が一番幸せ？',
    qa2_a: 'ごはんを食べてる時と、たまにするお昼寝！',
    thumb: thumb1,
    main: main1,
    sub: sub1,
    color: '#d4a5c9'
  },
  {
    id: 2,
    name: '桜井 凛',
    nameEn: 'Rin Sakurai',
    cv: '早見沙織',
    cvEn: 'Saori Hayami',
    description: 'クールで無口だが、実は優しい心の持ち主。ピアノが得意で、音楽室でよく練習している。',
    birthday: '3/3',
    height: '162cm',
    bloodType: 'A',
    zodiac: '魚',
    favorite: '紅茶、チョコレート',
    hobby: 'ピアノ、読書',
    qa1_q: '休日の過ごし方は？',
    qa1_a: 'ピアノの練習をしています。たまに美術館にも行きます。',
    qa2_q: '何してる時が一番幸せ？',
    qa2_a: '静かな場所で本を読んでいる時です。',
    thumb: thumb2,
    main: main2,
    sub: sub2,
    color: '#a5c9d4'
  },
  {
    id: 3,
    name: '天野 美咲',
    nameEn: 'Misaki Amano',
    cv: '水瀬いのり',
    cvEn: 'Inori Minase',
    description: '純粋で素直な後輩。先輩に憧れており、いつも一生懸命ついていく。お菓子作りが趣味。',
    birthday: '12/24',
    height: '152cm',
    bloodType: 'O',
    zodiac: '山羊',
    favorite: 'プリン、いちご',
    hobby: 'お菓子作り、アニメ',
    qa1_q: '休日の過ごし方は？',
    qa1_a: 'お菓子を作ったり、友達と遊んだりしています！',
    qa2_q: '何してる時が一番幸せ？',
    qa2_a: '先輩と一緒にいる時です！',
    thumb: thumb3,
    main: main3,
    sub: sub3,
    color: '#f5d76e'
  },
  {
    id: 4,
    name: '高橋 雪',
    nameEn: 'Yuki Takahashi',
    cv: '悠木碧',
    cvEn: 'Aoi Yuki',
    description: '厳格な生徒会長だが、実は可愛いものが大好き。学校の秩序を守るため日々奔走している。',
    birthday: '1/8',
    height: '165cm',
    bloodType: 'AB',
    zodiac: '山羊',
    favorite: 'ぬいぐるみ、抹茶',
    hobby: 'ぬいぐるみ収集',
    qa1_q: '休日の過ごし方は？',
    qa1_a: '生徒会の仕事をしています...たまにぬいぐるみを見に行きます。',
    qa2_q: '何してる時が一番幸せ？',
    qa2_a: '...秘密です。',
    thumb: thumb4,
    main: main4,
    sub: sub4,
    color: '#c9a5d4'
  },
  {
    id: 5,
    name: '森 葵',
    nameEn: 'Aoi Mori',
    cv: '上坂すみれ',
    cvEn: 'Sumire Uesaka',
    description: '物静かで本が大好きな図書委員。控えめだが、好きなことには熱中する一面も。',
    birthday: '9/22',
    height: '155cm',
    bloodType: 'A',
    zodiac: '乙女',
    favorite: '緑茶、和菓子',
    hobby: '読書、天体観測',
    qa1_q: '休日の過ごし方は？',
    qa1_a: '図書館で本を読んでいます...夜は星を見ます。',
    qa2_q: '何してる時が一番幸せ？',
    qa2_a: '好きな本の世界に入り込んでいる時...',
    thumb: thumb5,
    main: main5,
    sub: sub5,
    color: '#a5d4c9'
  },
  {
    id: 6,
    name: '白石 月',
    nameEn: 'Tsuki Shiraishi',
    cv: '佐倉綾音',
    cvEn: 'Ayane Sakura',
    description: 'ミステリアスな雰囲気の転校生。何か秘密を抱えているようだが、その正体は誰も知らない。',
    birthday: '10/31',
    height: '160cm',
    bloodType: '?',
    zodiac: '蠍',
    favorite: '秘密',
    hobby: '秘密',
    qa1_q: '休日の過ごし方は？',
    qa1_a: 'ふふ...知りたい？',
    qa2_q: '何してる時が一番幸せ？',
    qa2_a: 'それは秘密よ。',
    thumb: thumb6,
    main: main6,
    sub: sub6,
    color: '#d4c9a5'
  }
]);

const activeIndex = ref(0);
const mainImgRef = ref(null);
const infoRef = ref(null);
const bubbleRef = ref(null);
const expressionRef = ref(null);
const infoHeaderRef = ref(null);
const showBubble = ref(false);

// Hover handlers for character
const onCharaEnter = () => {
  showBubble.value = true;
  gsap.fromTo(bubbleRef.value,
    { opacity: 0, scale: 0.8, y: 10 },
    { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "back.out(1.7)" }
  );
};

const onCharaLeave = () => {
  gsap.to(bubbleRef.value, {
    opacity: 0,
    scale: 0.8,
    y: 10,
    duration: 0.2,
    onComplete: () => { showBubble.value = false; }
  });
};

const activeChar = computed(() => characters.value[activeIndex.value]);

const selectChar = (idx) => {
  if (idx === activeIndex.value) return;
  
  // Main character fade out
  gsap.to(mainImgRef.value, {
    opacity: 0,
    x: -20,
    duration: 0.2,
    onComplete: () => {
      activeIndex.value = idx;
      gsap.fromTo(mainImgRef.value, 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  });

  // Expression fade out and in
  gsap.to(expressionRef.value, {
    opacity: 0,
    scale: 0.9,
    duration: 0.2,
    onComplete: () => {
      gsap.fromTo(expressionRef.value, 
        { opacity: 0, scale: 0.9, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out", delay: 0.1 }
      );
    }
  });

  // Info panel fade
  gsap.to(infoRef.value, {
    opacity: 0,
    duration: 0.15,
    onComplete: () => {
      gsap.to(infoRef.value, { opacity: 1, duration: 0.25, delay: 0.1 });
    }
  });

  // Info header STAMP animation
  gsap.fromTo(infoHeaderRef.value, 
    { opacity: 0, scale: 1.5, rotation: -5 },
    { opacity: 1, scale: 1, rotation: 0, duration: 0.35, ease: "back.out(2)", delay: 0.15 }
  );
};

onMounted(() => {
  // Thumbnail animation - ensure opacity ends at 1
  gsap.fromTo('.thumb-icon', 
    { opacity: 0, y: -15 },
    { 
      opacity: 1, 
      y: 0, 
      stagger: 0.08, 
      duration: 0.4, 
      ease: "power2.out",
      clearProps: "all" // Clear inline styles after animation
    }
  );
  
  gsap.fromTo('.main-card', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6, 
      delay: 0.3, 
      ease: "power3.out",
      clearProps: "all"
    }
  );
});
</script>

<template>
  <div id="character" class="page" :style="{ backgroundImage: `url(${bgBase})` }">
    
    <!-- Title -->
    <div class="title-area">
      <span class="title-en">CHARACTER</span>
      <span class="title-line">ーキャラクターー</span>
    </div>

    <!-- Thumbnails -->
    <div class="thumb-row">
      <div 
        v-for="(c, i) in characters" 
        :key="c.id"
        class="thumb-icon"
        :class="{ active: i === activeIndex }"
        @click="selectChar(i)"
      >
        <img :src="c.thumb" :alt="c.name" />
      </div>
    </div>

    <!-- Main Card -->
    <div class="main-card">
      <!-- Side Bindings -->
      <img :src="charaBgL" class="binding binding-left" alt="" />
      <img :src="charaBgR" class="binding binding-right" alt="" />
      <!-- Character Visual Section -->
      <div class="card-visual">
        <!-- Left: Character Image -->
        <div class="card-chara">
          <img ref="mainImgRef" :src="activeChar.main" :alt="activeChar.name" class="chara-img" />
        </div>

        <!-- Right: Expression Images -->
        <div class="card-expressions" ref="expressionRef">
          <img :src="activeChar.sub" class="expr-img" />
        </div>
      </div>

      <!-- Right: Info Panel -->
      <div class="card-info" ref="infoRef">
        <!-- Name -->
        <div class="info-header" ref="infoHeaderRef">
          <img :src="charaNameBg" alt="" class="name-bg" />
          <div class="name-box">
            <h1 class="name-jp">{{ activeChar.name }}</h1>
            <span class="name-en">{{ activeChar.nameEn }}</span>
          </div>
        </div>

        <!-- CV -->
        <div class="cv-row">
          <span class="cv-label">CV</span>
          <span class="cv-name">{{ activeChar.cv }}</span>
          <button class="cast-btn">CAST<br/>PROFILE</button>
        </div>

        <!-- Description -->
        <p class="description">{{ activeChar.description }}</p>

        <!-- Stats Table -->
        <div class="stats-table">
          <div class="stat-row">
            <span class="stat-label">誕生日</span>
            <span class="stat-value">{{ activeChar.birthday }}</span>
            <span class="stat-label">身長</span>
            <span class="stat-value">{{ activeChar.height }}</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">血液型</span>
            <span class="stat-value">{{ activeChar.bloodType }}</span>
            <span class="stat-label">星座</span>
            <span class="stat-value">{{ activeChar.zodiac }}</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">好物</span>
            <span class="stat-value wide">{{ activeChar.favorite }}</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">趣味</span>
            <span class="stat-value wide">{{ activeChar.hobby }}</span>
          </div>
        </div>

        <!-- Q&A -->
        <div class="qa-section">
          <div class="qa-item">
            <p class="qa-q">{{ activeChar.qa1_q }}</p>
            <p class="qa-a">{{ activeChar.qa1_a }}</p>
          </div>
          <div class="qa-item">
            <p class="qa-q">{{ activeChar.qa2_q }}</p>
            <p class="qa-a">{{ activeChar.qa2_a }}</p>
          </div>
        </div>
      </div>

      <!-- Decorative Tapes -->
      <div class="tape tape-tl"></div>
      <div class="tape tape-tr"></div>
      <div class="tape tape-bl"></div>
      <div class="tape tape-br"></div>
    </div>

  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background-image: url('../assets/bg_watercolor.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 80px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Title */
.title-area {
  text-align: center;
  margin-bottom: 20px;
}

.title-en {
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: 0.4em;
  color: #555;
}

.title-line {
  display: block;
  font-size: 0.8rem;
  color: #999;
  margin-top: 5px;
}

/* Thumbnails */
.thumb-row {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  justify-content: center;
}

.thumb-icon {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid #e0d8e8;
  transition: all 0.25s ease;
  background: white;
}

.thumb-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-icon:hover {
  transform: scale(1.1);
  border-color: #c8b8d8;
}

.thumb-icon.active {
  border-color: #9080a8;
  transform: scale(1.15);
  box-shadow: 0 4px 15px rgba(140, 120, 170, 0.4);
}

/* Main Card */
.main-card {
  display: flex;
  background: rgba(255, 255, 255, 0.95);
  border: 4px solid #d8c8e8;
  border-radius: 16px;
  padding: 25px 35px;
  max-width: 900px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 40px rgba(150, 130, 180, 0.15);
}

/* Side Bindings */
.binding {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height:40%;
  max-height: 300px;
  width: auto;
  z-index: 5;
}

.binding-left {
  left: -25px;
}

.binding-right {
  right: -25px;
}

/* Card Visual Container */
.card-visual {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 15px;
}

/* Character Image */
.card-chara {
  flex: 0 0 220px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  top : -100px;
  cursor: pointer;
}

.chara-img {
  max-height: 380px;
  width: auto;
}

/* Expression Images */
.card-expressions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  margin-bottom: 30%;
  justify-content: center;
}

.expr-img {
  width: 100px;
  height: auto;
  border-radius: 12px;
  border: none;

}



@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Info Panel */
.card-info {
  flex: 1;
  padding-left: 20px;
  border-left: 2px solid #e8e0f0;
}

.info-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding: 20px 0;
}

.name-bg {
  position: absolute;
  width: 100%;
  max-width: 280px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.name-box {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.name-jp {
  font-size: 1.0rem;
  font-weight: 600;
  color: #4a4a6a;
  margin: 0;
}

.name-en {
  font-size: 0.75rem;
  color: #888;
  margin-top: 15px;
}

.sound-btn {
  background: #a8d8a0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  font-size: 0.9rem;
}

/* CV Row */
.cv-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  padding: 8px 12px;
  background: #f8f4fc;
  border-radius: 8px;
}

.cv-label {
  background: #d8c8e8;
  color: white;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.cv-name {
  flex: 1;
  font-size: 0.9rem;
  color: #555;
}

.cast-btn {
  background: #b8a0c8;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 5px 12px;
  font-size: 0.65rem;
  line-height: 1.3;
  cursor: pointer;
}

/* Description */
.description {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.7;
  margin: 0 0 15px 0;
}

/* Stats Table */
.stats-table {
  margin-bottom: 15px;
}

.stat-row {
  display: flex;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px dashed #e0d8e8;
}

.stat-label {
  width: 50px;
  font-size: 0.7rem;
  color: #999;
}

.stat-value {
  width: 70px;
  font-size: 0.8rem;
  color: #555;
}

.stat-value.wide {
  flex: 1;
}

/* Q&A Section */
.qa-section {
  background: #f8f4fc;
  border-radius: 8px;
  padding: 12px;
}

.qa-item {
  margin-bottom: 10px;
}

.qa-item:last-child {
  margin-bottom: 0;
}

.qa-q {
  font-size: 0.8rem;
  color: #888;
  margin: 0 0 4px 0;
}

.qa-a {
  font-size: 0.85rem;
  color: #b87d9e;
  margin: 0;
  padding-left: 10px;
}

/* Decorative Tapes */
.tape {
  position: absolute;
  width: 60px;
  height: 20px;
  background: linear-gradient(135deg, #c8b8d8 0%, #d8c8e8 100%);
  opacity: 0.7;
}

.tape-tl {
  top: -8px;
  left: 30px;
  transform: rotate(-15deg);
}

.tape-tr {
  top: -8px;
  right: 30px;
  transform: rotate(15deg);
}

.tape-bl {
  bottom: -8px;
  left: 30px;
  transform: rotate(15deg);
}

.tape-br {
  bottom: -8px;
  right: 30px;
  transform: rotate(-15deg);
}

/* Responsive - Tablet */
@media (max-width: 1024px) {
  .main-card {
    padding: 20px;
    gap: 20px;
  }

  .chara-img {
    max-height: 350px;
  }

  .deco-left,
  .deco-right {
    width: 60px;
  }
}

/* Responsive - Small Tablet / Large Mobile */
@media (max-width: 800px) {
  .page {
    padding: 50px 15px 20px 15px;
  }

  .title-area {
    margin-bottom: 15px;
  }

  .title-en {
    font-size: 1.3rem;
    letter-spacing: 0.3em;
  }

  .title-line {
    font-size: 0.7rem;
  }

  .thumb-row {
    gap: 6px;
    margin-bottom: 15px;
  }

  .thumb-icon {
    width: 42px;
    height: 42px;
    border-width: 2px;
  }

  .main-card {
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-radius: 15px;
  }

  .card-visual {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  
  .card-chara {
    order: 1;
    flex: 0 0 auto;
    top: 0;
  }

  .chara-img {
    max-height: 200px;
  }

  .card-expressions {
    order: 2;
    flex-direction: column;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding: 5px;
  }

  .expr-img {
    width: 50px;
    height: auto;
    max-height: 120px;
    object-fit: contain;
    border-radius: 8px;
  }
  
  .card-info {
    order: 3;
    padding-left: 0;
    border-left: none;
    border-top: 1px solid #e8e0f0;
    padding-top: 15px;
    margin-top: 10px;
    width: 100%;
  }

  .info-header {
    padding: 15px 0;
  }

  .name-bg {
    max-width: 180px;
  }

  .name-jp {
    font-size: 0.85rem;
  }

  .name-en {
    font-size: 0.6rem;
    margin-top: 10px;
  }

  .cv-row {
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .cv-label {
    font-size: 0.65rem;
    padding: 3px 10px;
  }

  .cv-name {
    font-size: 0.75rem;
  }

  .cast-btn {
    font-size: 0.5rem;
    padding: 4px 10px;
  }

  .description {
    font-size: 0.75rem;
    line-height: 1.6;
    text-align: center;
  }

  .stats-table {
    font-size: 0.7rem;
  }

  .stat-label {
    padding: 6px 8px;
  }

  .stat-value {
    padding: 6px 8px;
  }

  .deco-left,
  .deco-right,
  .binding {
    display: none;
  }
}

/* Responsive - Mobile */
@media (max-width: 480px) {
  .page {
    padding: 45px 10px 15px 10px;
  }

  .title-en {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
  }

  .title-line {
    font-size: 0.6rem;
  }

  .thumb-row {
    gap: 4px;
  }

  .thumb-icon {
    width: 35px;
    height: 35px;
  }

  .main-card {
    padding: 12px;
    border-radius: 12px;
  }

  .chara-img {
    max-height: 180px;
  }

  .expr-img {
    width: 60px;
    height: auto;
    max-height: 160px;
  }

  .name-bg {
    max-width: 150px;
  }

  .name-jp {
    font-size: 0.75rem;
  }

  .name-en {
    font-size: 0.55rem;
  }

  .cv-label {
    font-size: 0.6rem;
  }

  .cv-name {
    font-size: 0.7rem;
  }

  .cast-btn {
    font-size: 0.45rem;
    padding: 3px 8px;
  }

  .description {
    font-size: 0.7rem;
  }

  .stats-table {
    font-size: 0.65rem;
  }
}
</style>
