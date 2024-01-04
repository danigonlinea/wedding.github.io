<template>
  <div class="wedding-form-container">
    <div class="wedding-form-card">
      <div class="wedding-form-card-header">
        <h2 class="wedding-form-title">Confirma tu asistencia</h2>
        <p class="wedding-form-description">
          Por favor, rellena el siguiente formulario para confirmar tu
          asistencia a la boda.
        </p>
      </div>
      <div class="wedding-form-card-body">
        <form @submit.prevent="submitForm">
          <div class="wedding-form-group">
            <WeddingInput
              v-model="formData.fullName"
              label="Nombre y apellidos"
              required
            />
          </div>
          <div class="wedding-form-group">
            <WeddingInput
              v-model="formData.alergicField"
              label="Si tienes alguna alergia/intolerancia o eres vegano, vegetariano o estás embarazada por favor indícalo aquí"
            />
          </div>

          <div class="wedding-form-group">
            <WeddingSelect
              v-model="formData.mainPlateField"
              :options="mainPlatesOptions"
              label="¿Qué plato principal en el menú prefieres?"
            />
          </div>

          <div class="wedding-form-group">
            <WeddingInput
              v-model="formData.songField"
              label="¡Dinos una canción que no puede faltar!
"
            />
          </div>

          <div class="wedding-form-group">
            <WeddingTextarea
              v-model="formData.songField"
              label="¿Quieres dejar un mensaje?"
            />
          </div>

          <div class="wedding-form-submit">
            <WeddingButton @click="submitForm">Enviar</WeddingButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WeddingInput from '../ui/weddingInput.vue'
import WeddingSelect from '../ui/weddingSelect.vue'
import WeddingTextarea from '../ui/weddingTextarea.vue'
import WeddingButton from '../ui/weddingButton.vue'

const formData = ref({
  fullName: '',
  alergicField: '',
  mainPlateField: '',
  songField: '',
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

  .wedding-form-card {
    max-width: min(100%, 70ch);
    border-style: none;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

    padding: 50px 30px 50px 30px;
    display: flex;
    gap: 3em;
    flex-direction: column;
  }
}

.wedding-form-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
