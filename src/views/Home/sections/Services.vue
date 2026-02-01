<template>
  <section class="services-section">
    <div class="container">
      <div class="top">
        <p class="title title-lg">Services</p>

        <div class="subtitle">
          <p class="title-lg">Whether you’re launching something new or ready to evolve, we offer:</p>
        </div>
      </div>

      <div class="body">
        <ServiceItem v-for="(service, i) in services" :data="service" :key="i" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceItem from './ServiceItem.vue'

const services = [
  {
    title: "Brand Strategy & Foundation",
    points: [
      "Brand Storytelling",
      "Naming & Concept Creation",
      "Brand Strategy",
      "Pitch Decks",
      "Full Brand Systems",
      "Brand Storytelling"
    ],
  },
  {
    title: "Identity Design",
    points: [
      "Visual Identity Design",
      "Brand Books",
      "Packaging & Collaterals",
    ],
  },
  {
    title: "Marketing & Communication",
    points: [
      "Social Media Strategy",
      "Content Creation",
      "Creative & Digital Campaigns",
      "AI-Driven Campaigns",
      "Paid Advertising (Meta, Google, YouTube)",
      "Launch Campaigns"
    ],
  },
  {
    title: "Digital Presence & Conversion",
    points: [
      "Website & Funnel Building",
      "UX/UI Strategy",
      "Copywriting for Web & Digital"
    ],
  },
]
</script>
