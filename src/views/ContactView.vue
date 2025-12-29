<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@kaoruko.dev' },
  { icon: '📍', label: 'Lokasi', value: 'Jakarta, Indonesia' },
  { icon: '⏰', label: 'Jam Kerja', value: 'Sen - Jum, 09:00 - 17:00' }
];

const socialLinks = [
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'LinkedIn', icon: '💼', url: '#' },
  { name: 'GitHub', icon: '💻', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' }
];

const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
    form.value = { name: '', email: '', subject: '', message: '' };
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      isSubmitted.value = false;
    }, 5000);
  }, 1500);
};

onMounted(() => {
  gsap.from('.contact-info-card', {
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 80%'
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('.contact-form-card', {
    scrollTrigger: {
      trigger: '.contact-content',
      start: 'top 80%'
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
});
</script>

<template>
  <div class="contact-page">
    <div class="contact-header">
      <span class="section-tag">Kontak</span>
      <h1>Mari Berkolaborasi</h1>
      <p class="subtitle">Ada proyek menarik? Jangan ragu untuk menghubungi saya!</p>
    </div>

    <div class="contact-content">
      <div class="contact-info-card">
        <h3>Informasi Kontak</h3>
        <p>Silakan hubungi saya melalui informasi di bawah atau isi formulir di samping.</p>
        
        <ul class="info-list">
          <li v-for="info in contactInfo" :key="info.label">
            <span class="info-icon">{{ info.icon }}</span>
            <div>
              <span class="info-label">{{ info.label }}</span>
              <span class="info-value">{{ info.value }}</span>
            </div>
          </li>
        </ul>

        <div class="social-section">
          <h4>Ikuti Saya</h4>
          <div class="social-links">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" :title="social.name">
              {{ social.icon }}
            </a>
          </div>
        </div>

        <div class="decoration-circle"></div>
      </div>

      <div class="contact-form-card">
        <h3>Kirim Pesan</h3>

        <div v-if="isSubmitted" class="success-message">
          <span class="success-icon">✅</span>
          <p>Pesan berhasil dikirim! Saya akan segera menghubungi Anda.</p>
        </div>

        <form v-else @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Nama Lengkap</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required 
                placeholder="Masukkan nama Anda"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required 
                placeholder="email@contoh.com"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="subject">Subjek</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              required 
              placeholder="Tentang apa pesan Anda?"
            />
          </div>

          <div class="form-group">
            <label for="message">Pesan</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              required 
              placeholder="Tulis detail pesan Anda..."
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="isSubmitting">Mengirim...</span>
            <span v-else>Kirim Pesan 🚀</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding: 80px 20px;
  min-height: 100vh;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
}

.contact-header {
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
}

.contact-content {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
}

/* Info Card */
.contact-info-card {
  background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--primary-dark, #4f46e5));
  border-radius: 24px;
  padding: 40px;
  color: white;
  position: relative;
  overflow: hidden;
}

.contact-info-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.contact-info-card > p {
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.info-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.info-list li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 1.5rem;
}

.info-icon {
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 12px;
}

.info-label {
  display: block;
  font-size: 0.85rem;
  opacity: 0.8;
  margin-bottom: 4px;
}

.info-value {
  font-weight: 600;
}

.social-section h4 {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-links a {
  background: rgba(255, 255, 255, 0.2);
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: white;
  transform: translateY(-3px);
}

.decoration-circle {
  position: absolute;
  bottom: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

/* Form Card */
.contact-form-card {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.contact-form-card h3 {
  font-size: 1.5rem;
  color: var(--text-dark, #1e293b);
  margin-bottom: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-dark, #1e293b);
}

input, textarea {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #f8fafc;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color, #6366f1);
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--primary-color, #6366f1), var(--primary-dark, #4f46e5));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  text-align: center;
  padding: 40px;
}

.success-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.success-message p {
  color: var(--text-dark, #1e293b);
  font-size: 1.1rem;
}

/* Responsive */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 2.2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
