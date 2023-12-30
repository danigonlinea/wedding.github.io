<template>
  <div class="wedding-qa-list-container">
    <div class="wedding-qa">
      <h3 class="wedding-q">¿Cómo hay que ir vestido?</h3>
      <p class="wedding-a">
        Nos encantaría ver a nuestra familia y amigos vestidos elegantes para
        nuestro gran día. El código de vestimenta es formal aunque rogamos que
        llevéis calzado cómodo para andar por césped o un segundo par para
        cambiaros in situ.
      </p>
    </div>
    <div class="wedding-qa">
      <h3 class="wedding-q">¿Puedo traer a mis hijos?</h3>
      <p class="wedding-a">
        Nos encantan los chiquitines pero hemos decidido que este evento sea
        exclusivo para adultos, a menos que sea completamente inevitable. Os
        queremos animar para que aprovechen este día como uno especial para
        vosotros también dos!
      </p>
    </div>
    <div class="wedding-qa">
      <h3 class="wedding-q">¿Cómo llego a la celebración?</h3>
      <p class="wedding-a">
        La ceremonia comenzará a las XX:XXh por lo que rogamos que asistan antes
        de que comience.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.wedding-qa-list-container {
  display: flex;
  gap: 3em;
  align-items: center;
  flex-direction: column;
  padding: 4em 0;

  .wedding-qa {
    display: flex;
    max-width: min(100%, 70ch);
    gap: 1em;
    flex-direction: column;
    .wedding-q {
      font-weight: bold;
      text-transform: uppercase;
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
</style>
