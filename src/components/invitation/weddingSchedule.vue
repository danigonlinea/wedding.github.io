<template>
  <div class="wedding-schedule">
    <div class="wedding-section-title">
      <h2>Programa del día</h2>
    </div>

    <div ref="fadeElements" class="wedding-schedule-list">
      <div class="wedding-schedule-list-item">
        <img class="wedding-schedule-icon" :src="parroquiaImg" />

        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Ceremonia</p>
          <p class="wedding-schedule-list-item-time">12:00</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <img class="wedding-schedule-icon icon-bigger" :src="idaImg" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Autobuses</p>
          <p class="wedding-schedule-list-item-time">13:15</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <img class="wedding-schedule-icon" :src="coctelImg" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Cóctel</p>
          <p class="wedding-schedule-list-item-time">14:00</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <img class="wedding-schedule-icon" :src="banqueteImg" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Banquete</p>
          <p class="wedding-schedule-list-item-time">16:00</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <img class="wedding-schedule-icon" :src="fiestaImg" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Fiesta</p>
          <p class="wedding-schedule-list-item-time">18:30</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <img class="wedding-schedule-icon" :src="vueltaImg" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Autobuses de vuelta</p>
        </div>
      </div>

      <div class="wedding-block-center">
        <p style="font-size: 1.1em; text-align: center">
          Se ruega confirmación de asistencia y de servicio de bús. Habrá
          autobuses de vuelta en dos horarios distintos.
        </p>
        <WeddingLink :to="weddingMoreInfo">Más información</WeddingLink>
      </div>
    </div>

    <div class="flowers-green-group-separator">
      <picture>
        <source :srcset="flowerGreenBig" type="image/webp" />

        <img :src="flowerGreenBig" alt="Flowers Green Group Image" />
      </picture>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

import flowerGreenBig from '@/assets/flowers/flowers-green-group.webp'
import parroquiaImg from '@/assets/img/parroquia_santa_catalina.webp'
import idaImg from '@/assets/img/programa_autobus_ida.webp'
import vueltaImg from '@/assets/img/programa_autobus_vuelta.webp'
import coctelImg from '@/assets/img/programa_coctel.webp'
import banqueteImg from '@/assets/img/programa_banquete.webp'
import fiestaImg from '@/assets/img/programa_fiesta.webp'
import WeddingLink from '../ui/weddingLink.vue'

const weddingMoreInfo = 'https://qr.me-qr.com/data/image-pack/1qeqXPP5'

const fadeElements = ref([])

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
          observer.unobserve(entry.target)
        }
      })
    })

    const elements = fadeElements.value.querySelectorAll(
      '.wedding-schedule-list-item',
    )

    if (elements) {
      elements.forEach((el) => {
        observer.observe(el)
      })
    }
  })
})
</script>

<style lang="scss">
/* Initial state for the fade-in effect */
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.wedding-schedule {
  display: flex;
  flex-direction: column;
  position: relative;
}

.wedding-schedule-flower {
  position: absolute;
  right: 0;
  top: 30%;
  height: 35%;
}

.wedding-schedule-title {
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  box-sizing: border-box;
}

.wedding-schedule-icon {
  width: 92px;
  height: auto;
}

.wedding-schedule-list {
  display: flex;
  flex-direction: column;
  gap: 4em;
  padding: 2em 3em;
}

.wedding-schedule-list-item-info {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}

.wedding-schedule-list-item {
  display: flex;
  align-items: center;
  gap: 2em;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;

  &.fade-in-visible {
    opacity: 1;
  }
}

.wedding-schedule-list-item-title {
  font-size: 2em;
  font-family: 'Parisienne', cursive;
  font-weight: 400;
  font-style: normal;

  color: var(--text-color-primary);
}

.wedding-schedule-list-item-time {
  font-size: 1.2em;
}

@media screen and (min-width: 1024px) {
  .wedding-schedule {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
