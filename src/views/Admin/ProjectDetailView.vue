<template>
  <section class="admin-projects-view">
    <div class="flex justify-space-between">
      <h2><span @click="goToProjects" style="cursor: pointer;">Projects</span> > Project Details</h2>

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

      <div class="images-container">
        <h4>Main image</h4>
        <TheImagePreview v-if="state.imageUrl" :url="state.imageUrl" />
        <!-- <TheImageLoader v-else v-model:file="state.mainImageFile" id="mainFile" /> -->
      </div>

      <div class="images-container">
        <h4>Project images</h4>
        
        <div class="flex wrap" style="gap: 12px;">
          <div v-for="(url, i) in state.images" :key="i">
            <TheImagePreview :url="url" />
          </div>
          <!-- <TheImageLoader v-model:file="state.secondaryFile" @update:file="processSecondaryImages" id="secondaryFiles" /> -->
        </div>
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
import TheImagePreview from '@/components/atoms/TheImagePreview.vue'
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
  imageUrl: "",
  images: [],
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
    state.imageUrl = projectData.imageUrl
    state.images = projectData.images
    state.relatedProjects = projectData.relatedProjects

    console.log(projectData)
  } catch(error) {
    // do something
  }
}

function goToProjects() {
  router.push({ name: "AdminProjects" })
}

async function deleteProject() {
  try {
    state.loading = true
    await store.deleteProject(state._id)
    goToProjects()
  } catch(error) {
    //
  } finally {
    state.loading = false
  }
}
</script>
