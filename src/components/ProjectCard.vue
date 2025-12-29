<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="project-card">
    <div class="card-image">
      <img :src="project.image" :alt="project.title" />
      <div class="card-overlay">
        <a href="#" class="view-btn">Lihat Detail</a>
      </div>
    </div>
    <div class="card-content">
      <span class="project-category">{{ project.category || 'Web Development' }}</span>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="card-tags" v-if="project.tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(99, 102, 241, 0.9), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 30px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.view-btn {
  background: white;
  color: var(--primary-color, #6366f1);
  padding: 10px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.view-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.card-content {
  padding: 24px;
}

.project-category {
  display: inline-block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-color, #6366f1);
  font-weight: 600;
  margin-bottom: 8px;
}

h3 {
  font-size: 1.3rem;
  color: var(--text-dark, #1e293b);
  margin-bottom: 10px;
  font-weight: 700;
}

p {
  color: var(--text-light, #64748b);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f1f5f9;
  color: var(--text-light, #64748b);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}
</style>
