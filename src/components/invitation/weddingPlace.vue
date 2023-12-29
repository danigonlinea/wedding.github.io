<template>
  <div class="wedding-place-container">
    <div class="wedding-place-column wedding-place-column-left">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="wedding-place-column wedding-place-column-right">
      <img
        class="place-wedding-photo"
        src="../../assets/img/place-wedding.jpg"
        alt="Photo"
      />
    </div>
  </div>
</template>

<script setup>
const title = 'La boda será en XXXXX'
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
const weddingPlaceSrc = '../../assets/img/place-wedding.jpg'
</script>

<style lang="scss">
.wedding-place-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1em;
  padding: 4em 0;
}

.wedding-place-column {
  &-left {
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    padding: 1em 2em 1em 4em;
  }
  &-right {
    padding: 1em 1em 1em 0em;
  }

  box-sizing: border-box; /* Ensure padding is included in the column width */
}

.place-wedding-photo {
  max-width: 100%;
  height: auto;
  border-top-left-radius: 25%;
  border-bottom-right-radius: 25%;
}
</style>
