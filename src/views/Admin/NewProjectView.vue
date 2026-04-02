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

      <div class="images-container">
        <h4>Main image</h4>
        <TheImagePreview v-if="state.mainImageFile" v-model:file="state.mainImageFile" />
        <TheImageLoader v-else v-model:file="state.mainImageFile" id="mainFile" />
      </div>

      <div class="images-container">
        <h4>Project images</h4>
        
        <div class="flex wrap" style="gap: 12px;">
          <div v-for="(file, i) in state.secondaryImagesFiles" :key="i">
            <TheImagePreview :file="file" @update:file="deleteSecondaryImage(i)" />
          </div>
          <TheImageLoader v-model:file="state.secondaryFile" @update:file="processSecondaryImages" id="secondaryFiles" />
        </div>
      </div>

      <div class="w-100 flex justify-end">
        <TheButton :isLoading="state.loading" @click="saveProject">Save project</TheButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useMainStore } from '@/stores/main.store'
import { useRouter } from 'vue-router'

import TheInput from '@/components/atoms/TheInput.vue'
import TheDropdown from '@/components/atoms/TheDropdown.vue'
import TheLabel from '@/components/atoms/TheLabel.vue'
import TheImageLoader from '@/components/atoms/TheImageLoader.vue'
import TheImagePreview from '@/components/atoms/TheImagePreview.vue'
import TheButton from '@/components/atoms/TheButton.vue'

const store = useMainStore()
const router = useRouter()

const state = reactive({
  loading: false, 

  title: "",
  place: "",
  year: "",
  relatedProject: "",
  relatedProjects: [],

  // categories

  mainImageFile: null,

  secondaryFile: null,
  secondaryImagesFiles: [],
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

function processSecondaryImages(e) {
  state.secondaryImagesFiles.push(e)
  state.secondaryFile = null
}

function deleteSecondaryImage(index) {
  state.secondaryImagesFiles.splice(index, 1)
}

async function saveProject() {
  try {
    state.loading = true
    const formData = new FormData()

    formData.append("title", state.title)
    formData.append("mainImage", state.mainImageFile)
    // categories
    formData.append("place", state.place)
    formData.append("year", state.year)
    state.secondaryImagesFiles.forEach(file => {
      formData.append("images", file)
    })
    formData.append("relatedProjects", state.relatedProjects.map(rp => rp.id))

    const project = await store.createProject(formData)
    router.push({ name: "AdminProjectDetail", params: { name: project.name } })
  } catch (error) {
    //
    console.log(error)
  } finally {
    state.loading = false
  }
}
</script>
