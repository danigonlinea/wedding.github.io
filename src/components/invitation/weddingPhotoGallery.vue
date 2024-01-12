<template>
  <div class="scroll-container">
    <div class="image-container">
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
        alt="cat1"
      />
      <img
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
        alt="cat2"
      />
      <img
        src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
        alt="cat3"
      />
      <img
        src="https://images.unsplash.com/photo-1517451330947-7809dead78d5"
        alt="cat4"
      />
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
        alt="cat1"
      />
      <img
        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
        alt="cat2"
      />
      <img
        src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
        alt="cat3"
      />
      <img
        src="https://images.unsplash.com/photo-1517451330947-7809dead78d5"
        alt="cat4"
      />
    </div>
  </div>
</template>

<style lang="scss">
.scroll-container {
  white-space: nowrap;
}

.image-container {
  display: inline-block;
  animation: scrollAnimation 25s linear infinite; /* Adjust the animation duration as needed */

  img {
    width: 260px;
    height: auto;
  }
}

.cat-image {
  width: 100px; /* Set the desired width for each cat image */
  height: auto; /* Maintain the aspect ratio of the images */
  margin-right: 10px; /* Adjust spacing between images */
}

@keyframes scrollAnimation {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.carousel-primary:hover,
.carousel-primary:hover ~ .carousel-secondary {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

.carousel-secondary:hover {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}

.scroll-container:hover > .carousel-primary:not(:hover) {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  animation-play-state: paused;
}
</style>
