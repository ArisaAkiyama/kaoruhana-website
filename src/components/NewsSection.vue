<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);

// News data
const news = ref([
  {
    id: 1,
    date: '2025.01.15',
    category: 'NEWS',
    categoryColor: '#9080a8',
    title: 'TVアニメ「薫る花は凛と咲く」2025年7月より放送開始決定！',
    isNew: true
  },
  {
    id: 2,
    date: '2025.01.10',
    category: 'GOODS',
    categoryColor: '#e8a4b8',
    title: 'アニメ放送記念グッズの発売が決定しました',
    isNew: true
  },
  {
    id: 3,
    date: '2025.01.05',
    category: 'EVENT',
    categoryColor: '#a4c8e8',
    title: 'スペシャルイベント開催決定！詳細は後日発表',
    isNew: false
  },
  {
    id: 4,
    date: '2024.12.28',
    category: 'NEWS',
    categoryColor: '#9080a8',
    title: 'キャスト情報を公開しました',
    isNew: false
  },
  {
    id: 5,
    date: '2024.12.20',
    category: 'MOVIE',
    categoryColor: '#a4e8c8',
    title: '新PVを公開しました',
    isNew: false
  }
]);

onMounted(() => {
  gsap.from('.news-title', {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%'
    },
    opacity: 0,
    y: 20,
    duration: 0.6
  });

  gsap.from('.news-item', {
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 70%'
    },
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5
  });
});
</script>

<template>
  <section id="news" class="news-section" ref="sectionRef">
    <div class="news-container">
      <!-- Title -->
      <div class="news-title">
        <span class="title-en">NEWS</span>
        <span class="title-jp">ーニュースー</span>
      </div>

      <!-- News List -->
      <div class="news-list">
        <a 
          v-for="item in news" 
          :key="item.id" 
          href="#" 
          class="news-item"
        >
          <span class="news-date">{{ item.date }}</span>
          <span class="news-category" :style="{ backgroundColor: item.categoryColor }">
            {{ item.category }}
          </span>
          <span class="news-text">{{ item.title }}</span>
          <span v-if="item.isNew" class="news-new">NEW</span>
        </a>
      </div>

      <!-- View More Button -->
      <div class="news-more">
        <a href="#" class="more-btn">VIEW MORE</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-section {
  padding: 80px 40px;
  background-image: url('../assets/bg_watercolor.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.news-container {
  max-width: 900px;
  margin: 0 auto;
}

/* Title */
.news-title {
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

/* News List */
.news-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e8e0f0;
}

.news-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #e8e0f0;
  text-decoration: none;
  transition: background 0.3s ease;
}

.news-item:hover {
  background: #f8f4fc;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: -15px;
  margin-right: -15px;
}

.news-date {
  flex-shrink: 0;
  font-size: 0.85rem;
  color: #888;
  width: 90px;
}

.news-category {
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
}

.news-text {
  flex: 1;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
}

.news-new {
  flex-shrink: 0;
  padding: 3px 10px;
  background: #ff6b8a;
  border-radius: 3px;
  font-size: 0.65rem;
  font-weight: 700;
  color: white;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

/* View More Button */
.news-more {
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

/* Responsive */
@media (max-width: 768px) {
  .news-section {
    padding: 40px 15px;
  }

  .news-title {
    margin-bottom: 25px;
  }

  .title-en {
    font-size: 1.3rem;
    letter-spacing: 0.3em;
  }

  .title-jp {
    font-size: 0.7rem;
  }

  .news-item {
    flex-wrap: wrap;
    gap: 8px;
    padding: 15px 0;
  }

  .news-date {
    width: auto;
    font-size: 0.75rem;
  }

  .news-category {
    font-size: 0.6rem;
    padding: 3px 8px;
  }

  .news-text {
    width: 100%;
    order: 4;
    font-size: 0.85rem;
  }

  .news-new {
    font-size: 0.55rem;
    padding: 2px 8px;
  }

  .more-btn {
    padding: 10px 30px;
    font-size: 0.75rem;
  }

  .news-more {
    margin-top: 25px;
  }
}

@media (max-width: 400px) {
  .news-section {
    padding: 30px 10px;
  }

  .title-en {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
  }

  .news-item {
    padding: 12px 0;
  }

  .news-date {
    font-size: 0.65rem;
  }

  .news-category {
    font-size: 0.5rem;
    padding: 2px 6px;
  }

  .news-text {
    font-size: 0.75rem;
  }

  .more-btn {
    padding: 8px 25px;
    font-size: 0.7rem;
  }
}
</style>
