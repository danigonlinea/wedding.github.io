<template>
  <div class="wedding-place-container">
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
  </div>
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
.wedding-schedule-title {
  text-align: center;
}

.wedding-place-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
  max-width: 1200px;
}

.wedding-place-container {
  padding: 4em 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .wedding-schedule-title {
    padding: 2em;
  }

  .wedding-place-container {
    padding: 2em 0;

    .wedding-place-grid {
      max-width: initial;
    }

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
