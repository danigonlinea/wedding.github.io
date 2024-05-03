<template>
  <div class="wedding-textarea">
    <label :for="textareaId">{{ label }}</label>
    <textarea
      :id="textareaId"
      v-model="textareaValue"
      :placeholder="placeholder"
      :type="type"
      rows="4"
      class="wedding-textarea-field"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['label', 'value', 'placeholder', 'type'])

const textareaId = `custom-textarea-${Math.floor(Math.random() * 1000000)}`
const textareaValue = ref(props.value)

watch(textareaValue, (newValue) => {
  // Emit the textarea value when it changes
  emit('update:value', newValue)
})
</script>

<style scoped>
.wedding-textarea {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: bold;
}

.wedding-textarea-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  outline: none;
  background-color: white;
  color: var(--text-color-primary);
}
</style>
