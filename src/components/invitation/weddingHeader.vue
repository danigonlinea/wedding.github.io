<template>
  <header>
    <span class="header-we-get-married">¡Nos casamos!</span>
    <h1 class="header-name">Lidia &amp; Daniel</h1>
    <div class="header-info">
      <span>12 de Octubre 2024 </span>
      <span>¡Quedan {{ daysLeftToWedding }} días!</span>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

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
header {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;

  .header-we-get-married {
    font-size: 2em;
  }
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
  }
}

/* Mobile screens */
@media screen and (max-width: 480px) {
  header {
  }
}
</style>
