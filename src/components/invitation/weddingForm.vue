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
              label="Coméntanos algo que necesitemos saber o si quieres dejar un mensaje en general"
            />
          </div>

          <div class="wedding-form-submit">
            <WeddingButton>Enviar</WeddingButton>
          </div>
        </div>
      </form>
    </div>

    <div class="header-image-with-space">
      <img
        src="../../assets/preboda/preboda_221.JPG"
        alt="Example Image"
        class="header-image-with-frame"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

import WeddingInput from '../ui/weddingInput.vue'
import WeddingSelect from '../ui/weddingSelect.vue'
import WeddingTextarea from '../ui/weddingTextarea.vue'
import WeddingButton from '../ui/weddingButton.vue'

const formData = ref({
  name: '',
  numberPeople: 1,
  message: '',
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

const submitForm = async () => {
  try {
    const docRef = await addDoc(collection(db, 'guests'), {
      name: formData.value.name,
      number: formData.value.numberPeople,
      message: formData.value.message,
    })
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
  apiKey: 'AIzaSyCcX2w-ZbqVZLVlIrz_eeMiNWI0H7qHCpc',
  authDomain: 'wedlidiadani.firebaseapp.com',
  projectId: 'wedlidiadani',
  storageBucket: 'wedlidiadani.appspot.com',
  messagingSenderId: '943148002809',
  appId: '1:943148002809:web:4ecf657a0112ab7de86128',
  measurementId: 'G-G4KTJYSDV0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

console.log(app)
console.log(db)
</script>

<style lang="scss">
.wedding-form-container {
  display: flex;
  flex-direction: column;
  padding: 4em 0;

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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
