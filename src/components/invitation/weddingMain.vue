<template>
  <WeddingTopHeader />
  <WeddingHeader></WeddingHeader>

  <WeddingPlace></WeddingPlace>
  <WeddingSchedule></WeddingSchedule>
  <WeddingInfo></WeddingInfo>
  <WeddingForm></WeddingForm>
  <WeddingGift></WeddingGift>

  <WeddingSongPlayer />

  <img
    src="../../assets/flowers/flor-wedding-footer.webp"
    alt="Example Image"
    class="section-image"
  />
</template>

<script setup>
import WeddingTopHeader from './weddingTopHeader.vue'
import WeddingPlace from './weddingPlace.vue'
import WeddingInfo from './weddingInfo.vue'
import WeddingForm from './weddingForm.vue'
import WeddingGift from './weddingGift.vue'
import WeddingPhotoGallery from './weddingPhotoGallery.vue'
import WeddingHeader from './weddingHeader.vue'
import WeddingSongPlayer from './weddingSongPlayer.vue'
import WeddingSchedule from './weddingSchedule.vue'
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
