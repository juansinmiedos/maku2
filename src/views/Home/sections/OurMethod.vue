<template>
  <section class="our-method-section">
    <div class="top">
      <p v-if="windowIsSmall" class="slogan"><span>Because when you highlight the best of your brand… <strong>people notice.  And they buy.</strong></span></p>

      <div class="container">
        <p class="title" :class="windowIsSmall ? 'title-sm' : 'title-lg'">Our Method</p>
        <div class="body-wrapper">
          <div class="body-container">
            <p class="title-lg">We’ve worked with over 55 brands across hospitality, retail, architecture, health, fashion, and more.</p>
            <p class="p-lg">Strategy shouldn’t be defined by industry, but by brand. Working across industries helps us avoid formulas and build strategies that are truly distinctive.</p>
          </div>

          <TheButton v-if="!windowIsSmall" type="negative" @click="goToContact">Have a project in mind? Let’s talk</TheButton>
        </div>
      </div>

      
      <h3 v-if="windowIsMedium" class="slogan">Because when you highlight the best of your brand… people notice.  And they buy.</h3>
      <h2 v-if="!windowIsMedium && !windowIsSmall" class="slogan">Because when you highlight the best of your brand… people notice.  And they buy.</h2>
    </div>

    <TheButton v-if="windowIsSmall">Have a project in mind? Let’s talk</TheButton>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import TheButton from '@/components/atoms/TheButton.vue'

const router = useRouter()

const windowIsSmall = ref(false)
const windowIsMedium = ref(false)

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
</script>
