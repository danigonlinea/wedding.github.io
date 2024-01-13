<template>
  <div class="wedding-place-container">
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
        src="../../assets/img/wedding-place-alborea.jpg"
        alt="Photo"
      />
    </div>
  </div>
</template>

<script setup>
import WeddingLink from '../ui/weddingLink.vue'

const title = 'La boda será en la finca Alboreá'
const description =
  'Hemos elegido este maravilloso lugar en Conil de la Frontera para llevar a cabo uno de los días más felices de nuestra vida.'

const weddingPlaceGmapsLink = 'https://www.google.com/maps?q=36.2765,-6.0889'
</script>

<style lang="scss">
.wedding-place-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
  padding: 4em 0;
}

.wedding-place-column {
  &-left {
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: space-evenly;
    padding: 1em 2em 1em 4em;
  }

  &-right {
    padding: 1em 1em 1em 0em;
  }

  &-info {
    display: flex;
    gap: 0.5em;
    flex-direction: column;

    h2 {
      text-align: center;
    }
  }

  box-sizing: border-box;
  /* Ensure padding is included in the column width */
}

.place-wedding-photo {
  max-width: 100%;
  height: auto;
  border-top-left-radius: 15%;
  border-bottom-right-radius: 25%;
}

@media (max-width: 768px) {
  .wedding-place-container {
    padding: 2em 0;

    .wedding-place-column {
      &-left {
        padding: 2em;
      }

      &-right {
        padding: 1em;
      }
    }
  }
}
</style>
