<template>
  <div class="wedding-qa-list-container">
    <div class="wedding-qa">
      <h3 class="wedding-q">¿Cómo hay que ir vestido?</h3>
      <p class="wedding-a">
        Nos encantaría ver a nuestra familia y amigos vestidos elegantes. El
        código de vestimenta es formal aunque rogamos que llevéis calzado cómodo
        para andar por césped o un segundo par para cambiaros in situ.
      </p>
    </div>
    <div class="wedding-qa">
      <h3 class="wedding-q">¿Puedo traer a mis hijos?</h3>
      <p class="wedding-a">
        Sin duda, los peques son adorables y una alegría para la familia pero en
        esta ocasión, queremos que sea una celebración exclusiva para adultos
        para que así los adultos se diviertan como niños.
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
