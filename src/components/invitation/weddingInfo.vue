<template>
  <div class="wedding-qa">
    <div class="wedding-section-title">
      <h2>Más detalles</h2>
    </div>

    <div class="wedding-qa-list">
      <!-- Save the Date -->
      <div class="wedding-qa-item">
        <h3 class="wedding-q">📅 Save the Date</h3>
        <p class="wedding-a">
          ¡Guarda la fecha! Añade nuestra boda a tu calendario para no
          olvidarte.
        </p>
        <button class="calendar-button" @click="downloadICS">
          <span class="calendar-icon">📆</span>
          Añadir al calendario
        </button>
      </div>

      <div class="wedding-qa-item">
        <h3 class="wedding-q">¿Cómo hay que ir vestido?</h3>
        <p class="wedding-a">
          Nos encantaría ver a nuestra familia y amigos vestidos elegantes. El
          código de vestimenta es formal, aunque rogamos que llevéis calzado
          cómodo o un segundo par para cambiaros allí.
        </p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">¿Puedo traer a mis hijos?</h3>
        <p class="wedding-a">
          Nos encantaría que este día fuera una oportunidad para que los adultos
          se diviertan como niños. Por eso, hemos decidido que sea una
          celebración solo para adultos. ¡Gracias por tu comprensión!
        </p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">
          ¿Con cuánta antelación deberíamos confirmar nuestra asistencia?
        </h3>
        <p class="wedding-a">
          Nos encantaría contar contigo en este día tan especial. Lo ideal sería
          que nos confirmes lo antes posible para poder planear la mejor fiesta,
          pero si necesitas tiempo, te pedimos que nos lo comuniques antes del 3
          de octubre.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { downloadICS } from '@/utils/calendar'
</script>

<style lang="scss">
.wedding-qa {
  display: flex;
  flex-direction: column;
  width: 100%;

  .wedding-qa-title {
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
  }

  .wedding-qa-list {
    display: flex;
    flex-direction: column;
    gap: 4em;
    padding: 2em 3em;
  }

  .wedding-qa-item {
    display: flex;
    max-width: min(100%, 70ch);
    gap: 1em;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wedding-q {
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }

    .wedding-a {
      font-size: 1.2em;
      text-align: center;
    }
  }
}

.calendar-button {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 1em 2em;
  background-color: var(--pomp-and-power);
  color: white;
  border: none;
  border-radius: 2em;
  font-size: 1em;
  font-family: 'Quicksand', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1em;

  &:hover {
    background-color: var(--pomp-and-power-dark);
    transform: scale(1.05);
  }

  .calendar-icon {
    font-size: 1.2em;
  }
}

/* Tablet and smaller screens */
@media screen and (max-width: 768px) {
  .wedding-qa-list_container {
    padding: 4em 3em;
  }
}

/* Mobile screens */
@media screen and (max-width: 480px) {
  .wedding-qa-list_container {
    padding: 4em 2em;
  }
}

@media screen and (min-width: 1024px) {
  .wedding-qa-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
