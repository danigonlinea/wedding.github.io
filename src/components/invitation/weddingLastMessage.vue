<template>
  <div class="wedding-last-message">
    <div class="wedding-last-message-content">
      <div class="wedding-last-message-ring">
        <img
          src="../../assets/svg/golden-ring.svg"
          alt="Example Image"
          class="wedding-ring-img"
        />
        <div class="wedding-last-message-text">
          <span>¡Te esperamos!</span>
          <span>Quedan {{ daysLeftToWedding }} días</span>
        </div>
      </div>
      <div class="wedding-last-message-footer">
        <img
          src="../../assets/flowers/flor-wedding-footer.webp"
          alt="Example Image"
          class="section-image"
        />
      </div>
    </div>
  </div>
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

<style scoped>
.wedding-last-message {
  display: flex;
  flex-direction: column;
  height: 60vh;

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

      img {
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
      transform: translate(-50%, -50%);

      span:first-child {
        font-size: 2.2em;
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
</style>
