<template>
  <section class="admin-projects-view">
    <div class="w-100 flex justify-space-between align-center">
      <h1>Projects</h1>

      <div>
        <TheButton @click="goToNewProjectView">Add new project</TheButton>
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
import { useRouter } from 'vue-router'

import TheButton from '@/components/atoms/TheButton.vue'
import ProjectBox from '@/components/atoms/ProjectBox.vue'

const store = useMainStore()
const router = useRouter()

onMounted(() => store.getProjects())

function goToNewProjectView() {
  router.push({ name: "NewProject" })
}
</script>
