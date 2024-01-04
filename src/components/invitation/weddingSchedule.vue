<template>
  <div>
    <div class="wedding-schedule-title">
      <h2>Te compartimos más detalles de nuestra celebración</h2>
    </div>

    <div
      ref="scrollContainer"
      class="wedding-schedule"
      @scroll="handleScroll"
    >
      <div class="container left">
        <div class="content">
          <div class="wedding-schedule-header">
            <h2>Ceremonia</h2>
            <p>12:30</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Aperitivos</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>Banquete</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Baile Nupcial</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>Fiesta</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
      <!-- <div class="container right">
        <div class="content">
          <h2>Recena</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div> -->
      <div class="container right">
        <div class="content">
          <h2>Clausura</h2>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto.
          </p>
        </div>
      </div>

      <div>
        <div class="schedule-vertical-line"></div>
        <div class="schedule-vertical-line-progress"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'

const { y } = useWindowScroll()

const timelineHeight = ref(0)

watch(
  () => y.value,
  (newValue, oldValue) => {
    if (newValue > 900 && newValue < 2100) {
      timelineHeight.value = `${newValue - 900}px`
      console.log(timelineHeight.value)
    }
  },
)
</script>

<style lang="scss">
.wedding-schedule-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2em 0;
}

.wedding-schedule {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual wedding-schedule (the vertical ruler) */
/* .wedding-schedule::after {
  content: '';
  position: absolute;
  width: 2px;
  background-color: var(--text-color-primary);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
} */

.schedule-vertical-line,
.schedule-vertical-line-progress {
  position: absolute;
  width: 2px;
  background-color: var(--vertical-line-color-primary);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  height: v-bind(timelineHeight);
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the wedding-schedule */
.container::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  right: -4px;
  background-color: white;

  border: 2px solid var(--text-color-primary);
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -8px;
}

/* The actual content */
.content {
  padding: 0 16px 48px;
  position: relative;
  display: flex;
  gap: 1em;
  flex-direction: column;
}

/* Media queries - Responsive wedding-schedule on screens less than 600px wide */
@media screen and (max-width: 768px) {

  /* Place the timelime to the left */
  .wedding-schedule::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 23px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}</style>
