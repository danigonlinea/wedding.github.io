<template>
  <div class="wedding-gift-container">
    <div
      class="card-container"
      @mouseenter="flipCard(true)"
      @mouseleave="flipCard(false)"
    >
      <div :class="{ card: true, flipped: isFlipped }">
        <div class="front">
          <h3>El regalo es opcional, la asistencia obligatoria.</h3>
          <WeddingButton label="Ver Nº cuenta"></WeddingButton>
        </div>
        <div class="back">
          <h2>Nº cuenta bancaria</h2>
          <h3>ESXX XXXX XX XXXX XXXX</h3>
          <WeddingButton label="Copiar"></WeddingButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WeddingButton from '../ui/WeddingButton.vue'

const isFlipped = ref(false)

const flipCard = (flip) => {
  isFlipped.value = flip
}
</script>

<style scoped>
.wedding-gift-container {
  display: flex;
  gap: 3em;
  align-items: center;
  flex-direction: column;
  padding: 4em 0;
}
.card-container {
  perspective: 1000px;
  width: 460px;
  height: 280px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  filter: drop-shadow(-6.4px 6.2px 8px rgba(0, 0, 0, 0.6));
}

.card {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}

.front,
.back {
  width: 100%;
  height: 100%;
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
  background-color: #ddd;
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
