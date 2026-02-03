<template>
  <section class="about-us-section">
    <div class="container">
      <AboutUsItem v-for="(item, i) in items" :data="item" :key="i" />
    </div>
  </section>
</template>

<script setup>
import AboutUsItem from './components/AboutUsItem.vue'

const items = [
  {
    icon: "corn",
    title: "Grow stronger",
    body: "Build real relationships with your audience by offering value.",
  },
  {
    icon: "bolt",
    title: "Scale faster",
    body: "Grow sales, expand to new markets, or launch something new",
  },
  {
    icon: "speaker",
    title: "Speak Louder",
    body: "Familiarize people with your brand, products, and services.",
  },
]
</script>
