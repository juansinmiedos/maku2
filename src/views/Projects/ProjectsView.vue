<template>
  <section>
    <div class="projects-header">
      <div class="container">
        <p class="title-lg">Long before brands existed,<br />people left marks.</p>

        <div class="labels-section">
          <div class="top">
            <h2>Our Projects</h2>
  
            <div class="container">
              <TheLabel :isActive="state.selectedLabels.length === 0" @click="state.selectedLabels = []">All</TheLabel>

              <TheLabel
                v-for="(label, i) in state.labelOptions"
                :key="i"
                :value="label"
                :isActive="state.selectedLabels.includes(label)"
                @click="toggleLabelSelection"
              >{{ label }}</TheLabel>
            </div>
          </div>

          <div class="bottom"></div>
        </div>

        <div class="view-control">
          b
        </div>
      </div>
    </div>

    <!-- body -->
    <div class="projects-container"></div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

import TheLabel from '@/components/atoms/TheLabel.vue'
// import TheButton from '@/components/atoms/TheButton.vue'

const state = reactive({
  labelOptions: [
    "Brand Storytelling",
    "Naming & Concept Creation",
    "Brand Strategy",
    "Pitch Decks",
    "Full Brand Systems",
    "Visual Identity Design",
    "Brand Books",
    "Packaging & Collaterals",
    "Social Media Strategy",
    "Content Creation",
    "Creative & Digital Campaigns",
    "AI-Driven Campaigns",
    "Paid Advertising (Meta, Google, YouTube)",
    "Launch Campaigns",
    "Website & Funnel Building",
    "UX/UI Strategy",
    "Copywriting for Web & Digital",
  ],

  selectedLabels: [],
})

function toggleLabelSelection(value) {
  if (state.selectedLabels.includes(value)) {
    const index = state.selectedLabels.findIndex(item => item === value)
    state.selectedLabels.splice(index, 1)
  } else {
    state.selectedLabels.push(value)
  }
}
</script>
