<template>
  <div class="wedding-form-container">
    <div class="wedding-section-title wedding-form-title-space">
      <h2>Confírmanos tu asistencia</h2>
    </div>

    <div class="wedding-form-card">
      <form @submit.prevent="submitForm">
        <div class="wedding-form">
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
              v-model="formData.songField"
              label="¡Una canción que no puede faltar!
"
            />
          </div>

          <div class="wedding-form-group">
            <WeddingTextarea
              v-model="formData.message"
              label="¿Quieres decirnos algo más?"
            />
          </div>

          <div class="wedding-form-submit">
            <WeddingButton v-if="!isFormSubmitted">Enviar</WeddingButton>
            <div v-else class="wedding-form-thanks">
              ¡Gracias por enviarnos tu información!
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="header-image-with-space">
      <img
        :src="preboda2"
        alt="Example Image"
        class="header-image-with-frame"
      />
    </div>
  </div>
</template>

<script setup>
import preboda2 from '@/assets/preboda/preboda_2.jpeg'
import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

import WeddingInput from '../ui/weddingInput.vue'
import WeddingSelect from '../ui/weddingSelect.vue'
import WeddingTextarea from '../ui/weddingTextarea.vue'
import WeddingButton from '../ui/weddingButton.vue'

const formData = ref({
  fullName: '',
  numberPeople: 1,
  message: '',
  songField: '',
})

const isFormSubmitted = ref(false)

const mainPlatesOptions = [
  { label: 'Carne', value: 'carne' },
  { label: 'Pescado', value: 'pescado' },
]

const numberPeople = [
  { label: 'Solo yo', value: 1 },
  { label: 'Seremos 2', value: 2 },
]

const submitForm = async () => {
  try {
    const docRef = await addDoc(collection(db, 'guests'), {
      name: formData.value.fullName,
      number: formData.value.numberPeople,
      message: formData.value.message,
      song: formData.value.songField,
    })

    isFormSubmitted.value = true
    // console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
</script>

<style lang="scss">
.wedding-form-container {
  display: flex;
  flex-direction: column;

  .wedding-form-title-space {
    padding: 2em;
    text-align: center;
  }

  .wedding-form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em 3em;
  }

  .wedding-form-submit {
    padding: 2em;
    font-size: 1.2em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wedding-form-thanks {
    width: 100%;
    text-align: center;
    font-size: 1.2em;
    font-family: 'Merienda', cursive;
  }
}
</style>
