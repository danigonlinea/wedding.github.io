<template>
  <div class="wedding-form-container">
    <div class="wedding-section-title wedding-form-title-space">
      <h2>¿Contamos con vosotros?</h2>
    </div>

    <div class="wedding-form-card">
      <form @submit.prevent="submitForm">
        <div class="wedding-form">
          <div class="wedding-block-center">
            <p>
              Confírmanos lo antes posible por favor, que así organizarlo todo
              nos será mucho más fácil.
            </p>
            <p>
              Para confirmar tu asistencia a la boda sólo tienes que enviarnos
              el siguiente formulario.
            </p>
            <p>
              ¿Alguna duda? ¿No estás segura de tu vestido? ¿Puedes llevar a los
              niños? ¿Alguna aclaración?
            </p>
            <p>
              Si tienes cualquier pregunta para nosotros o nos quieres comentar
              algo, déjalo en el mensaje y nos llegará directamente a nosotros.
            </p>
            <p>
              ¡Gracias por tu mensaje! (lo de dejar el mensaje es opcional pero
              siempre hace ilusión).
            </p>
          </div>
          <div class="wedding-form-group">
            <WeddingInput
              v-model="formData.fullName"
              label="Nombre y apellidos"
              required
            />
          </div>

          <div class="wedding-form-group">
            <WeddingTextarea
              v-model="formData.message"
              label="Déjanos un mensaje"
              description=""
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'

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
    emailjs
      .send(
        'service_1vykrik',
        'template_h8mqpql',
        { name: formData.value.fullName, message: formData.value.message },
        'veRoaIxY0Wl0qS94t',
      )
      .then(() => {
        console.log('Correo enviado con éxito 🚀')
        formData.value.fullName = ''
        formData.value.message = ''

        if (window.gtag) {
          window.gtag('event', 'Form', {
            event_category: 'Form',
            event_label: 'Guest Info',
            value: { ...infoGuest },
          })
        }
      })
      .catch((err) => {
        console.error('Error:', err)
        console.log('Hubo un error al enviar el correo')
      })

    isFormSubmitted.value = true

    // Add guest to Firestore
    try {
      const docRef = await addDoc(collection(db, 'guests'), {
        fullName: formData.value.fullName,
        message: formData.value.message,
        timestamp: new Date(),
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  } catch (e) {
    console.error('Error in form submission: ', e)
  }
}
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
