<template>
  <div class="wedding-place">
    <div class="wedding-section-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="wedding-place-photo-info-container">
      <div class="wedding-place-place-photo-container">
        <div
          class="header-image-with-frame header-image-with-space header-image-place-photo"
        >
          <div class="wedding-place-blend">
            <img class="photo2" :src="placeImg" alt="Right Photo" />
          </div>
        </div>
      </div>

      <div class="wedding-place-info">
        <div class="wedding-place-info-name-address">
          <span class="wedding-title-handwriting"
            >Parroquia Santa Catalina</span
          >
          <div class="wedding-place-address">
            <span>Conil de la Frontera, Cádiz</span>
          </div>
        </div>

        <div class="center">
          <WeddingLink :to="weddingPlaceGmapsLink">Cómo llegar</WeddingLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import placeImg from '@/assets/img/parroquia_santa_catalina.webp'

import WeddingLink from '../ui/weddingLink.vue'

const title = 'Lugar de la ceremonia'

const weddingPlaceGmapsLink =
  'https://www.google.com/maps/place/Parroquia+de+Santa+Catalina+de+Alejandr%C3%ADa/@36.2772042,-6.089445,18z/data=!3m1!4b1!4m6!3m5!1s0xd0c381f44dfeeeb:0xee02664918beb65b!8m2!3d36.2772042!4d-6.0881575!16s%2Fg%2F1z44b91g2?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D'
</script>

<style lang="scss">
.wedding-place-flower {
  position: absolute;
  bottom: -14%;
  width: 7em;
  height: auto;
  z-index: 1;
}

.wedding-place-flower-left {
  left: 0;
  transform: scaleX(-1);
}

.wedding-place-flower-right {
  right: 0;
}

.wedding-place {
  display: flex;
  flex-direction: column;
  position: relative;
}

.wedding-place-photo-info-container {
  position: relative;
}

.wedding-place-info-name-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;
}

.wedding-place-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;
  font-size: 1.2em;
}

.wedding-place-info {
  padding: 2em 2em 4em 2em;

  display: flex;
  flex-direction: column;
  align-items: center;

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

@media screen and (min-width: 1024px) {
  .header-image-place-photo {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wedding-place-place-photo-container {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
