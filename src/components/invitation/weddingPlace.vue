<template>
  <div class="wedding-place">
    <div class="wedding-place-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="wedding-place-photo">
      <div class="wedding-place-blend">
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

      <div class="wedding-place-info">
        <img
          src="../../assets/flowers/flor-wedding-place.webp"
          alt="Example Image"
          class="wedding-place-flower"
        />
        <h3>Finca Alboreá</h3>
        <div>
          <p>Carril de los Brenes, 6, 11149</p>
          <p>Conil de la Frontera, Cádiz</p>
        </div>
        <h3>13:00 horas</h3>
        <div class="center">
          <WeddingLink :to="weddingPlaceGmapsLink">Cómo llegar</WeddingLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WeddingLink from '../ui/weddingLink.vue'

const title = 'Lugar de celebración'
const description =
  'Hemos elegido la maravillosa finca Alboreá para llevar a cabo uno de los días más felices de nuestra vida.'

const weddingPlaceGmapsLink =
  'https://www.google.es/maps/place/Finca+Albore%C3%A1+%7C+Albore%C3%A1+Eventos/@36.3139541,-6.0987968,14z/data=!4m6!3m5!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!8m2!3d36.3175581!4d-6.079622!16s%2Fg%2F11c1pqh07c?entry=ttu'
</script>

<style lang="scss">
.wedding-place-flower {
  width: 100%;
  position: absolute;
  top: 0;
}

.wedding-place {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wedding-place-title {
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  box-sizing: border-box;
}

.wedding-place-photo {
  position: relative;
  padding: 2em;
}

.wedding-place-info {
  padding: 6em 2em;
  border-left: 2px solid var(--card-border);
  border-right: 2px solid var(--card-border);
  border-bottom: 2px solid var(--card-border);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;

  position: relative;
}

.wedding-place-blend {
  --pct1: 33;
  --pct2: 66;
  --angle: 90;

  height: auto;
  width: 100%;
  position: relative;

  aspect-ratio: 3 / 2;

  >* {
    position: absolute;
    top: 0;
    left: 0;
    inset: 0;
    background-size: cover;
    width: 100%;
  }

  .right {
    -webkit-mask-image: linear-gradient(calc(var(--angle) * 1deg),
        transparent calc(var(--pct1) * 1%),
        #fff calc(var(--pct2) * 1%));
  }
}
</style>
