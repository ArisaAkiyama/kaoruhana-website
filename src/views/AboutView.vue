<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = ref([
  { name: 'Vue.js', level: 90, icon: '💚' },
  { name: 'JavaScript', level: 85, icon: '⚡' },
  { name: 'CSS/SASS', level: 88, icon: '🎨' },
  { name: 'Animation (GSAP)', level: 80, icon: '✨' },
  { name: 'UI/UX Design', level: 75, icon: '🎯' }
]);

onMounted(() => {
  gsap.from('.about-card', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%'
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('.skills-section', {
    scrollTrigger: {
      trigger: '.skills-section',
      start: 'top 80%'
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Animate skill bars
  gsap.from('.skill-progress', {
    scrollTrigger: {
      trigger: '.skills-list',
      start: 'top 80%'
    },
    scaleX: 0,
    transformOrigin: 'left',
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  });
});
</script>

<template>
  <div class="about-page">
    <div class="about-header">
      <span class="section-tag">Tentang Saya</span>
      <h1>Mengenal Lebih Dekat</h1>
      <p class="subtitle">Passionate developer dengan fokus pada animasi web interaktif</p>
    </div>

    <div class="about-content">
      <div class="about-card">
        <div class="profile-image">
          <div class="image-placeholder">
            <span>👩‍💻</span>
          </div>
        </div>
        <div class="about-text">
          <h2>Halo! Saya Kaoruko</h2>
          <p>
            Saya adalah seorang <strong>Creative Developer</strong> yang memiliki passion 
            dalam membuat website yang tidak hanya fungsional, tetapi juga memukau secara visual. 
            Dengan pengalaman dalam Vue.js dan GSAP, saya menciptakan pengalaman digital 
            yang memorable untuk setiap pengunjung.
          </p>
          <p>
            Saya percaya bahwa animasi yang baik dapat meningkatkan user experience 
            dan membuat website Anda menonjol dari yang lain. Mari berkolaborasi 
            untuk mewujudkan ide-ide kreatif Anda!
          </p>
          <div class="stats">
            <div class="stat-item">
              <span class="stat-number">3+</span>
              <span class="stat-label">Tahun Pengalaman</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Proyek Selesai</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">30+</span>
              <span class="stat-label">Klien Puas</span>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-section">
        <h3>Keahlian Saya</h3>
        <ul class="skills-list">
          <li v-for="skill in skills" :key="skill.name" class="skill-item">
            <div class="skill-header">
              <span class="skill-icon">{{ skill.icon }}</span>
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percent">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 80px 20px;
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.about-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--secondary-color, #ec4899));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

h1 {
  font-size: 3rem;
  color: var(--text-dark, #1e293b);
  margin-bottom: 1rem;
  font-weight: 800;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-light, #64748b);
  max-width: 600px;
  margin: 0 auto;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  align-items: start;
}

.about-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 30px;
}

.profile-image {
  flex-shrink: 0;
}

.image-placeholder {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--secondary-color, #ec4899));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.about-text h2 {
  font-size: 1.8rem;
  color: var(--text-dark, #1e293b);
  margin-bottom: 1rem;
}

.about-text p {
  color: var(--text-light, #64748b);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.stats {
  display: flex;
  gap: 30px;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--secondary-color, #ec4899));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-light, #64748b);
}

/* Skills Section */
.skills-section {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.skills-section h3 {
  font-size: 1.5rem;
  color: var(--text-dark, #1e293b);
  margin-bottom: 2rem;
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.skill-icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.skill-name {
  flex: 1;
  font-weight: 500;
  color: var(--text-dark, #1e293b);
}

.skill-percent {
  font-weight: 600;
  color: var(--primary-color, #6366f1);
}

.skill-bar {
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--secondary-color, #ec4899));
  border-radius: 4px;
}

/* Responsive */
@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .stats {
    justify-content: center;
  }

  h1 {
    font-size: 2.2rem;
  }
}
</style>
