<template>
  <section class="our-brand-section">
    <div class="top">
      <p class="title-lg">{{ $t('sections.ourBrand.name') }}</p>
      <TheButton @click="goToContact">{{ $t('sections.ourBrand.button') }}</TheButton>
    </div>

    <div class="bottom">
      <OurBrandItem v-for="(data, i) in brandItems" :key="i" :data="data" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import TheButton from '@/components/atoms/TheButton.vue'
import OurBrandItem from './components/OurBrandItem.vue'

const router = useRouter()
const { t } = useI18n()

const brandItems = [
  {
    image: "our-brand-k",
    title: computed(() => t("sections.ourBrand.items[0].title")),
    subtitle: computed(() => t("sections.ourBrand.items[0].subtitle")),
    text: computed(() => t("sections.ourBrand.items[0].text")),
  },
  {
    image: "our-brand-yellow",
    title: computed(() => t("sections.ourBrand.items[1].title")),
    subtitle: computed(() => t("sections.ourBrand.items[1].subtitle")),
    text: computed(() => t("sections.ourBrand.items[1].text")),
  },
]

function goToContact() {
  router.push({ name: "Contact" })
}
</script>
