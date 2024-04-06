<template>
  <div class="container-place">
    <img
      class="photo left"
      src="../../assets/img/alborea-2.webp"
      alt="Left Photo"
    />
    <img
      class="photo right"
      src="../../assets/img/alborea-3.webp"
      alt="Right Photo"
    />
    <div class="card">
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
.container-place {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16em;
}

.photo {
  position: absolute;
  width: 32em;
  height: auto;
  object-fit: cover;
}

.photo.left {
  top: 12%;
  left: 12%;
}

.photo.right {
  bottom: 12%;
  right: 12%;
}

.card {
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
}

.card h2 {
  margin-top: 20px;
  font-size: 24px;
}

.card p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .container-place {
    padding: 2em;
  }

  .photo {
    overflow: hidden;
    width: 100%;
  }

  .photo.left {
    top: 20%;
    left: 0;
  }

  .photo.right {
    bottom: 20%;
    right: 0;
  }
}

/* .wedding-parent {
  position: relative; 
  height: 40em;
}

.wedding-photo {
  height: 36em;
  width: 36em;
  position: absolute;
  z-index: 1;
  img {
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: inherit;
    height: 100%;
    width: 100%;
  }
}

.wedding-card {
  height: 24em;
  width: 24em;
  position: absolute;
  z-index: 1;

  background: white;
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

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
} */
</style>
