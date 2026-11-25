<template>
  <div class="wedding-come">
    <div class="wedding-come-info">
      <span>
        {{ messageComeTo }}
      </span>
    </div>

    <div class="header-image-with-space header-image-pre-wedding-photo">
      <img
        :src="preboda5"
        alt="Example Image"
        class="header-image-with-frame"
      />
    </div>

    <div class="wedding-come-info">
      <span>
        {{ messageComeTo2 }}
      </span>
    </div>
    <picture class="flower-green">
      <source :srcset="flowerGreenBig" type="image/webp" />

      <img :src="flowerGreenBig" alt="Example Image" />
    </picture>
  </div>
</template>

<script setup>
import preboda5 from '@/assets/preboda/preboda_5.jpeg'
import flowerGreenBig from '@/assets/flowers/flower-middle-green-big.webp'
const messageComeTo =
  'Tras más de siete años compartiendo momentos inolvidables, te invitamos a ser parte de un momento único en nuestras vidas.'

const messageComeTo2 =
  'Tu presencia hará aún más especial este día que guardaremos en nuestros corazones para siempre.'
</script>

<style lang="scss">
.wedding-come {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.wedding-come-info {
  padding: 2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    color: var(--text-color-primary);
    text-align: center;
  }
}

.flower-green {
  position: absolute;
  bottom: -2%;

  img {
    width: 100%;
    height: 5em;
    object-fit: cover;
  }
}

@media screen and (min-width: 1024px) {
  .wedding-come {
    height: 100%;
  }

  .wedding-come-info {
    width: 80%;
    font-size: 1.4em;
  }
}
</style>
