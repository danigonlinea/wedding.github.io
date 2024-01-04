<!-- Button.vue -->

<template>
  <button
    :class="{ 'wedding-button': true, 'full-width': fullWidth }"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: false, default: 'Enviar' },
  fullWidth: { type: Boolean, required: false, default: false },
})
const emit = defineEmits()

const handleClick = () => {
  emit('button-clicked')
}
</script>

<style scoped>
.wedding-button {
  padding: 0.5em 1.2em;
  font-size: 1.6em;
  background-color: #118411;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.full-width {
  width: 100%;
}
</style>
``
