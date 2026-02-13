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
import { ref, onMounted, onUnmounted } from 'vue'
import { PlayIcon, PauseIcon } from '@heroicons/vue/24/solid'

import allOfMe from '@/assets/audio/all_of_me_legend.mp3'

export default {
  components: {
    PlayIcon,
    PauseIcon,
  },
  setup() {
    const isPlaying = ref(false)
    const audioSource = ref('')
    const audio = ref(null)

    const togglePlayPause = () => {
      if (isPlaying.value) {
        audio.value.pause()
      } else {
        audio.value.play()
      }

      if (window.gtag) {
        window.gtag('event', 'Song Player', {
          event_category: 'Song Player',
          event_label: isPlaying.value ? 'Pause' : 'Play',
          value: { value: isPlaying.value },
        })
      }

      isPlaying.value = !isPlaying.value
    }

    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying.value) {
        audio.value.pause()
        isPlaying.value = false
      }
    }

    onMounted(() => {
      const sources = [allOfMe]
      const songChosen = sources[Math.floor(Math.random() * sources.length)]
      audioSource.value = songChosen

      audio.value.volume = 0.2

      // Listen for visibility change
      document.addEventListener('visibilitychange', handleVisibilityChange)
    })

    onUnmounted(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    })

    return { isPlaying, audioSource, togglePlayPause, audio }
  },
}
</script>

<style scoped>
.float-button {
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: var(--play-background);
  color: #fff;
  font-size: 20px;
  cursor: pointer;
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
