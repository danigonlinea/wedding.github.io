<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      class="scroll-to-top"
      aria-label="Volver arriba"
      @click="scrollToTop"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  const scrollTop =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop
  isVisible.value = scrollTop > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check initial state
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: var(--play-background, #8b5a5a);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 99;
  transition: all 0.3s ease;
}

.scroll-to-top:hover {
  transform: scale(1.1);
  background-color: var(--play-background, #6b4a4a);
}

.scroll-to-top svg {
  width: 24px;
  height: 24px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .scroll-to-top {
    width: 40px;
    height: 40px;
  }

  .scroll-to-top svg {
    width: 20px;
    height: 20px;
  }
}
</style>
