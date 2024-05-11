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
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.wedding-gift {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2em 0;

  .wedding-gift-content {
    display: flex;
    flex-direction: column;
    gap: 5em;
    padding: 2em 1em;
  }

  .wedding-gift-content-message {
    text-align: center;
    font-size: 1.4em;
  }

  .wedding-gift-card {
    position: relative;
    width: 100%;
  }
}
</style>
