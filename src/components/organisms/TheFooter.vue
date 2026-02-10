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
          
           <TheButton>Enter Your Email</TheButton>
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
            <a>michellepeniche@maku.agency</a>
            <a>+52 (62) 4320 0680</a>
          </div>
        </div>
        <div class="body-container">
          <p class="uppercase text-neutral-500" :class="windowIsMedium ? 'overline-sm' : 'overline-md'">Follow us</p>
          <a>Instragram @maku.agency</a>
          <a>Tiktok</a>
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
          <a class="w-100 text-semi-bold">Terms & Conditions</a>
          <a class="w-100 text-semi-bold">Privacy Policy</a>
        </div>
      </div>
    </div>

    <img class="bottom-until-small" src="../../assets/maku-logo.svg" width="100%" style="margin: 31px 0px 16px;" />

    <div class="bottom-until-small">
      <div class="bottom">
        <p>Maku Agency 2026</p>
        <a class="w-50 text-semi-bold">Terms & Conditions</a>
        <a class="w-50 text-semi-bold">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheButton from '../atoms/TheButton.vue'

const windowIsSmall = ref(false)
const windowIsMedium = ref(false)

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
})

function resizeController() {
  if (window.innerWidth <= 380) {
    windowIsSmall.value = true
    windowIsMedium.value = false
  } else if (window.innerWidth <= 830 && window.innerWidth > 380) {
    windowIsSmall.value = false
    windowIsMedium.value = true
  } else {
    windowIsSmall.value = false
    windowIsMedium.value = false
  }
}
</script>
