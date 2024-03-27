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
      class="section-image animation-from-top"
    />
  </picture>

  <WeddingHeader></WeddingHeader>

  <WeddingPlace></WeddingPlace>

  <WeddingSchedule></WeddingSchedule>
  <img
    src="../../assets/flowers/header-flowers-middle-cropped.webp"
    alt="Example Image"
    class="section-image"
  />
  <WeddingInfo></WeddingInfo>
  <WeddingForm></WeddingForm>
  <WeddingGift></WeddingGift>

  <WeddingPhotoGallery></WeddingPhotoGallery>

  <WeddingSongPlayer />

  <img
    src="../../assets/flowers/header-flowers-top.webp"
    alt="Example Image"
    class="section-image inverse"
  />
</template>

<script setup>
import WeddingSchedule from './weddingSchedule.vue'
import WeddingPlace from './weddingPlace.vue'
import WeddingInfo from './weddingInfo.vue'
import WeddingForm from './weddingForm.vue'
import WeddingGift from './weddingGift.vue'
import WeddingPhotoGallery from './weddingPhotoGallery.vue'
import WeddingHeader from './weddingHeader.vue'
import WeddingSongPlayer from './weddingSongPlayer.vue'
</script>

<style lang="scss">
.animation-from-top {
  opacity: 0;
  animation: outOfViewFromTop 1.2s ease-in-out forwards;
}

@keyframes outOfViewFromTop {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.inverse {
  transform: scaleY(-1);
}
</style>
