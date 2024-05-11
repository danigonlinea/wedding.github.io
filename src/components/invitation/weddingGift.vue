<template>
  <div class="wedding-gift">
    <div class="wedding-section-title">
      <h2>Regalo de bodas</h2>
    </div>

    <div class="wedding-gift-content">
      <div class="wedding-gift-content-message">
        <span>
          Lo más importante para nosotros es compartir este día tan especial
          contigo, pero si quieres tener un detalle:
        </span>
      </div>

      <div class="wedding-gift-card">
        <div
          class="card-container"
          @click="flipCard(true)"
          @mouseleave="flipCard(false)"
        >
          <div :class="{ card: true, flipped: isFlipped }">
            <div class="front">
              <div class="card-gift-info-container">
                <WeddingGiftIcon />
              </div>
            </div>
            <div class="back">
              <div class="card-gift-info-container">
                <span>Nuestra cuenta bancaria</span>
                <span class="bank-account">ESXX XXXX XX XXXX XXXX</span>
                <span class="card-thanks">¡Muchísimas gracias!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WeddingButton from '../ui/WeddingButton.vue'

import WeddingGiftIcon from '../../assets/svg/wedding-gift.svg'

const isFlipped = ref(false)

const flipCard = (flip) => {
  isFlipped.value = flip
}
</script>

<style scoped>
.wedding-gift {
  height: 80vh;
  display: flex;
  flex-direction: column;
  position: relative;

  .wedding-gift-content {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em 1em;
  }

  .wedding-gift-content-message {
    text-align: center;

    font-size: 2em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    color: var(--text-color-primary);
    text-align: center;
  }

  .wedding-gift-card {
    position: relative;
    width: 100%;
  }

  .card-container {
    position: relative;
    perspective: 1000px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;

    .card {
      width: 100%;
      height: 100%;
      position: absolute;
      transform-style: preserve-3d;
      transition: transform 0.5s;
    }
  }
}

.front,
.back {
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
}

.front {
  display: flex;
  flex-direction: column;

  .card-gift-info-container {
    padding: 2em;
    width: 75%;
    filter: drop-shadow(0 0 2rem var(--pomp-and-power));

    svg {
      animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    }
  }
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0) rotate(0) scale(1);
  }
  40%,
  60% {
    transform: translateX(-2px) rotate(-1deg) scale(1.01);
  }
  50%,
  70% {
    transform: translateX(2px) rotate(1deg) scale(1.01);
  }
}

/* Delay the animation for 3 seconds after it ends */

@keyframes delay {
  0% {
    opacity: 0; /* Start delay with opacity 0 */
  }
  100% {
    opacity: 0; /* End delay with opacity 0 */
  }
}
.back {
  display: flex;
  flex-direction: column;
  transform: rotateY(180deg);
  background-image: url('../../assets/img/card-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .card-gift-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    padding: 4em 2em;
  }

  .bank-account {
    font-size: 1.2em;
    color: var(--pomp-and-power-dark);
    font-weight: bold;
    filter: drop-shadow(0 0 2rem var(--pomp-and-power));
  }

  .card-thanks {
    font-size: 2em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;
    color: var(--text-color-primary);
  }
}

.card.flipped {
  transform: rotateY(180deg) translateZ(50px);
}

.wedding-gift-flower-green {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 5em;
    object-fit: cover;
  }
}

@media screen and (max-width: 768px) {
  .card-container {
    width: 300px;
    height: 180px;
  }
}
</style>
