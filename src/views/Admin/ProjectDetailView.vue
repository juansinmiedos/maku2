<template>
  <section class="admin-projects-view">
    <div class="flex justify-space-between">
      <h2>Project Details</h2>

      <div>
        <TheButton :isLoading="state.loadingDelete" @click="deleteProject">Eliminar projecto</TheButton>
      </div>
    </div>

    <div class="w-100 flex column" style="gap: 24px;">
      <div class="flex" style="gap: 12px;">
        <TheInput
          v-model="state.title"
          label="Title"
          name="title"
          type="text"
          placeholder="e.g. Chévere"
        />

        <TheInput
          v-model="state.place"
          label="Place"
          name="place"
          type="text"
          placeholder="e.g. México"
        />

        <TheInput
          v-model="state.year"
          label="Year"
          name="year"
          type="text"
          placeholder="e.g. 2021"
        />

        <TheDropdown
          v-model="state.relatedProjects"
          label="Related projects (max. 3)"
          name="relatedProjects"
          :options="state.relatedProjectsOption"
        />
      </div>

      <div v-if="state.relatedProjects.length > 0" class="flex column" style="gap: 12px;">
        <h4>Related projects</h4>

        <h5>(To remove a related project, click on its label)</h5>

        <div class="flex" style="gap: 8px;">
          <TheLabel
            v-for="(project, i) in state.relatedProjects"
            :key="i"
            isActive
            @click="removeProject(project.id)"
          >{{ project.title }}</TheLabel>
        </div>
      </div>

      <div>
        main image section
      </div>

      <div>
        secondary images section
      </div>

      <div class="w-100 flex justify-end">
        <TheButton>Save project</TheButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useMainStore } from '@/stores/main.store'
import { useRoute, useRouter } from 'vue-router'

import TheInput from '@/components/atoms/TheInput.vue'
import TheDropdown from '@/components/atoms/TheDropdown.vue'
import TheLabel from '@/components/atoms/TheLabel.vue'
import TheButton from '@/components/atoms/TheButton.vue'

const store = useMainStore()
const route = useRoute()
const router = useRouter()

const state = reactive({
  loadingDelete: false, 

  _id: "",
  title: "",
  place: "",
  year: "",
  relatedProject: "",
  relatedProjects: [],

  // categories
})

onMounted(() => getProjectDetails())

async function getProjectDetails() {
  try {
    const projectName = route.params.name
    const projectData = await store.getProjectDetails(projectName)
    state._id = projectData._id
    state.title = projectData.title
    state.place = projectData.place
    state.year = projectData.year
    state.relatedProjects = projectData.relatedProjects

    console.log(projectData)
  } catch(error) {
    // do something
  }
}

async function deleteProject() {
  try {
    state.loading = true
    await store.deleteProject(state._id)
    router.push({ name: "AdminProjects" })
  } catch(error) {
    //
  } finally {
    state.loading = false
  }
}
</script>
