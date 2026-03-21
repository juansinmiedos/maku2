<template>
  <section class="admin-projects-view">
    <div class="w-100 flex justify-space-between align-center">
      <h1>Projects</h1>

      <div>
        <TheButton>Agregar un nuevo projecto</TheButton>
      </div>
    </div>

    <!-- body -->
    <div class="w-100 flex column" style="gap: 12px;">
      <ProjectBox
        v-for="(project, i) in store.state.projects"
        :key="i"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '@/stores/main.store'

import TheButton from '@/components/atoms/TheButton.vue'
import ProjectBox from '@/components/atoms/ProjectBox.vue'

const store = useMainStore()

onMounted(() => store.getProjects())
</script>
