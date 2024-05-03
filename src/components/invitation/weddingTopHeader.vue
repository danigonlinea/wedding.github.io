<template>
  <!-- 
    <picture class="header-top">
   
    <source srcset="../../assets/flowers/flores-top6.webp" type="image/webp" />

    <img
      src="../../assets/flowers/flores-top6.webp"
      alt="Example Image"
      class="section-image animation-from-top"
    />
  </picture> -->

  <picture class="header-top-left">
    <source
      srcset="../../assets/flowers/flower-top-left.webp"
      type="image/webp"
    />

    <img
      src="../../assets/flowers/flower-top-left.webp"
      alt="Example Image"
      class="section-image animation-from-left"
    />
  </picture>

  <picture class="header-top-right">
    <source
      srcset="../../assets/flowers/flower-top-right.webp"
      type="image/webp"
    />

    <img
      src="../../assets/flowers/flower-top-right.webp"
      alt="Example Image"
      class="section-image animation-from-right"
    />
  </picture>
</template>

<script setup></script>

<style lang="scss">
.header-top-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 32em;
  height: auto;
  z-index: 10;
}

.header-top-left {
  position: absolute;
  bottom: -70px;
  left: 0;
  width: 14em;
  height: auto;
  z-index: 10;
}

.header-top {
  position: absolute;
  top: 0;
}

.animation-from-left {
  // animation: moveLeftToRight 1.2s linear forwards;
}

.animation-from-right {
  // animation: moveRightToLeft 1.2s linear forwards;
}

.animation-from-top {
  opacity: 0;
  animation: outOfViewFromTop 1.2s ease-in-out forwards;
}

@keyframes outOfViewFromTop {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes moveLeftToRight {
  from {
    /* Starting position */
    opacity: 0;
    transform: translateX(-100%);
    /* Move image 100% of its width to the right */
  }

  to {
    /* Ending position */
    opacity: 1;
    transform: translateX(0);
    /* Move image back to its original position (leftmost) */
  }
}

@keyframes moveRightToLeft {
  from {
    /* Starting position */
    opacity: 0;
    transform: translateX(100%);
    /* Move image 100% of its width to the right */
  }

  to {
    /* Ending position */
    opacity: 1;
    transform: translateX(0);
    /* Move image back to its original position (leftmost) */
  }
}

/* Tablet and smaller screens */
@media screen and (max-width: 768px) {
  .header-top-right {
    width: 24em;
  }

  .header-top-left {
    width: 7em;
  }
}
</style>
