<template>
  <div class="container-place-new">
    <div class="container-photos">
      <img
        class="photo2"
        src="../../assets/img/alborea-3.webp"
        alt="Right Photo"
      />
      <img
        class="photo1 right"
        src="../../assets/img/alborea-2.webp"
        alt="Left Photo"
      />
    </div>

    <div class="card-alborea">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="center">
        <WeddingLink :to="weddingPlaceGmapsLink">Ver mapa</WeddingLink>
      </div>
    </div>
  </div>

  <!-- <div class="wedding-place-container">
    <div class="wedding-place-grid">
      <div class="wedding-place-column-left">
        <div class="wedding-place-column-info">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>

        <div class="center">
          <WeddingLink :to="weddingPlaceGmapsLink">Ver mapa</WeddingLink>
        </div>
      </div>
      <div class="wedding-place-column-right">
        <img
          class="place-wedding-photo"
          src="../../assets/img/alborea-3.webp"
          alt="Photo"
        />
      </div>
    </div>
  </div> -->
  <!--  <div class="wedding-parent">
    <div class="wedding-photo">
      <img src="../../assets/img/alborea-3.webp" alt="Photo" />
    </div>
    <div class="wedding-card">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div> -->
</template>

<script setup>
import WeddingLink from '../ui/weddingLink.vue'

const title = 'Finca Alboreá'
const description =
  'Hemos elegido este maravilloso lugar para llevar a cabo uno de los días más felices de nuestra vida.'

const weddingPlaceGmapsLink =
  'https://www.google.es/maps/place/Finca+Albore%C3%A1+%7C+Albore%C3%A1+Eventos/@36.3139541,-6.0987968,14z/data=!4m6!3m5!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!8m2!3d36.3175581!4d-6.079622!16s%2Fg%2F11c1pqh07c?entry=ttu'
</script>

<style lang="scss">
.container-place-new {
  position: relative;
}
.container-photos {
  --pct1: 33;
  --pct2: 66;
  --angle: 90;

  height: auto;
  width: 100%;
  position: relative;

  aspect-ratio: 3 / 2;
  box-shadow: 0px 10px 25px hsla(0, 0, 0, 0.4);
  > * {
    position: absolute;
    top: 0;
    left: 0;
    inset: 0;
    background-size: cover;
    width: 100%;
  }

  .right {
    -webkit-mask-image: linear-gradient(
      calc(var(--angle) * 1deg),
      transparent calc(var(--pct1) * 1%),
      #fff calc(var(--pct2) * 1%)
    );
  }
}

.card-alborea {
  position: absolute;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

//
*,
*::before,
*::after {
  box-sizing: border-box;
  // outline: 1px dashed blue;
}
</style>
