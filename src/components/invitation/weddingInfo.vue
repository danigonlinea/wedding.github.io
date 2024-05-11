<template>
  <div class="wedding-qa">
    <div class="header-image-with-space">
      <img
        src="../../assets/preboda/preboda_121.jpg"
        alt="Example Image"
        class="header-image-with-frame"
      />
    </div>

    <div class="wedding-section-title">
      <h2>Más detalles</h2>
    </div>

    <div class="wedding-qa-list">
      <div class="wedding-qa-item">
        <h3 class="wedding-q">¿Cómo hay que ir vestido?</h3>
        <p class="wedding-a">
          Nos encantaría ver a nuestra familia y amigos vestidos elegantes. El
          código de vestimenta es formal aunque rogamos que llevéis calzado
          cómodo para andar por césped o un segundo par para cambiaros in situ.
        </p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">¿Puedo traer a mis hijos?</h3>
        <p class="wedding-a">
          Sin duda, los peques son adorables y una alegría para la familia pero
          en esta ocasión, queremos que sea una celebración exclusiva para
          adultos para que así los adultos se diviertan como niños.
        </p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">
          ¿Con cuándo tiempo con antelación tendría que confirmar nuestra
          asistencia?
        </h3>
        <p class="wedding-a">
          No queremos quedaros sin vosotros en esta fecha tan especial por lo
          que lo ideal sería lo antes posible pero si necesitáis esperar para
          confirmar vuestra asistencia, nos tendríais que confirmar antes del
          día 3 de Octubre.
        </p>
      </div>
    </div>
    <div class="header-image-with-space">
      <img
        src="../../assets/preboda/preboda_77.jpg"
        alt="Example Image"
        class="header-image-with-frame"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.wedding-qa {
  display: flex;
  flex-direction: column;

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

    .wedding-q {
      font-weight: bold;
      text-transform: uppercase;
    }

    .wedding-a {
      font-size: 1.2em;
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
