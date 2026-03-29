<template>
  <section class="our-method-section">
    <div class="top">
      <p v-if="windowIsSmall" class="slogan"><span>{{ $t('sections.ourMethod.slogan.1') }} <strong>{{ $t('sections.ourMethod.slogan.2') }}</strong></span></p>

      <div class="container">
        <p class="title" :class="windowIsSmall ? 'title-sm' : 'title-lg'">{{ $t('sections.ourMethod.name') }}</p>
        <div class="body-wrapper">
          <div class="body-container">
            <p class="title-lg">{{ $t('sections.ourMethod.title') }}</p>
            <p class="p-lg">{{ $t('sections.ourMethod.subtitle') }}</p>
          </div>

          <TheButton v-if="!windowIsSmall" type="negative" @click="goToContact">{{ $t('sections.ourMethod.button') }}</TheButton>
        </div>
      </div>

      
      <h3 v-if="windowIsMedium" class="slogan">{{ $t('sections.ourMethod.slogan.1') }} {{ $t('sections.ourMethod.slogan.2') }}</h3>
      <h2 v-if="!windowIsMedium && !windowIsSmall" class="slogan">{{ $t('sections.ourMethod.slogan.1') }} {{ $t('sections.ourMethod.slogan.2') }}</h2>
    </div>

    <TheButton v-if="windowIsSmall">{{ $t('sections.ourMethod.button') }}</TheButton>
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
