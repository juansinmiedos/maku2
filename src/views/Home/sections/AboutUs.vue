<template>
  <section class="about-us-section">
    <div class="container">
      <AboutUsItem v-for="(item, i) in items" :data="item" :key="i" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AboutUsItem from './components/AboutUsItem.vue'

const { t } = useI18n()

const items = [
  {
    icon: "corn",
    title: computed(() => t("sections.aboutUs.items[0].title")),
    body: computed(() => t("sections.aboutUs.items[0].body")),
  },
  {
    icon: "bolt",
    title: computed(() => t("sections.aboutUs.items[1].title")),
    body: computed(() => t("sections.aboutUs.items[1].body")),
  },
  {
    icon: "speaker",
    title: computed(() => t("sections.aboutUs.items[2].title")),
    body: computed(() => t("sections.aboutUs.items[2].body")),
  },
]
</script>
