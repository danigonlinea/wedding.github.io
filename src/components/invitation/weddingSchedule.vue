<template>
  <div class="wedding-schedule">
    <img
      src="../../assets/flowers/flor-wedding-schedule.webp"
      alt="Example Image"
      class="wedding-schedule-flower"
    />
    <div class="wedding-section-title">
      <h2>Itinerario</h2>
    </div>

    <div class="wedding-schedule-list">
      <div class="wedding-schedule-list-item">
        <WeddingArchIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Ceremonia Civil</p>
          <p class="wedding-schedule-list-item-time">13:00</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <WeddingAperitivosIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Aperitivos</p>
          <p class="wedding-schedule-list-item-time">14:00</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <WeddingBanqueteIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Banquete</p>
          <p class="wedding-schedule-list-item-time">15:30</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <WeddingBaileIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Baile Nupcial</p>
          <p class="wedding-schedule-list-item-time">18:30</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <WeddingDiscoIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">¡Fiesta!</p>
          <p class="wedding-schedule-list-item-time">19:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WeddingArchIcon from '../../assets/svg/wedding-arch.svg'
import WeddingAperitivosIcon from '../../assets/svg/wedding-aperitivos.svg'
import WeddingBanqueteIcon from '../../assets/svg/wedding-banquete.svg'
import WeddingBaileIcon from '../../assets/svg/wedding-baile.svg'
import WeddingDiscoIcon from '../../assets/svg/wedding-disco.svg'
</script>

<style lang="scss">
.wedding-schedule {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.wedding-schedule-flower {
  position: absolute;
  right: 0;
  top: 20%;
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
  width: 64px;
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
}

.wedding-schedule-list-item-title {
  font-size: 1.6em;
}

.wedding-schedule-list-item-time {
  font-size: 1.2em;
}
</style>
