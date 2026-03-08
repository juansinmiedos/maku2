<template>
  <footer class="footer">
    <div class="top">
      <div class="title-section">
        <div class="title-container">
          <div class="text-wrapper">
            <p :class="windowIsSmall ? 'title-md' : 'title-lg'">Don’t wait to get noticed</p>
            <h4 v-if="windowIsSmall">The bold ones act first.</h4>
            <h3 v-else>The bold ones act first.</h3>
          </div>
          
          <div>
            <TheInputButton
              v-model="emailField"
              :isLoading="emailIsSending"
              :isSent="emailIsSent"
              @click="sendEmail"
            ></TheInputButton>
            <p v-show="emailFieldHasError" style="font-size: 12px; margin-left: 20px; margin-top: 4px;">Escribe un correo válido</p>
          </div>
        </div>
      </div>

      <div class="body-section">
        <div class="body-container">
          <p class="uppercase text-neutral-500" :class="windowIsMedium ? 'overline-sm' : 'overline-md'">Our approach to your brand?</p>
          <p class="title-md">Ask for a free 15-minute audit. We’ll review your current communication and tell you what’s getting in your way (and how to fix it).</p>
        </div>
        <div class="body-container">
          <p class="uppercase text-neutral-500" :class="windowIsMedium ? 'overline-sm' : 'overline-md'">Contact</p>
          <div class="contact-details">
            <a href="mailto:michellepeniche@maku.agency">michellepeniche@maku.agency</a>
            <a href="tel:+526243200680">+52 (62) 4320 0680</a>
          </div>
        </div>
        <div class="body-container">
          <p class="uppercase text-neutral-500" :class="windowIsMedium ? 'overline-sm' : 'overline-md'">Follow us</p>
          <a href="https://www.instagram.com/maku.agency" target="_blank">Instragram</a>
          <a href="https://www.tiktok.com/@maku.agency" target="_blank">Tiktok</a>
          <a href="https://www.linkedin.com/company/makuagency" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>

    <div class="bottom-small-up">
      <img src="../../assets/maku-logo.svg" width="100%" />

      <div class="bottom">
        <div class="brand">
          <p class="title-md">Maku Agency 2026</p>
        </div>
        <div class="links">
          <router-link :to="{ name: 'Legal' }" class="w-100 text-semi-bold">Legal</router-link>
          <router-link :to="{ name: 'Privacy' }" class="w-100 text-semi-bold">Privacy Policy</router-link>
        </div>
      </div>
    </div>

    <img class="bottom-until-small" src="../../assets/maku-logo.svg" width="100%" style="margin: 31px 0px 16px;" />

    <div class="bottom-until-small">
      <div class="bottom">
        <p>Maku Agency 2026</p>
        <router-link :to="{ name: 'Legal' }" class="w-100 text-semi-bold">Legal</router-link>
        <router-link :to="{ name: 'Privacy' }" class="w-100 text-semi-bold">Privacy Policy</router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import TheButton from '../atoms/TheButton.vue'
import TheInputButton from '../atoms/TheInputButton.vue'

const router = useRouter()

const windowIsSmall = ref(false)
const windowIsMedium = ref(false)

const emailField = ref("")
const emailFieldHasError = ref(false)
const emailIsSending = ref(false)
const emailIsSent = ref(false)

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
})

function resizeController() {
  if (window.innerWidth <= 520) {
    windowIsSmall.value = true
    windowIsMedium.value = false
  } else if (window.innerWidth <= 830 && window.innerWidth > 520) {
    windowIsSmall.value = false
    windowIsMedium.value = true
  } else {
    windowIsSmall.value = false
    windowIsMedium.value = false
  }
}

function goToContact() {
  router.push({ name: "Contact" })
}

function sendEmail() {
  // add regex to test email format
  emailFieldHasError.value = emailField.value === ""

  if (!emailFieldHasError.value) {
    console.log("sendEmail:")
    console.log(emailField.value)
    emailIsSending.value = true
  
    setTimeout(() => {
      emailIsSending.value = false
      emailIsSent.value = true
    }, 3000)
  }
}
</script>
