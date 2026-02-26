<template>
  <div class="project-detail-view">
    <div class="header" :style="`background: no-repeat center / cover url(${projectData.imageUrl});`"></div>

    <!-- title -->

    <!-- images -->

    <div class="related-projects">
      <p class="title-lg">More Projects</p>

      <div class="container">
        <div v-for="(project, i) in relatedProducts" :key="i" class="project-card">
          <div class="image" :style="`background: no-repeat center / cover url(${project.imageUrl});`"></div>
          <p class="title-lg">{{ project.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import projects from '@/data/projects'

const route = useRoute()

const projectData = projects.find(project => project.id === route.params.id)
const relatedProducts = projects.filter(project => project.id !== route.params.id)
</script>
