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

    <!-- Floating Buttons Container - Only show when invitation is visible -->
    <div v-if="showWeddingInvitation" class="floating-buttons">
      <!-- Scroll to top Button -->
      <ScrollToTop />

      <!-- Action Buttons Group -->
      <div class="action-buttons">
        <!-- Song Player Button -->
        <Suspense>
          <WeddingSongPlayer />
          <template #fallback>
            <div class="song-player-placeholder" />
          </template>
        </Suspense>

        <!-- WhatsApp Button -->
        <a
          href="https://wa.me/34600000000"
          class="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
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
            <path
              d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            />
          </svg>
        </a>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, defineAsyncComponent } from 'vue'
// TODO change to false to see full sequence
const showWeddingInvitation = ref(false)
import EnvelopeApp from './components/envelope/EnvelopeMain.vue'
import InvitationMain from './components/invitation/weddingMain.vue'
import ScrollToTop from './components/ui/ScrollToTop.vue'

const WeddingSongPlayer = defineAsyncComponent(
  () => import('./components/invitation/weddingSongPlayer.vue'),
)

const beforeEnter = (el) => {
  el.style.opacity = 0
}

const enter = (el, done) => {
  el.offsetHeight // Trittongger reflow
  el.style.transition = 'transform 0.8s, opacity 0.8s'
  el.style.opacity = 1
  done()
}

const onAnimationEnvelopeDone = () => {
  showWeddingInvitation.value = true
}
</script>

<style lang="scss" scoped>
.layout {
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

.floating-buttons {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.whatsapp-float {
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #20b857;
    transform: scale(1.1);
  }

  svg {
    width: 32px;
    height: 32px;
  }
}

@media screen and (max-width: 768px) {
  .floating-buttons {
    right: 15px;
    bottom: 15px;
    gap: 16px;
  }

  .whatsapp-float {
    width: 50px;
    height: 50px;

    svg {
      width: 26px;
      height: 26px;
    }
  }
}

.song-player-placeholder {
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 768px) {
  .song-player-placeholder {
    width: 40px;
    height: 40px;
  }
}
</style>
