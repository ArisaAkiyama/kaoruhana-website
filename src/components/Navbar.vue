<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logoMain from '../assets/logo_main.png';

const activeSection = ref('');
const isVisible = ref(true);
const isHovering = ref(false);
let scrollTimeout = null;
let lastScrollY = 0;

const navLinks = [
  { id: 'movie', label: 'MOVIE' },
  { id: 'character', label: 'CHARACTER' },
  { id: 'news', label: 'NEWS' },
  { id: 'gallery', label: 'GALLERY' }
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const onNavEnter = () => {
  isHovering.value = true;
  isVisible.value = true;
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
};

const onNavLeave = () => {
  isHovering.value = false;
  // Start hide timer when leaving navbar
  if (window.scrollY > 100) {
    scrollTimeout = setTimeout(() => {
      if (!isHovering.value) {
        isVisible.value = false;
      }
    }, 1000);
  }
};

// Track active section and hide/show navbar
const handleScroll = () => {
  const sections = navLinks.map(link => document.getElementById(link.id));
  const scrollPos = window.scrollY + 150;

  // Update active section
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = navLinks[i].id;
      break;
    }
    if (i === 0) activeSection.value = '';
  }

  // Show navbar when scrolling
  isVisible.value = true;
  
  // Clear previous timeout
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
  
  // Hide navbar after 1 second of no scrolling (only if not at top and not hovering)
  scrollTimeout = setTimeout(() => {
    if (window.scrollY > 100 && !isHovering.value) {
      isVisible.value = false;
    }
  }, 1000);

  lastScrollY = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }
});
</script>

<template>
  <nav class="navbar" :class="{ 'hidden': !isVisible }" @mouseenter="onNavEnter" @mouseleave="onNavLeave">
    <div class="nav-content">
      <div class="nav-logo" @click="scrollToTop">
        <img :src="logoMain" alt="薫る花は凛と咲く" class="logo-img" />
      </div>
      <div class="nav-links">
        <a 
          v-for="link in navLinks" 
          :key="link.id"
          href="#"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
          @click.prevent="scrollToSection(link.id)"
          @mouseenter="(e) => e.target.style.color = Math.random() > 0.5 ? '#4ecdc4' : '#9080a8'"
          @mouseleave="(e) => e.target.style.color = ''"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  padding: 15px 40px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar.hidden {
  transform: translateY(-100%);
  opacity: 0;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  flex-shrink: 0;
  cursor: pointer;
}

.logo-img {
  height: 40px;
  width: auto;
  transition: opacity 0.3s ease;
}

.nav-logo:hover .logo-img {
  opacity: 0.7;
}

.nav-links {
  display: flex;
  gap: 35px;
}

.nav-link {
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  color: #666;
  letter-spacing: 0.1em;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-link:hover {
  color: #9080a8;
}

.nav-link.active {
  color: #9080a8;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: #9080a8;
  border-radius: 1px;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 8px 15px;
  }

  .logo-img {
    height: 25px;
  }

  .nav-links {
    gap: 12px;
  }

  .nav-link {
    font-size: 0.6rem;
    letter-spacing: 0.05em;
  }
}

@media (max-width: 480px) {
  .nav-links {
    gap: 8px;
  }

  .nav-link {
    font-size: 0.55rem;
  }

  .logo-img {
    height: 22px;
  }
}
</style>
