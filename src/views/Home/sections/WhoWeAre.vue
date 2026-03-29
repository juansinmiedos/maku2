<template>
  <section class="who-we-are-section">
    <div class="container">
      <p class="title title-lg">{{ $t('sections.whoWeAre.name') }}</p>

      <div class="body-wrapper">
        <h1>{{ $t('sections.whoWeAre.title') }}</h1>
        <h4>{{ $t('sections.whoWeAre.title') }}</h4>
        <div class="body">
          <div class="body-container">
            <div>
              <h4>{{ $t('sections.whoWeAre.subtitle') }}</h4>
              <div ref="growStronger" class="lottie"></div>
            </div>

            <div>
              <TheButton @click="goToContact">{{ $t('sections.whoWeAre.learnMore') }}</TheButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import { useRouter } from 'vue-router'
import lottie from "lottie-web"
import animationData from "@/assets/grow-stronger.json"

import TheButton from '@/components/atoms/TheButton.vue'

const router = useRouter()

const growStronger = ref(null)
let animInstance = null

onMounted(() => {
  animInstance = lottie.loadAnimation({
    container: growStronger.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData
  })
})

onBeforeUnmount(() => {
  animInstance?.destroy()
})

function goToContact() {
  router.push({ name: "Contact" })
}
</script>
