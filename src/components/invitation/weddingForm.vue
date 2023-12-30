<template>
  <div class="wedding-form-container">
    <form @submit.prevent="submitForm">
      <div class="wedding-form-group">
        <WeddingInput v-model="formData.fullName" label="Nombre y apellidos " />
      </div>
      <div class="wedding-form-group">
        <WeddingInput
          v-model="formData.alergicField"
          label="Si tienes alguna alergia/intolerancia o eres vegano, vegetariano por favor indica el nombre del invitado y el tipo de alergia/intolerancia o dieta."
        />
      </div>

      <div class="wedding-form-group">
        <WeddingSelect
          v-model="formData.mainPlateField"
          :options="mainPlatesOptions"
          label="¿Qué plato principal en el menú prefieres?"
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WeddingInput from '../ui/weddingInput.vue'
import WeddingSelect from '../ui/weddingSelect.vue'

const formData = ref({
  fullName: '',
  alergicField: '',
  mainPlateField: '',
})

const mainPlatesOptions = [
  { label: 'Carne', value: 'carne' },
  { label: 'Pescado', value: 'pescado' },
]

const submitForm = () => {
  // Handle form submission logic here (e.g., send data to server)
  console.log('Form submitted with data:', formData.value)
}
</script>

<style lang="scss">
.wedding-form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4em 0;

  form {
    max-width: min(100%, 70ch);
  }
}
</style>
