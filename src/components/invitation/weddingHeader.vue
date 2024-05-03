<template>
  <header>
    <div class="header-image-hands-container">
      <img
        src="../../assets/preboda/preboda_230_main.JPG"
        alt="Example Image"
        class="header-image-hands"
      />
    </div>
    <!-- <div class="frame">
      <img
        src="../../assets/preboda/preboda_230_main.JPG"
        alt="Example Image"
      />
    </div> -->
    <div class="header-info-container">
      <span class="header-we-get-married">¡Nos casamos!</span>
      <span class="header-name">Lidia &amp; Daniel</span>
      <div class="header-info">
        <span>Sábado </span>
        <span>12 de Octubre 2024</span>
        <span
          class="header-info-quedan"
          style="padding-top: 2em"
        >¡Quedan {{ daysLeftToWedding }} días!</span>
      </div>
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
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Merienda:wght@300..900&family=Parisienne&display=swap');

header {
  height: 100vh;
  display: flex;
  padding-top: 11em;
  align-items: center;
  flex-direction: column;

  .header-image-hands-container {
    padding: 1em;
  }

  .header-image-hands {
    max-width: 100%;
    height: auto;
    object-fit: cover;

    /* Set border width and color */
    --s: 8px;
    /* control the size */
    padding: var(--s);
    border: calc(2 * var(--s)) solid #0000;
    outline: 1px solid var(--pomp-and-power-dark);
    outline-offset: calc(-1 * var(--s));
    background: conic-gradient(from 90deg at 2px 2px,
        #0000 25%,
        var(--pomp-and-power-middle) 0);
  }

  .header-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }

  .header-we-get-married {
    font-size: 1.4em;
    font-family: 'Merienda', cursive;
    font-optical-sizing: auto;

    font-style: normal;
  }

  .header-name {
    font-size: 2.4em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    color: var(--text-color-primary);
  }

  .header-info {
    font-family: 'Libre Baskerville', serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      line-height: 1;
      margin: 8px 0;
      letter-spacing: 2px;
      color: var(--text-color-primary);
      font-size: 1.4em;
      font-weight: bold;
      text-transform: uppercase;
    }

    .header-info-quedan {
      font-family: 'Libre Baskerville', serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1em;
    }
  }
}

/* Tablet and smaller screens */
@media screen and (max-width: 768px) {
  header {}
}

/* Mobile screens */
@media screen and (max-width: 480px) {
  header {}
}

.frame {
  width: 300px;
  /* Adjust the width and height as needed */
  height: 400px;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px;
    /* Rounded corners */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    /* Shadow effect */
  }
}

.frame:before,
.frame:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 10px solid #ffc0cb;

  z-index: -1;
}

.frame:before {
  transform: rotate(4deg);
}

.frame:after {
  transform: rotate(-4deg);
}
</style>
