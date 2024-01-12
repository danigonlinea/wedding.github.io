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
      class="section-image animation-from-top"
    />
  </picture>
  <header>
    <span class="header-we-get-married">¡Nos casamos!</span>
    <h1 class="header-name">Lidia &amp; Daniel</h1>
    <div class="header-info">
      <div class="header-date">
        <span>12 de Octubre 2024 • Conil de la Frontera</span>
        <span>¡Quedan {{ daysLeftToWedding }} días!</span>
      </div>
    </div>
  </header>

  <WeddingPlace></WeddingPlace>
  <img
    src="../../assets/flowers/header-flowers-middle.webp"
    alt="Example Image"
    class="section-image inverse"
  />
  <WeddingSchedule></WeddingSchedule>
  <img
    src="../../assets/flowers/header-flowers-middle.webp"
    alt="Example Image"
    class="section-image"
  />
  <WeddingInfo></WeddingInfo>
  <WeddingForm></WeddingForm>
  <WeddingGift></WeddingGift>

  <img
    src="../../assets/flowers/header-flowers-top.webp"
    alt="Example Image"
    class="section-image inverse"
  />
</template>

<script setup>
import { ref } from 'vue'
import WeddingSchedule from './weddingSchedule.vue'
import WeddingPlace from './weddingPlace.vue'
import WeddingInfo from './weddingInfo.vue'
import WeddingForm from './weddingForm.vue'
import WeddingGift from './weddingGift.vue'
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

<style lang="scss">
.animation-from-top {
  opacity: 0;
  animation: outOfViewFromTop 1.2s ease-in-out forwards;
}

@keyframes outOfViewFromTop {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

header {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;

  .header-we-get-married {
    font-size: 2em;
  }
}

.section-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.inverse {
  transform: scaleY(-1);
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
  align-items: center;
}

.header-info {
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
  }
}

/* Mobile screens */
@media screen and (max-width: 480px) {
  header {
    height: 300px;
  }
}
</style>
