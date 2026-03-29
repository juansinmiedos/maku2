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
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

import ServiceItem from './components/ServiceItem.vue'

const { t } = useI18n()

const services = [
  {
    title: t('sections.services.options[0].title'),
    points: [
      t('sections.services.options[0].points[0]'),
      t('sections.services.options[0].points[1]'),
      t('sections.services.options[0].points[2]'),
      t('sections.services.options[0].points[3]'),
      t('sections.services.options[0].points[4]'),
      t('sections.services.options[0].points[5]'),
    ],
  },
  {
    title: t('sections.services.options[1].title'),
    points: [
      t('sections.services.options[1].points[0]'),
      t('sections.services.options[1].points[1]'),
      t('sections.services.options[1].points[2]'),
    ],
  },
  {
    title: t('sections.services.options[2].title'),
    points: [
      t('sections.services.options[2].points[0]'),
      t('sections.services.options[2].points[1]'),
      t('sections.services.options[2].points[2]'),
      t('sections.services.options[2].points[3]'),
      t('sections.services.options[2].points[4]'),
      t('sections.services.options[2].points[5]'),
    ],
  },
  {
    title: t('sections.services.options[3].title'),
    points: [
      t('sections.services.options[3].points[0]'),
      t('sections.services.options[3].points[1]'),
      t('sections.services.options[3].points[2]'),
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
