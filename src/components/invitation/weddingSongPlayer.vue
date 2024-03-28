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
import allOfMeSong from './../../assets/audio/john-legend-all-of-me.mp3'

export default {
  components: {
    PlayIcon,
    PauseIcon,
  },
  setup() {
    const isPlaying = ref(false)
    const audioSource = ref(allOfMeSong)
    const audio = ref(null)

    const togglePlayPause = () => {
      if (isPlaying.value) {
        audio.value.pause()
      } else {
        audio.value.play()
      }
      isPlaying.value = !isPlaying.value
    }

    return { isPlaying, audioSource, togglePlayPause, audio }
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
  background-color: #6455a4;
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
