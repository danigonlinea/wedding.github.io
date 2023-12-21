<template>
  <main id="main" class="layout">
    <transition name="fade" @before-enter="beforeEnter" @enter="enter">
      <div v-if="showWeddingInvitation" class="wedding-invitation">
        <InvitationMain />
      </div>
    </transition>

    <EnvelopeApp
      v-if="!showWeddingInvitation"
      @animation-envelope-done="onAnimationEnvelopeDone"
    ></EnvelopeApp>
  </main>
</template>
<script setup>
import { ref } from 'vue'
// TODO change to false to see full sequence
const showWeddingInvitation = ref(false)
import EnvelopeApp from './components/envelope/EnvelopeMain.vue'
import InvitationMain from './components/invitation/weddingMain.vue'

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

const onAnimationEnvelopeDone = () => {
  showWeddingInvitation.value = true
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh; /* 100% of the viewport height */
  box-sizing: border-box;

  .wedding-invitation {
    height: 100%;
    width: 100%;
  }
}

.fade-enter-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
</style>
