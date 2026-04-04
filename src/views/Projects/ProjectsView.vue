<template>
  <section class="projects-view">
    <div class="projects-view-header">
      <div class="container">
        <p class="title-lg">{{ $t("views.projects.name.1") }}<br />{{ $t("views.projects.name.2") }}</p>

        <div class="labels-section">
          <div class="top">
            <h2>{{ $t("views.projects.title") }}</h2>
            <h4>{{ $t("views.projects.title") }}</h4>
  
            <div class="labels-container">
              <TheLabel :isActive="state.selectedCategories.length === 0" @click="state.selectedCategories = []">{{ $t("common.all") }}</TheLabel>

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

    <ProjectsContainerGrid v-if="state.controlViewButton === 'multiple'" :projects="filteredProjects" />
    <ProjectsContainerSlider v-else :projects="filteredProjects" />
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useMainStore } from '@/stores/main.store'
import { useI18n } from 'vue-i18n'

import TheLabel from '@/components/atoms/TheLabel.vue'
import ControlViewButton from './components/ControlViewButton.vue'
import ProjectsContainerGrid from './components/ProjectsContainerGrid.vue'
import ProjectsContainerSlider from './components/ProjectsContainerSlider.vue'

const store = useMainStore()
const { t } = useI18n()

const state = reactive({
  categories: [
    computed(() => t('sections.services.options[0].points[0]')),
    computed(() => t('sections.services.options[0].points[1]')),
    computed(() => t('sections.services.options[0].points[2]')),
    computed(() => t('sections.services.options[0].points[3]')),
    computed(() => t('sections.services.options[0].points[4]')),
    computed(() => t('sections.services.options[1].points[0]')),
    computed(() => t('sections.services.options[1].points[1]')),
    computed(() => t('sections.services.options[1].points[2]')),
    computed(() => t('sections.services.options[2].points[0]')),
    computed(() => t('sections.services.options[2].points[1]')),
    computed(() => t('sections.services.options[2].points[2]')),
    computed(() => t('sections.services.options[2].points[3]')),
    computed(() => t('sections.services.options[2].points[4]')),
    computed(() => t('sections.services.options[2].points[5]')),
    computed(() => t('sections.services.options[3].points[0]')),
    computed(() => t('sections.services.options[3].points[1]')),
    computed(() => t('sections.services.options[3].points[2]')),
  ],
  selectedCategories: [],

  controlViewButton: "multiple",
})

const filteredProjects = computed(() => {
  if (state.selectedCategories.length === 0) {
    return store.state.projects
  } else {
    return store.state.projects.filter(project => {
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
