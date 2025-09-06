<template>
  <div class="wedding-celebration">
    <div class="wedding-section-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="wedding-celebration-photo-info-container">
      <div class="wedding-celebration-place-photo-container">
        <div
          class="header-image-with-frame header-image-with-space header-image-place-photo"
        >
          <div class="wedding-celebration-blend">
            <img class="photo2" :src="placeImg" alt="Right Photo" />
          </div>
        </div>
      </div>

      <div class="wedding-celebration-info">
        <div class="wedding-celebration-info-name-address">
          <span class="wedding-title-handwriting">Bodega Real Tesoro</span>
          <div class="wedding-celebration-address">
            <span>Jerez de la Frontera, Cádiz</span>
          </div>
        </div>

        <div class="center">
          <WeddingLink :to="weddingPlaceGmapsLink">Cómo llegar</WeddingLink>
        </div>
      </div>
    </div>

    <div class="flowers-green-group-separator">
      <picture>
        <source :srcset="flowerGreenBig" type="image/webp" />

        <img :src="flowerGreenBig" alt="Flowers Green Group Image" />
      </picture>
    </div>
  </div>
</template>

<script setup>
import placeImg from '@/assets/img/boda_sandra_pablo_lugar_fondo_blanco.webp'
import flowerGreenBig from '@/assets/flowers/flowers-green-group.webp'
import WeddingLink from '../ui/weddingLink.vue'

const title = 'Lugar de celebración'

const weddingPlaceGmapsLink =
  'https://www.google.es/maps/place/Grupo+Est%C3%A9vez/@36.6871722,-6.1570445,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dc6d4fa11ddcf:0x4a805d93824adebc!8m2!3d36.6871722!4d-6.1544696!16s%2Fg%2F1tdzmtp2?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D'
</script>

<style lang="scss">
.wedding-celebration-flower {
  position: absolute;
  bottom: -14%;
  width: 7em;
  height: auto;
  z-index: 1;
}

.wedding-celebration {
  display: flex;
  flex-direction: column;
  position: relative;
}

.wedding-celebration-photo-info-container {
  position: relative;
}

.wedding-celebration-info-name-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;
}

.wedding-celebration-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;
  font-size: 1.2em;
}

.wedding-celebration-info {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2em;
  position: relative;
}

.wedding-celebration-blend {
  position: relative;

  aspect-ratio: 3 / 2;

  > * {
    width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .header-image-place-photo {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wedding-celebration-place-photo-container {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
