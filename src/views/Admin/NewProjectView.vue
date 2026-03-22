<template>
  <section class="admin-projects-view">
    <h2>New Project</h2>

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
          v-model="state.relatedProject"
          label="Related projects (max. 3)"
          name="relatedProject"
          :options="relatedProjectsOptions"
          :isDisabled="state.relatedProjects.length === 3"
          @update:modelValue="addSelectedProject"
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
import { reactive, computed, onMounted } from 'vue'
import { useMainStore } from '@/stores/main.store'

import TheInput from '@/components/atoms/TheInput.vue'
import TheDropdown from '@/components/atoms/TheDropdown.vue'
import TheLabel from '@/components/atoms/TheLabel.vue'
import TheButton from '@/components/atoms/TheButton.vue'

const store = useMainStore()

const state = reactive({
  title: "",
  place: "",
  year: "",
  relatedProject: "",
  relatedProjects: [],
})

const relatedProjectsOptions = computed(() => store.state.projects.filter(project => {
  const rp = state.relatedProjects.find(rp => rp.id === project._id)
  return rp === undefined
}).map(project => {
  return {
    text: project.title,
    value: project._id
  }
}))

onMounted(() => store.getProjects())

function addSelectedProject(id) {
  const title = store.state.projects.find(project => project._id === id).title
  state.relatedProjects.push({
    id,
    title,
  })
  state.relatedProject = ""
}

function removeProject(id) {
  state.relatedProjects = state.relatedProjects.filter(project => project.id !== id)
}

function saveProject() {}
</script>
