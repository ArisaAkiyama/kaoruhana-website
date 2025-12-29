<script setup>
import logoMain from '../assets/logo_main.png';
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Left: Logo -->
      <div class="footer-left">
        <img :src="logoMain" alt="薫る花は凛と咲く" class="footer-logo" />
      </div>

      <!-- Right: Content -->
      <div class="footer-right">
        <!-- Share -->
        <div class="footer-share">
          <span class="share-label">SHARE</span>
          <a href="#" class="social-icon" title="X">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" class="social-icon" title="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" class="social-icon line" title="LINE">
            <span>LINE</span>
          </a>
        </div>

        <!-- Links -->
        <div class="footer-links">
          <a href="#">CONTACT</a>
          <span class="divider">|</span>
          <a href="#">PRIVACY POLICY</a>
          <span class="divider">|</span>
          <a href="#">ANIPLEX</a>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright">
          <p>このホームページに掲載されている一切の文書・図版・写真等を<br/>手段や形態を問わず複製、転載することを禁じます。</p>
          <p class="copyright-text">©三香見サカ・講談社／「薫る花は凛と咲く」製作委員会</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: white;
  padding: 40px 60px;
  border-top: 1px solid #e8e0f0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
}

/* Left - Logo */
.footer-left {
  flex-shrink: 0;
}

.footer-logo {
  height: 50px;
  width: auto;
}

/* Right - Content */
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
}

/* Share */
.footer-share {
  display: flex;
  align-items: center;
  gap: 15px;
}

.share-label {
  font-size: 0.8rem;
  color: #666;
  letter-spacing: 0.1em;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #333;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #9080a8;
  transform: translateY(-2px);
}

.social-icon.line {
  background: #06C755;
  font-size: 0.6rem;
  font-weight: 700;
}

.social-icon.line:hover {
  background: #05a647;
}

/* Links */
.footer-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-links a {
  font-size: 0.8rem;
  color: #555;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #9080a8;
}

.divider {
  color: #ccc;
  font-size: 0.8rem;
}

/* Copyright */
.footer-copyright {
  text-align: right;
  font-size: 0.7rem;
  color: #888;
  line-height: 1.8;
}

.footer-copyright p {
  margin: 5px 0;
}

.copyright-text {
  margin-top: 10px !important;
}

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 25px 15px;
  }

  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }

  .footer-right {
    align-items: center;
    gap: 12px;
  }

  .footer-share {
    gap: 10px;
  }

  .share-label {
    font-size: 0.7rem;
  }

  .social-icon {
    width: 28px;
    height: 28px;
  }

  .social-icon svg {
    width: 14px;
    height: 14px;
  }

  .footer-links {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-links a {
    font-size: 0.65rem;
  }

  .divider {
    font-size: 0.65rem;
  }

  .footer-copyright {
    text-align: center;
    font-size: 0.6rem;
  }

  .footer-logo {
    height: 35px;
  }
}

@media (max-width: 400px) {
  .footer {
    padding: 20px 10px;
  }

  .footer-logo {
    height: 28px;
  }

  .share-label {
    font-size: 0.6rem;
  }

  .social-icon {
    width: 24px;
    height: 24px;
  }

  .social-icon svg {
    width: 12px;
    height: 12px;
  }

  .footer-links a {
    font-size: 0.55rem;
  }

  .divider {
    font-size: 0.55rem;
  }

  .footer-copyright {
    font-size: 0.5rem;
  }
}
</style>
