<template>
  <div class="wedding-qa">
    <div class="wedding-section-title">
      <h2>Más detalles</h2>
    </div>

    <div class="wedding-qa-list">
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

/* Tablet and smaller screens */
@media screen and (max-width: 768px) {
  .wedding-qa-list-container {
    padding: 4em 3em;
  }
}

/* Mobile screens */
@media screen and (max-width: 480px) {
  .wedding-qa-list-container {
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
