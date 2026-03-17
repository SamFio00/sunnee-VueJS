<script setup>
import BottlePreview from '@/components/BottlePreview.vue'

defineProps({
  bottle: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="container">
    <h1>Thank You!</h1>

    <!-- Bottle preview -->
    <div class="finishedBottle">
      <h3>Your bottle:</h3>
      <BottlePreview :bottle="bottle" />
      <p><em>Your bottle is now ready to be shipped.</em></p>
    </div>

    <!-- Credits -->
    <div class="credits">
      <div class="socials">
        <a
          href="https://github.com/SamFio00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i class="fa-brands fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/samuele-fiorini-38bba9325"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://www.instagram.com/fiorini_sam_00"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <p>©2026 Samuele Fiorini. All rights reserved.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 1.5rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

.finishedBottle {
  margin-top: 2rem;
}

.finishedBottle p {
  opacity: 0.8;
}

svg {
  width: 200px;
  height: 350px;
}

.credits {
  margin-top: 1rem;
  padding: 0 1rem;
}

.credits p {
  margin-top: 0.75rem;
  font-size: 0.6rem;
  opacity: 0.4;
}

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
}

.socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  text-decoration: none;
  color: #5f5f5f;
  transition: transform 0.25s ease, color 0.25s ease;
}

.socials a i {
  font-size: 1.8rem;
}

.socials a:hover {
  color: #ff683a;
  transform: translateY(-3px);
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }

  svg {
    width: 300px;
    height: 800px;
  }

  .credits {
    margin-top: 2rem;
  }

  .credits p {
    font-size: 1rem;
  }

  .socials {
    gap: 1rem;
  }

  .socials a {
    width: 48px;
    height: 48px;
  }

  .socials a i {
    font-size: 2.5rem;
  }
}
</style>