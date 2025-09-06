<template>
  <div class="wedding-playlist">
    <div class="wedding-playlist-flower-green">
      <picture>
        <source :srcset="flowerBigGreen" type="image/webp" />
        <img :src="flowerBigGreen" alt="Example Image" />
      </picture>
    </div>
  </div>
</template>

<script setup>
import flowerBigGreen from '@/assets/flowers/flowers-green-group.webp'
</script>

<style scoped>
.wedding-playlist {
  display: flex;
  flex-direction: column;

  .wedding-playlist-content {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 0 2em;

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

.wedding-playlist-flower-green {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
