<template>
  <div class="projects-view-container-grid">
    <div class="grid">
      <transition-group name="fade">
        <ProjectItem
          v-for="(project, i) in projects"
          :key="i"
          v-bind="project"
        />
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue'

defineProps({
  projects: Array,
})
</script>
