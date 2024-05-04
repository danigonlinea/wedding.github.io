<template>
  <div>
    <audio ref="audio" :src="audioSource"></audio>
    <button
      :class="['float-button', { playing: isPlaying }]"
      @click="togglePlayPause"
    >
      <PlayIcon v-if="!isPlaying" class="song-icon" />
      <PauseIcon v-else class="song-icon" />
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { PlayIcon, PauseIcon } from '@heroicons/vue/24/solid'
// import allOfMeSong from './../../assets/audio/john-legend-all-of-me.mp3'
import algoSencillito from './../../assets/audio/marta-santos-algo-sencillito.mp3'
import salitre from './../../assets/audio/manuel-carrasco-salitre.mp3'

export default {
  components: {
    PlayIcon,
    PauseIcon,
  },
  setup() {
    const isPlaying = ref(false)
    const audioSource = ref([algoSencillito, salitre])
    const audio = ref(null)

    const togglePlayPause = () => {
      if (isPlaying.value) {
        audio.value.pause()
      } else {
        audio.value.play()
      }
      isPlaying.value = !isPlaying.value
    }

    const songChosen =
      audioSource.value[Math.floor(Math.random() * audioSource.value.length)]

    return { isPlaying, audioSource: songChosen, togglePlayPause, audio }
  },
}
</script>

<style scoped>
.float-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: var(--play-background);
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.song-icon {
  width: 24px;
  height: 24px;
}

/* Heartbeat animation */
.playing {
  animation: heartbeat 2.4s ease infinite;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
