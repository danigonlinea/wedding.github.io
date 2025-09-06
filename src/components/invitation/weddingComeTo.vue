<template>
  <div class="wedding-come">
    <div class="wedding-come-info">
      <span>
        {{ messageComeTo }}
      </span>
    </div>

    <div class="header-image-with-space header-image-pre-wedding-photo">
      <img
        :src="juntosImg"
        alt="Todos Juntos"
        class="header-image-with-frame"
      />
    </div>

    <div class="wedding-come-info">
      <span>
        {{ messageComeTo2 }}
      </span>
    </div>
    <div class="wedding-come-info">
      <span>
        {{ messageComeTo3 }}
      </span>
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
import juntosImg from '@/assets/img/boda_sandra_pablo_juntos.jpeg'
import flowerGreenBig from '@/assets/flowers/flowers-green-group.webp'
const messageComeTo =
  'Estamos super felices y queremos compartir con vosotros toda nuestra alegría.  Por eso estamos preparando una boda con mucha ilusión y queremos que sea inolvidable.'

const messageComeTo2 =
  'Nos conocimos hace casi nueve años, desde entonces hemos vivido muchas historias juntos, muchos viajes y anécdotas. Hace tres años llegó a nuestras vidas nuestro mayor amor. Ahora hemos tomado la decisión de unirnos en matrimonio y y así comenzar este nuevo capitulo.'

const messageComeTo3 =
  'El 15 de noviembre será el inicio de esta etapa, y estamos emocionados de compartirlo con todas las personas que nos han acompañado en el camino.'
</script>

<style lang="scss">
.wedding-come {
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
