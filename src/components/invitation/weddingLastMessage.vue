<template>
  <div class="wedding-last-message">
    <div class="wedding-last-message-content">
      <div class="wedding-last-message-ring">
        <GoldenRingIcon />

        <div class="wedding-last-message-text">
          <span>¡Nos vemos pronto!</span>
          <span>Quedan {{ daysLeftToWedding }} días</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GoldenRingIcon from '@/assets/svg/golden-ring.svg'

const daysLeftToWedding = ref(daysUntil('2025-11-15'))

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

<style scoped>
.wedding-last-message {
  display: flex;
  flex-direction: column;
  height: 30vh;

  .wedding-last-message-content {
    position: relative;
    color: var(--text-color-primary);
    text-align: center;
    height: 100%;

    .wedding-last-message-ring {
      padding: 2em;
      position: relative;
      display: inline-block;
      overflow: hidden;

      svg {
        width: 100%;
        animation: moveInCircle 60s linear infinite;
      }
    }

    .wedding-last-message-text {
      display: flex;
      flex-direction: column;
      gap: 1em;
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 400px;
      transform: translate(-50%, -50%);

      span:first-child {
        font-size: 2.4em;
        font-family: 'Parisienne', cursive;
        font-weight: 400;
        font-style: normal;
        line-height: 1;
      }
    }

    .wedding-last-message-footer {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}

@keyframes moveInCircle {
  0% {
    transform: rotate(0deg); /* Start position */
  }
  100% {
    transform: rotate(360deg); /* End position */
  }
}

@keyframes windAnimation {
  0% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(0) rotate(1deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
}

.animation-wind {
  animation: windAnimation 25s ease-in-out infinite alternate;
}
</style>
