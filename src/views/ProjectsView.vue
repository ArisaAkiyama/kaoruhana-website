<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../components/ProjectCard.vue';
import projectsData from '../data/projects.json';

gsap.registerPlugin(ScrollTrigger);

const projects = ref(projectsData);
const activeFilter = ref('all');

const filters = ['all', 'web', 'mobile', 'design'];

const filterProjects = (category) => {
  activeFilter.value = category;
};

onMounted(() => {
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%'
    },
    y: 60,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power3.out'
  });
});
</script>

<template>
  <div class="projects-page">
    <div class="projects-header">
      <span class="section-tag">Portfolio</span>
      <h1>Proyek Terbaru</h1>
      <p class="subtitle">Koleksi karya terbaik yang telah saya kerjakan</p>
    </div>

    <div class="filter-tabs">
      <button 
        v-for="filter in filters" 
        :key="filter"
        :class="{ active: activeFilter === filter }"
        @click="filterProjects(filter)"
      >
        {{ filter.charAt(0).toUpperCase() + filter.slice(1) }}
      </button>
    </div>

    <div class="projects-grid">
      <ProjectCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project"
        class="project-card"
      />
    </div>

    <div class="cta-section">
      <h2>Tertarik dengan layanan saya?</h2>
      <p>Ayo diskusikan proyek Anda bersama saya.</p>
      <router-link to="/contact" class="cta-button">Hubungi Saya</router-link>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  padding: 80px 20px;
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.projects-header {
  text-align: center;
  margin-bottom: 40px;
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
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.filter-tabs button {
  padding: 10px 24px;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 50px;
  font-weight: 500;
  color: var(--text-light, #64748b);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tabs button:hover {
  border-color: var(--primary-color, #6366f1);
  color: var(--primary-color, #6366f1);
}

.filter-tabs button.active {
  background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--primary-dark, #4f46e5));
  color: white;
  border-color: transparent;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 80px;
}

/* CTA Section */
.cta-section {
  text-align: center;
  background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--primary-dark, #4f46e5));
  padding: 60px 40px;
  border-radius: 24px;
  max-width: 800px;
  margin: 0 auto;
  color: white;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.cta-section p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 14px 40px;
  background: white;
  color: var(--primary-color, #6366f1);
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    padding: 0 10px;
  }

  .cta-section {
    padding: 40px 20px;
  }

  .cta-section h2 {
    font-size: 1.5rem;
  }
}
</style>
