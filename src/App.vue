<template>
  <div class="layout">
    <transition name="fade" @before-enter="beforeEnter" @enter="enter">
      <div v-if="showWeddingInvitation" class="wedding-invitation">
        <h1>Wedding invitation</h1>
      </div>
    </transition>

    <div v-if="!showWeddingInvitation">
      <button @click="toggleBox">Show Wedding Invitation</button>
      <EnvelopeApp></EnvelopeApp>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import EnvelopeApp from './components/EnvelopeApp.vue'

const showWeddingInvitation = ref(false)

const beforeEnter = (el) => {
  el.style.transform = 'translateY(-100%)'
  el.style.opacity = 0
}

const enter = (el, done) => {
  el.offsetHeight // Trigger reflow
  el.style.transition = 'transform 0.5s, opacity 0.5s'
  el.style.transform = 'translateY(0)'
  el.style.opacity = 1
  done()
}

const toggleBox = () => {
  showWeddingInvitation.value = !showWeddingInvitation.value
}
</script>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .wedding-invitation {
    background-color: rgb(141, 141, 141);
    height: 100vh;
    overflow: auto;
    width: 100vw;
  }
}

.fade-enter-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
</style>
