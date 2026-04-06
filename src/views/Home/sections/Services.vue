<template>
  <section class="services-section">
    <div class="container">
      <div class="top">
        <p class="title" :class="windowIsSmall ? 'title-sm' : 'title-lg'">{{ $t('sections.services.name') }}</p>

        <div class="subtitle">
          <p :class="{ 'title-lg': windowIsSmall }">{{ $t('sections.services.title') }}</p>
        </div>
      </div>

      <div class="body">
        <ServiceItem v-for="(service, i) in services" :data="service" :key="i" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import ServiceItem from './components/ServiceItem.vue'

const { t } = useI18n()

const services = [
  {
    title: computed(() => t('sections.services.options[0].title')),
    points: [
     "brand.story",
     "brand.naming",
     "brand.strategy",
     "brand.pitch",
     "brand.systems",
    ],
  },
  {
    title: computed(() => t('sections.services.options[1].title')),
    points: [
      "identity.visual",
      "identity.books",
      "identity.packaging",
    ],
  },
  {
    title: computed(() => t('sections.services.options[2].title')),
    points: [
      "marketing.social",
      "marketing.content",
      "marketing.campaigns",
      "marketing.ai",
      "marketing.ads",
      "marketing.launch",
    ],
  },
  {
    title: computed(() => t('sections.services.options[3].title')),
    points: [
      "conversion.website",
      "conversion.ux",
      "conversion.copywriting",
    ],
  },
]

const windowIsSmall = ref(false)

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
})

function resizeController() {
  if (window.innerWidth <= 520) {
    windowIsSmall.value = true
  } else {
    windowIsSmall.value = false

  }
}
</script>
