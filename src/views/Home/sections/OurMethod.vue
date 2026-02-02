<template>
  <section class="our-method-section">
    <div class="top">
      <div class="container">
        <p class="title" :class="windowIsSmall ? 'title-sm' : 'title-lg'">Our Method</p>
        <div class="body-wrapper">
          <div class="body-container">
            <p class="title-lg">We’ve worked with over 55 brands across hospitality, retail, architecture, health, fashion, and more.</p>
            <p class="p-lg">Strategy shouldn’t be defined by industry, but by brand. Working across industries helps us avoid formulas and build strategies that are truly distinctive.</p>
          </div>

          <TheButton v-if="!windowIsSmall">Have a project in mind? Let’s talk</TheButton>
        </div>
      </div>

      <h4 v-if="windowIsSmall" class="slogan"><span class="text-regular">Because when you highlight the best of your brand…</span> people notice.  And they buy.</h4>
      <h2 v-else-if="windowIsMedium" class="slogan">Because when you highlight the best of your brand… people notice.  And they buy.</h2>
      <h3 v-else class="slogan">Because when you highlight the best of your brand… people notice.  And they buy.</h3>
    </div>

    <div class="bottom"></div>

    <TheButton v-if="windowIsSmall">Have a project in mind? Let’s talk</TheButton>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import TheButton from '@/components/TheButton.vue'

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
