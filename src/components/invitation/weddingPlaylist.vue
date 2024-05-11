<template>
  <div class="wedding-playlist">
    <div class="wedding-section-title">
      <h2>Lista de canciones</h2>
    </div>

    <div class="wedding-playlist-content">
      <span>
        Añade la canción que te gustaría que sonase en nuestra boda y la
        pondremos por ti.
      </span>
      <div class="wedding-playlist-link">
        <WeddingLink class="wedding-spotify-playlist">
          Ver canciones
        </WeddingLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import WeddingLink from '../ui/WeddingLink.vue'
</script>

<style scoped>
.wedding-playlist {
  display: flex;
  flex-direction: column;

  .wedding-playlist-content {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em 2em 6em 2em;

    color: var(--text-color-primary);
    text-align: center;

    span {
      font-size: 2em;
      font-family: 'Parisienne', cursive;
      font-weight: 400;
      font-style: normal;
      line-height: 1;
    }
  }

  .wedding-playlist-link {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .wedding-spotify-playlist {
    svg {
      fill: white;
    }
  }
}
</style>
