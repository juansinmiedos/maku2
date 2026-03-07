<template>
  <section class="projects-section">
    <div class="container">
      <div class="top">
        <p class="title" :class="windowIsSmall ? 'title-sm' : 'title-lg'">Projects</p>
        <div class="body-wrapper">
          <div class="body-container">
            <p class="title-lg">Most brands come with a specific need. Our role is to understand what the brand actually needs to grow.</p>
            <p class="p-lg">That means looking beyond the initial request and building strategies that strengthen the brand, its connection with customers, and its long-term performance.</p>
          </div>

          <TheButton v-if="!windowIsSmall" @click="goToProjects">View all</TheButton>
        </div>
      </div>

      <div class="bottom medium-up">
        <div class="projects">
          <ProjectItem v-for="(project, i) in store.state.projects.slice(0, 2)" :key="i" v-bind="project" :style="`min-width: ${project.minWidth}%;`" />
        </div>

        <div class="projects secondary">
          <ProjectItem v-for="(project, i) in store.state.projects.slice(2, 5)" :key="i" v-bind="project" />
        </div>
      </div>

      <div class="bottom until-medium">
        <div class="projects">
          <ProjectItem v-for="(project, i) in store.state.projects.slice(0, 1)" :key="i" v-bind="project" :style="`min-width: ${project.minWidth}%;`" />
        </div>

        <div class="projects secondary">
          <ProjectItem v-for="(project, i) in store.state.projects.slice(1, 5)" :key="i" v-bind="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '@/stores/main.store'

import TheButton from '@/components/atoms/TheButton.vue'
import ProjectItem from './components/ProjectItem.vue'

const router = useRouter()
const store = useMainStore()

const windowIsSmall = ref(false)
const windowIsMedium = ref(false)

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
})

function resizeController() {
  if (window.innerWidth <= 520) {
    windowIsSmall.value = true
    windowIsMedium.value = false
  } else if (window.innerWidth <= 830 && window.innerWidth > 520) {
    windowIsSmall.value = false
    windowIsMedium.value = true
  } else {
    windowIsSmall.value = false
    windowIsMedium.value = false
  }
}

function goToProjects() {
  router.push({ name: "Projects" })
}
</script>
