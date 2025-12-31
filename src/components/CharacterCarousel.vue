<script setup>
import { ref, computed, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

// Refs for scroll animation
const thumbRowRef = ref(null);
const mainCardRef = ref(null);

// Character data
const characters = ref([
  {
    id: 1,
    name: '紬 凛太郎',
    nameEn: 'Rintaro Tsumugi',
    cv: '中山祥徳',
    cvEn: 'Yoshinori Nakayama',
    description: '長身・金髪・強面・物静か。そんな見た目から周囲に「不良」「怖い人」と言われている。実家はケーキ屋で、たまに手伝いをしている。',
    birthday: '1/28',
    height: '190cm',
    bloodType: 'A',
    zodiac: '水瓶',
    favorite: '和食、いちご',
    hobby: '料理、CD集め',
    qa1_q: '大切にしているものは？',
    qa1_a: '兄ちゃんが入学祝いに買ってくれた靴',
    qa2_q: '最近の悩みは？',
    qa2_a: '宇佐美が授業中に後ろ向くたび変顔して笑わせてくること',
    thumb: thumb1,
    main: main1,
    sub: sub1,
    color: '#d4a5c9'
  },
  {
    id: 2,
    name: '和栗 薫子',
    nameEn: 'Kaoruko Waguri',
    cv: '井上ほの花',
    cvEn: 'Honoka Inoue',
    description: '食べることが大好きで、月に１～2回程度、凛太郎の実家のケーキ屋を利用している。何事にもまっすぐな性格。',
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
    thumb: thumb2,
    main: main2,
    sub: sub2,
    color: '#a5c9d4'
  },
  {
    id: 3,
    name: '宇佐美 翔平',
    nameEn: 'Shohei Usami',
    cv: '戸谷菊之介',
    cvEn: 'Kikunosuke Toya',
    description: '凛太郎のクラスメイトで友人。成績は悪いが、いつも明るいムードメーカー。隠し事が苦手で、気になることや思ったことはすぐ口に出してしまう。',
    birthday: '5/27',
    height: '173cm',
    bloodType: 'B',
    zodiac: '双子',
    favorite: 'ラーメン！からあげ！ハンバーグ！オムライス！',
    hobby: 'スニーカー集め',
    qa1_q: '得意なことは？',
    qa1_a: 'なんかのイラストかくこと！小さいころから妹と弟によくかいてやってた！',
    qa2_q: '',
    qa2_a: '',
    thumb: thumb3,
    main: main3,
    sub: sub3,
    color: '#f5d76e'
  },
  {
    id: 4,
    name: '夏沢 朔',
    nameEn: 'Saku Natsuzawa',
    cv: '内山昂輝',
    cvEn: 'Koki Uchiyama',
    description: '凛太郎のクラスメイトで友人。普段はクールだが、実はとても友達想い。成績優秀で、定期試験前には凛太郎たちに勉強を教えている。',
    birthday: '8/21',
    height: '176cm',
    bloodType: 'A',
    zodiac: '獅子',
    favorite: 'ドーナツ、あんみつ',
    hobby: '洋楽漁ること、動物映画観賞',
    qa1_q: '最近つらいことは？',
    qa1_a: '姉と妹の買い物に付き合わされて、荷物持ちさせられること',
    qa2_q: '1日で1番好きな時間は？',
    qa2_a: '湯舟に浸かってぼーっとする時間',
    thumb: thumb4,
    main: main4,
    sub: sub4,
    color: '#c9a5d4'
  },
  {
    id: 5,
    name: '依田 絢斗',
    nameEn: 'Ayato Yoda',
    cv: '石橋陽彩',
    cvEn: 'Hisai Ishibashi',
    description: '凛太郎のクラスメイトで友人。周りをよく見ていて、翔平たちをなだめることが多い。実は怒らせると一番怖い…⁉',
    birthday: '3/16',
    height: '163cm',
    bloodType: 'O',
    zodiac: 'うお',
    favorite: 'すっぱいもの',
    hobby: 'スノーボード',
    qa1_q: 'マイブームは？',
    qa1_a: '凛太郎たちを隠し撮りすること！',
    qa2_q: '子供の頃の夢は？',
    qa2_a: '恐竜を飼う！',
    thumb: thumb5,
    main: main5,
    sub: sub5,
    color: '#a5d4c9'
  },
  {
    id: 6,
    name: '保科 昴',
    nameEn: 'Subaru Hoshina',
    cv: '山根 綺',
    cvEn: 'Aya Yamane',
    description: '桔梗学園女子高等学校2年A組。薫子の幼馴染でありクラスメイト。小さいときから一緒にいる薫子をとても大切にしている。',
    birthday: '11/19',
    height: '172cm',
    bloodType: 'A',
    zodiac: '蠍',
    favorite: 'コーヒー、お煎餅',
    hobby: 'コーヒー、専門店巡り',
    qa1_q: 'こだわりは何？',
    qa1_a: '朝起きる時には必ずアラーム1回で起きる',
    qa2_q: '1つだけ秘密を教えて！',
    qa2_a: '薫子が着るような可愛い服を着てみたい',
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

const selectChar = (idx, event) => {
  if (idx === activeIndex.value) return;
  
  // Only apply zoom animation on desktop (prevents layout shift on mobile)
  const isMobile = window.innerWidth < 768;
  
  if (!isMobile) {
    // Zoom out all thumbs first
    gsap.to('.thumb-icon', {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
    
    // Zoom in the clicked thumb
    if (event && event.currentTarget) {
      gsap.to(event.currentTarget, {
        scale: 1.15,
        duration: 0.25,
        ease: "power2.out"
      });
    }
  }
  
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
    duration: 0.2,
    onComplete: () => {
      gsap.to(expressionRef.value, { opacity: 1, duration: 0.4, delay: 0.1 });
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

  // Info header STAMP animation - only on desktop to prevent layout shift
  if (window.innerWidth >= 768) {
    gsap.fromTo(infoHeaderRef.value, 
      { opacity: 0, scale: 1.5, rotation: -5 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.5)", delay: 0.2 }
    );
  } else {
    gsap.fromTo(infoHeaderRef.value, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3, delay: 0.2 }
    );
  }
};

// Click zoom animation on character image
const onCharaClick = () => {
  gsap.timeline()
    .to(mainImgRef.value, {
      scale: 1.15,
      duration: 0.2,
      ease: "power2.out"
    })
    .to(mainImgRef.value, {
      scale: 1,
      duration: 0.3,
      ease: "elastic.out(1, 0.5)"
    });
};

onMounted(() => {
  // Set initial state
  gsap.set('.thumb-icon', { opacity: 0, y: -20 });
  // Only apply initial zoom on desktop
  if (window.innerWidth >= 768) {
    gsap.set('.thumb-icon.active', { scale: 1.15 });
  }
  gsap.set('.main-card', { opacity: 0, y: 50 });
  
  // Thumbnail animation with ScrollTrigger
  gsap.to('.thumb-icon', {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: '.thumb-row',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
  
  // Main card animation with ScrollTrigger
  gsap.to('.main-card', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.main-card',
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
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
        @click="selectChar(i, $event)"
      >
        <img :src="c.thumb" :alt="c.name" loading="lazy" />
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
        <div class="card-chara" @click="onCharaClick">
          <img ref="mainImgRef" :src="activeChar.main" :alt="activeChar.name" class="chara-img" loading="lazy" />
        </div>

        <!-- Right: Expression Images -->
        <div class="card-expressions" ref="expressionRef">
          <img :src="activeChar.sub" class="expr-img" loading="lazy" />
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
  min-width: 55px;
  min-height: 55px;
  max-width: 55px;
  max-height: 55px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid #e0d8e8;
  background: white;
  box-sizing: border-box;
  flex-shrink: 0;
}

.thumb-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-icon:hover {
  border-color: #c8b8d8;
}

.thumb-icon.active {
  border-color: #9080a8;
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
  left: -27px;
}

.binding-right {
  right: -27px;
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
  flex: 0 0 277px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  top : -65px;
  cursor: pointer;
}

.chara-img {
  max-height: 479px;
  width: auto;
}

/* Expression Images */
.card-expressions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px;
  margin-bottom: 30%;
  margin-top: 35px;
  justify-content: center;
}

.expr-img {
  width: 126px;
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
    min-width: 42px;
    min-height: 42px;
    max-width: 42px;
    max-height: 42px;
    border-width: 2px;
    transform: scale(1) !important; /* Prevent zoom animation on mobile */
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
