<template>
  <div class="wedding-form-container">
    <div class="wedding-form-card">
      <div class="wedding-form-card-header">
        <h2 class="wedding-form-title">Confirma tu asistencia</h2>
      </div>
      <div class="wedding-form-card-body">
        <form @submit.prevent="submitForm">
          <div class="wedding-form-group">
            <WeddingInput v-model="formData.fullName" label="Nombre" required />
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
              v-model="formData.alergicField"
              label="¿Tienes alguna alergia o intolerancia, eres vegano o vegetariano o estás embarazada?"
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
  { label: 1, value: 1 },
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
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4em 1em;

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
