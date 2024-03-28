<template>
  <div>
    <div class="wedding-schedule-title">
      <h2>Te compartimos más detalles de nuestra celebración</h2>
    </div>

    <div ref="scrollContainer" class="wedding-schedule">
      <div class="container left">
        <div class="content">
          <div class="wedding-schedule-header">
            <h2>Ceremonia</h2>
            <p>13:00</p>
          </div>
          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Aperitivos</h2>
          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci</p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>Banquete</h2>
          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci</p>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Baile Nupcial</h2>
          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci</p>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>Fiesta</h2>
          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci</p>
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
          <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci</p>
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
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { ref, watch, onMounted } from 'vue'

const { y: windowScrollY } = useWindowScroll()
const { width: windowHeight } = useWindowSize()

const timelineHeight = ref(0)
const scrollContainer = ref(null)

const observer = ref(null)
const hasIntersectedFirstTime = ref(false)
const scrollPixelsStart = ref(null)
const scrollPixelsEnd = ref(null)

onMounted(() => {
  const options = {
    threshold: 0.4,
  }
  observer.value = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hasIntersectedFirstTime.value = true
      }
    })
  }, options)

  observer.value.observe(scrollContainer.value)
})

watch(
  () => hasIntersectedFirstTime.value,
  () => {
    console.log(hasIntersectedFirstTime)
    scrollPixelsStart.value = windowScrollY.value
    scrollPixelsEnd.value =
      scrollPixelsStart.value + scrollContainer.value.offsetHeight

    console.log(scrollPixelsStart.value, scrollContainer.value.offsetHeight)
    if (observer.value) {
      observer.value.disconnect()
    }
  },
)

watch(
  () => windowScrollY.value,
  (newValue, oldValue) => {
    if (
      scrollPixelsStart.value &&
      newValue > scrollPixelsStart.value &&
      newValue < scrollPixelsEnd.value
    ) {
      timelineHeight.value = `${newValue - scrollPixelsStart.value}px`
    }
  },
)
</script>

<style lang="scss">
.wedding-schedule-title {
  text-align: center;
  width: 100%;
  padding: 2em;
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
    left: 28px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }

  .schedule-vertical-line,
  .schedule-vertical-line-progress {
    left: 10%;
  }
}
</style>
