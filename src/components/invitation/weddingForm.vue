<template>
  <div class="wedding-form-container">
    <div class="wedding-section-title">
      <h2>Confírmanos tu asistencia</h2>
    </div>

    <div class="wedding-form-card">
      <form @submit.prevent="submitForm">
        <div class="wedding-form">
          <div class="wedding-form-group">
            <WeddingInput
              v-model="formData.fullName"
              label="Nombre"
              required
            />
          </div>
          <div class="wedding-form-group">
            <WeddingSelect
              v-model="formData.numberPeople"
              :options="numberPeople"
              default-value="1"
              label="¿Cuántas personas seréis?"
            />
          </div>

          <div class="wedding-form-group">
            <WeddingInput
              v-model="formData.songField"
              label="¡Una canción que no puede faltar!
"
            />
          </div>

          <div class="wedding-form-group">
            <WeddingTextarea
              v-model="formData.songField"
              label="Coméntanos algo que necesitemos saber o si quieres dejar un mensaje en general"
            />
          </div>

          <div class="wedding-form-submit">
            <WeddingButton @click="submitForm">Enviar</WeddingButton>
          </div>
        </div>
      </form>
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
  numberPeople: 1,
  alergicField: '',
  mainPlateField: '',
  songField: '',
})

const mainPlatesOptions = [
  { label: 'Carne', value: 'carne' },
  { label: 'Pescado', value: 'pescado' },
]

const numberPeople = [
  { label: 'Solo yo', value: 1 },
  { label: 2, value: 2 },
  { label: 3, value: 3 },
  { label: 4, value: 4 },
  { label: 5, value: 5 },
  { label: 6, value: 6 },
]

const submitForm = () => {
  // Handle form submission logic here (e.g., send data to server)
  console.log('Form submitted with data:', formData.value)
}
</script>

<style lang="scss">
.wedding-form-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4em 0;

  .wedding-form-title {
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
  }

  .wedding-form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em 3em;
  }

  .wedding-form-submit {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
