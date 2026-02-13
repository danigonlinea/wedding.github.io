<template>
  <WeddingHeader />

  <WeddingComeTo />
  <WeddingPlace />
  <WeddingCelebration />
  <WeddingSchedule />
  <WeddingForm />
  <WeddingGift />

  <WeddingLastMessage />

  <Suspense>
    <WeddingSongPlayer />
    <template #fallback>
      <div class="song-player-placeholder" />
    </template>
  </Suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// Lazy load components for better performance
const WeddingHeader = defineAsyncComponent(() => import('./weddingHeader.vue'))
const WeddingComeTo = defineAsyncComponent(() => import('./weddingComeTo.vue'))
const WeddingPlace = defineAsyncComponent(() => import('./weddingPlace.vue'))
const WeddingCelebration = defineAsyncComponent(
  () => import('./weddingCelebration.vue'),
)
const WeddingSchedule = defineAsyncComponent(
  () => import('./weddingSchedule.vue'),
)
const WeddingForm = defineAsyncComponent(() => import('./weddingForm.vue'))
const WeddingGift = defineAsyncComponent(() => import('./weddingGift.vue'))
const WeddingLastMessage = defineAsyncComponent(
  () => import('./weddingLastMessage.vue'),
)
const WeddingSongPlayer = defineAsyncComponent(
  () => import('./weddingSongPlayer.vue'),
)
</script>

<style scoped>
.song-player-placeholder {
  height: 64px;
}
</style>
