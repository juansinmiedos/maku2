<template>
  <section class="about-us-section">
    <div class="container">
      <AboutUsItem v-for="(item, i) in items" :data="item" :key="i" />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

import AboutUsItem from './components/AboutUsItem.vue'

const { t } = useI18n()

const items = [
  {
    icon: t("sections.aboutUs.items[0].icon"),
    title: t("sections.aboutUs.items[0].title"),
    body: t("sections.aboutUs.items[0].body"),
  },
  {
    icon: t("sections.aboutUs.items[1].icon"),
    title: t("sections.aboutUs.items[1].title"),
    body: t("sections.aboutUs.items[1].body"),
  },
  {
    icon: t("sections.aboutUs.items[2].icon"),
    title: t("sections.aboutUs.items[2].title"),
    body: t("sections.aboutUs.items[2].body"),
  },
]
</script>
