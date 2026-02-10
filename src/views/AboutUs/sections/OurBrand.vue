<template>
  <section class="our-brand-section">
    <div class="top">
      <p class="title-lg">About our brand</p>
      <TheButton>Have a project in mind? Let’s talk</TheButton>
    </div>

    <div class="bottom">
      <OurBrandItem v-for="(data, i) in brandItems" :key="i" :data="data" />
    </div>
  </section>
</template>

<script setup>
import TheButton from '@/components/atoms/TheButton.vue'
import OurBrandItem from './components/OurBrandItem.vue'

const brandItems = [
  {
    image: "",
    title: "MAKU means to leave a mark, something that is traced, recognized, and remembered.",
    subtitle: "A mark that stays.",
    text: "That meaning defines how we think about brands. Not as visuals or slogans, but as what remains after an experience. What people remember. What becomes part of their lives.",
  },
  {
    image: "",
    title: "Our yellow exists to highlight that mark, to bring forward what truly matters in every brand, business, and concept.",
    subtitle: "Our colors",
    text: "Because when something is built with meaning, it doesn’t disappear. It stays. It’s recognized. It leaves a mark.",
  },
]
</script>
