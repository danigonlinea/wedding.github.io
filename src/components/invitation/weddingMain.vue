<template>
  <picture>
    <!-- WebP source -->
    <source
      srcset="../../assets/flowers/header-flowers-top.webp"
      type="image/webp"
    />

    <!-- Fallback JPEG source -->
    <source
      srcset="../../assets/flowers/header-flowers-top.webp"
      type="image/jpeg"
    />

    <!-- Fallback PNG source -->
    <img
      src="../../assets/flowers/header-flowers-top.webp"
      alt="Example Image"
      class="header-top-img"
    />
  </picture>
  <header>
    <h1 class="header-name">Lidia &amp; Daniel</h1>
    <span
      >¡Nos casamos y nos complace invitarte a ser parte de este gran día!
    </span>
    <div class="header-date">
      <span>12 de Octubre • Conil de la Frontera</span>
      <span>¡Quedan {{ daysLeftToWedding }} días!</span>
    </div>
  </header>

  <WeddingSchedule></WeddingSchedule>
</template>

<script setup>
import { ref } from 'vue'
import WeddingSchedule from './weddingSchedule.vue'
const daysLeftToWedding = ref(daysUntil('2024-10-12'))

function daysUntil(targetDate) {
  // Get the current date
  const currentDate = new Date()

  // Parse the target date
  const parsedTargetDate = new Date(targetDate)

  // Calculate the time difference in milliseconds
  const timeDifference = parsedTargetDate - currentDate

  // Calculate the number of days
  const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

  return days
}
</script>

<style lang="css">
header {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
}

.header-top-img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.header-name {
  font-family: 'EBGaramond';
  line-height: 1;
  color: var(--text-color-primary);
  font-weight: normal;
}

.header-date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    line-height: 1;
    margin: 8px 0;
    letter-spacing: 4px;
    color: var(--text-color-primary);
    font-size: 1.4em;
    font-weight: normal;
    text-transform: uppercase;
  }
}

/* Tablet and smaller screens */
@media screen and (max-width: 768px) {
  header {
    height: 400px;
    padding: 1em;

    .header-date {
      span {
        text-align: center;
      }
    }
  }
}

/* Mobile screens */
@media screen and (max-width: 480px) {
  header {
    height: 300px;

    .header-date {
      span {
        text-align: center;
      }
    }
  }
}
</style>
