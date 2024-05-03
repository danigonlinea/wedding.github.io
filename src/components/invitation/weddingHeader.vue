<template>
  <header>
    <picture class="header-flower-big">
      <source
        srcset="../../assets/flowers/flower-top-right.webp"
        type="image/webp"
      />

      <img
        src="../../assets/flowers/flower-top-right.webp"
        alt="Example Image"
        class="section-image animation-from-right"
      />
    </picture>

    <picture class="header-flower-small">
      <source
        srcset="../../assets/flowers/flower-top-left.webp"
        type="image/webp"
      />

      <img
        src="../../assets/flowers/flower-top-left.webp"
        alt="Example Image"
        class="section-image animation-from-left"
      />
    </picture>

    <div class="wedding-header-main">
      <div class="header-image-hands-container">
        <img
          src="../../assets/preboda/preboda_230_main.JPG"
          alt="Example Image"
          class="header-image-hands"
        />
      </div>

      <div class="header-info-container">
        <span class="header-we-get-married">¡Nos casamos!</span>

        <div class="header-couple-names-container">
          <div class="header-couple-first-name">
            <span>Lidia &</span>
            <span></span>
          </div>
          <div class="header-couple-second-name">
            <span></span>
            <span>Daniel</span>
          </div>
        </div>

        <!-- <div class="grid-container header-couple-central">
          <div class="grid-item">
            <span>Lidia</span>
          </div>
          <div
            class="grid-item"
            style="padding-left: 0.2em"
          >&</div>
          <div class="grid-item">
            <span>Daniel</span>
          </div>
        </div> -->
      </div>
    </div>
    <div class="header-header-main-bottom">
      <div class="header-date-info">
        <span class="date-month">OCTUBRE </span>
        <div class="grid-container header-date-central">
          <div class="grid-item day-week">
            <div class="lines-top-bottom">
              <span>SÁBADO</span>
            </div>
          </div>
          <div class="grid-item day-number">12</div>
          <div class="grid-item day-time">
            <div class="lines-top-bottom">
              <span>13:00h.</span>
            </div>
          </div>
        </div>
        <!-- <div class="header-date-central">
            <span class="day-week">Sábado</span>
            <span class="day-number">12</span>
            <span class="day-time">13:00h</span>
          </div> -->
        <span class="date-year">2024</span>
      </div>
      <!-- <div class="header-info-quedan">
        <span>¡Quedan {{ daysLeftToWedding }} días!</span>
      </div> -->
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

.grid-container {
  display: grid;
  grid-template-columns: 45% 10% 45%;
  width: 100%;

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-item:first-child {
    justify-content: flex-end;
  }

  .grid-item:last-child {
    justify-content: flex-start;
  }
}

.header-date-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  width: 100%;
}

.date-month {
  font-size: 1.4em;
  font-family: 'Merienda', cursive;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text-color-primary);
}

.date-year {
  font-size: 1.4em;
  font-family: 'Merienda', cursive;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text-color-primary);
}

.lines-top-bottom {
  border-top: 1px solid var(--text-color-primary);
  border-bottom: 1px solid var(--text-color-primary);
  padding: 0.3em 0;
  width: 100px;

  display: flex;
  justify-content: center;
}

.header-date-central {
  .day-week {
    font-size: 1.4em;
    font-family: 'Merienda', cursive;
    font-optical-sizing: auto;
    font-style: normal;
    color: var(--text-color-primary);
    padding-right: 1em;
  }

  .day-number {
    font-size: 2.4em;
    font-family: 'Parisienne', cursive;
    font-weight: bold;
    font-style: normal;

    color: var(--text-color-primary);
  }

  .day-time {
    font-size: 1.4em;
    font-family: 'Merienda', cursive;
    font-optical-sizing: auto;
    font-style: normal;
    color: var(--text-color-primary);
    padding-left: 1em;
  }
}

.wedding-header-main {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-header-main-bottom {
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}

.header-flower-big {
  position: absolute;
  top: 0;
  right: 0;
  width: 32em;
  height: auto;
  z-index: 10;
}

.header-flower-small {
  position: absolute;
  bottom: 0%;
  left: 0;
  width: 14em;
  height: auto;
  z-index: 10;
}

// .header-flower-small-simetric {
//   position: absolute;
//   bottom: 5%;
//   right: 0;
//   width: 14em;
//   height: auto;
//   z-index: 10;
//   -webkit-transform: scaleX(-1);
//   transform: scaleX(-1);
// }

/* Tablet and smaller screens */
@media screen and (max-width: 768px) {
  .header-flower-big {
    width: 21em;
  }

  .header-flower-small,
  .header-flower-small-simetric {
    width: 7em;
  }
}

header {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header-image-hands-container {
    padding: 0.4em;
    height: 50vh;
    display: flex;
    align-items: flex-end;
  }

  .header-image-hands {
    max-width: 100%;
    height: auto;
    object-fit: cover;

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
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3em;
  }

  .header-we-get-married {
    font-size: 1.4em;
    font-family: 'Merienda', cursive;
    font-optical-sizing: auto;
    font-style: normal;
  }

  .header-couple-central {
    font-size: 2.6em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;

    color: var(--text-color-primary);

    span:first-child {
      padding-right: 0.2em;
    }

    span:last-child {
      padding-left: 0.3em;
    }
  }

  .header-couple-names-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 4em;
    font-family: 'Parisienne', cursive;
    font-weight: 500;
    color: var(--text-color-primary);
  }

  .header-couple-first-name {
    display: grid;
    grid-template-columns: 85% 15%;

    span:first-child {
      display: flex;
      justify-content: center;
    }
  }

  .header-couple-second-name {
    display: grid;
    grid-template-columns: 15% 85%;

    span:last-child {
      display: flex;
      justify-content: center;
    }
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
      margin: 0.4em 0;
      letter-spacing: 1px;
      color: var(--text-color-primary);
      font-size: 1.4em;
      font-weight: 400;
      text-transform: uppercase;
    }

    .header-info-quedan {
      font-family: 'Libre Baskerville', serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1em;
      padding-top: 2em;
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
</style>
