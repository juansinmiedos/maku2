<template>
  <section class="projects-view">
    <div class="projects-view-header">
      <div class="container">
        <p class="title-lg">Long before brands existed,<br />people left marks.</p>

        <div class="labels-section">
          <div class="top">
            <h2>Our Projects</h2>
            <h4>Our Projects</h4>
  
            <div class="labels-container">
              <TheLabel :isActive="state.selectedCategories.length === 0" @click="state.selectedCategories = []">All</TheLabel>

              <TheLabel
                v-for="(category, i) in state.categories"
                :key="i"
                :value="category"
                :isActive="state.selectedCategories.includes(category)"
                @click="toggleCatSelection"
              >{{ category }}</TheLabel>
            </div>
          </div>

          <div class="bottom"></div>
        </div>

        <div class="view-control">
          <ControlViewButton v-model="state.controlViewButton" icon="multiple" />
          <ControlViewButton v-model="state.controlViewButton" icon="single" />
        </div>
      </div>
    </div>

    <div class="scrollable-label-container">
      <TheLabel :isActive="state.selectedCategories.length === 0" @click="state.selectedCategories = []">All</TheLabel>

      <TheLabel
        v-for="(category, i) in state.categories"
        :key="i"
        :value="category"
        :isActive="state.selectedCategories.includes(category)"
        @click="toggleCatSelection"
      >{{ category }}</TheLabel>
    </div>

    <div v-if="state.controlViewButton === 'multiple'" class="projects-view-container-grid">
      <div class="grid">
        <transition-group name="fade">
          <ProjectItem
            v-for="(project, i) in filteredProjects"
            :key="i"
            v-bind="project"
          />
        </transition-group>
      </div>
    </div>

    <div v-else>single</div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import projects from '@/data/projects'

import TheLabel from '@/components/atoms/TheLabel.vue'
import ControlViewButton from './components/ControlViewButton.vue'
import ProjectItem from './components/ProjectItem.vue'

const state = reactive({
  categories: [
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
  selectedCategories: [],

  controlViewButton: "multiple",
})

const filteredProjects = computed(() => {
  if (state.selectedCategories.length === 0) {
    return projects
  } else {
    return projects.filter(project => {
      return project.categories.find(category => state.selectedCategories.includes(category))
    })
  }
})

function toggleCatSelection(value) {
  if (state.selectedCategories.includes(value)) {
    const index = state.selectedCategories.findIndex(item => item === value)
    state.selectedCategories.splice(index, 1)
  } else {
    state.selectedCategories.push(value)
  }
}
</script>
