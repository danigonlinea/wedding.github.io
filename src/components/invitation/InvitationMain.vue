<template>
  <picture>
    <!-- WebP source -->
    <source
      srcset="../../assets/flowers/header-flowers-top.webp"
      type="image/webp"
    />

    <!-- Fallback JPEG source -->
    <source
      srcset="../../assets/flowers/header-flowers-top.webp"
      type="image/jpeg"
    />

    <!-- Fallback PNG source -->
    <img
      src="../../assets/flowers/header-flowers-top.webp"
      alt="Example Image"
      class="header-top-img"
    />
  </picture>
  <header>
    <h1 class="header-name">Lidia &amp; Daniel</h1>
    <div class="header-date">
      <span>12 de Septiembre • Conil de la Frontera</span>
      <span>282 Days To Go!</span>
    </div>
  </header>
</template>

<script setup></script>

<style lang="css">
header {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
}

.header-top-img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.header-name {
  line-height: 1;
  color: var(--text-color-primary);
  font-weight: normal;
}

.header-date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    line-height: 1;
    margin: 8px 0;
    font-family: Open Sans Condensed;
    letter-spacing: 4px;
    color: var(--text-color-primary);
    font-size: 1.4em;
    font-weight: normal;
    text-transform: uppercase;
  }
}
</style>
