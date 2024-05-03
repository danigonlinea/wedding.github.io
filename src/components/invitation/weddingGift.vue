<template>
  <div class="wedding-gift">
    <div class="wedding-gift-title">
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
              <WeddingGiftIcon />
            </div>
            <div class="back">
              <h2>Nº cuenta bancaria</h2>
              <h3>ESXX XXXX XX XXXX XXXX</h3>
              <WeddingButton label="Copiar"></WeddingButton>
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4em 0;

  .wedding-gift-title {
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
  }

  .wedding-gift-content {
    display: flex;
    flex-direction: column;
    gap: 5em;
    padding: 2em 3em;
  }

  .wedding-gift-content-message {
    text-align: center;
    font-size: 1.4em;
  }

  .wedding-gift-card {
    position: relative;
  }

  .card-container {
    position: relative;
    perspective: 1000px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
    filter: drop-shadow(0 0 0.75rem var(--pomp-and-power));
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
  padding: 2em;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.front {
  display: flex;
  flex-direction: column;
  gap: 2em;
  background-color: #f0f0f0;
}

.back {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  transform: rotateY(180deg);
}

.card.flipped {
  transform: rotateY(180deg) translateZ(50px);
}

@media screen and (max-width: 768px) {
  .card-container {
    width: 300px;
    height: 180px;
  }
}
</style>
