<template>
  <WeddingTopHeader />
  <WeddingHeader></WeddingHeader>

  <WeddingPlace></WeddingPlace>

  <WeddingPlace2></WeddingPlace2>

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
import WeddingTopHeader from './weddingTopHeader.vue'
import WeddingSchedule from './weddingSchedule.vue'
import WeddingPlace from './weddingPlace.vue'
import WeddingPlace2 from './weddingPlace2.vue'
import WeddingInfo from './weddingInfo.vue'
import WeddingForm from './weddingForm.vue'
import WeddingGift from './weddingGift.vue'
import WeddingPhotoGallery from './weddingPhotoGallery.vue'
import WeddingHeader from './weddingHeader.vue'
import WeddingSongPlayer from './weddingSongPlayer.vue'
</script>

<style lang="scss">
.section-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.inverse {
  transform: scaleY(-1);
}
</style>
