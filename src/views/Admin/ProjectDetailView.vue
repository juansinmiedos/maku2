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
          v-model="state.relatedProject"
          label="Related projects (max. 3)"
          name="relatedProjects"
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

      <div class="flex column" style="gap: 12px;">
        <h4>Categories</h4>

        <div class="w-100 flex column" style="gap: 8px;">
          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.categories['brand.story']"
              label="Brand Storytelling"
              name="brand.story"
            />

            <TheCheckbox
              v-model="state.categories['brand.naming']"
              label="Naming & Concept Creation"
              name="brand.naming"
            />

            <TheCheckbox
              v-model="state.categories['brand.strategy']"
              label="Brand Strategy"
              name="brand.strategy"
            />

            <TheCheckbox
              v-model="state.categories['brand.pitch']"
              label="Pitch Decks"
              name="brand.pitch"
            />

            <TheCheckbox
              v-model="state.categories['brand.systems']"
              label="Full Brand Systems"
              name="brand.systems"
            />

            <TheCheckbox
              v-model="state.categories['identity.visual']"
              label="Visual Identity Design"
              name="identity.visual"
            />
          </div>

          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.categories['identity.books']"
              label="Brand Books"
              name="identity.books"
            />

            <TheCheckbox
              v-model="state.categories['identity.packaging']"
              label="Packaging & Collaterals"
              name="identity.packaging"
            />

            <TheCheckbox
              v-model="state.categories['marketing.social']"
              label="Social Media Strategy"
              name="marketing.social"
            />

            <TheCheckbox
              v-model="state.categories['marketing.content']"
              label="Content Creation"
              name="marketing.content"
            />

            <TheCheckbox
              v-model="state.categories['marketing.campaigns']"
              label="Creative & Digital Campaigns"
              name="marketing.campaigns"
            />

            <TheCheckbox
              v-model="state.categories['marketing.ai']"
              label="AI-Driven Campaigns"
              name="marketing.ai"
            />
          </div>
          
          <div class="w-100 flex" style="gap: 10px;">
            <TheCheckbox
              v-model="state.categories['marketing.ads']"
              label="Paid Advertising (Meta, Google, YouTube)"
              name="marketing.ads"
            />

            <TheCheckbox
              v-model="state.categories['marketing.launch']"
              label="Launch Campaigns"
              name="marketing.launch"
            />

            <TheCheckbox
              v-model="state.categories['conversion.website']"
              label="Website & Funnel Building"
              name="conversion.website"
            />

            <TheCheckbox
              v-model="state.categories['conversion.ux']"
              label="UX/UI Strategy"
              name="conversion.ux"
            />

            <TheCheckbox
              v-model="state.categories['conversion.copywriting']"
              label="Copywriting for Web & Digital"
              name="conversion.copywriting"
            />

            <div style="display: flex; padding: 12px 20px; flex: 1 0 0;"></div>
          </div>
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
          <div v-for="(image, i) in state.images" :key="i">
            <TheImagePreview :url="image.thumbnail ? image.thumbnail : image.url" />
          </div>
          <!-- <TheImageLoader v-model:file="state.secondaryFile" @update:file="processSecondaryImages" id="secondaryFiles" /> -->
        </div>
      </div>

      <div class="w-100 flex justify-end">
        <TheButton :isDisabled="buttonIsDisabled" :isLoading="state.loadingUpdate" @click="updateProject">Update project</TheButton>
      </div>
    </div>
  </section>
  <section class="empty-admin-projects-view">
    <span>For a better experience, open this in a larger screen</span>
  </section>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useMainStore } from '@/stores/main.store'
import { useRoute, useRouter } from 'vue-router'

import TheInput from '@/components/atoms/TheInput.vue'
import TheDropdown from '@/components/atoms/TheDropdown.vue'
import TheLabel from '@/components/atoms/TheLabel.vue'
import TheCheckbox from '@/components/atoms/TheCheckbox.vue'
import TheImageLoader from '@/components/atoms/TheImageLoader.vue'
import TheImagePreview from '@/components/atoms/TheImagePreview.vue'
import TheButton from '@/components/atoms/TheButton.vue'

const store = useMainStore()
const route = useRoute()
const router = useRouter()

const state = reactive({
  loadingDelete: false,
  loadingUpdate: false,

  _id: "",
  title: "",
  place: "",
  year: "",
  imageUrl: "",
  images: [],
  relatedProject: "",
  relatedProjects: [],
  
  categories: {
    "brand.story": false,
    "brand.naming": false,
    "brand.strategy": false,
    "brand.pitch": false,
    "brand.systems": false,
    "identity.visual": false,
    "identity.books": false,
    "identity.packaging": false,
    "marketing.social": false,
    "marketing.content": false,
    "marketing.campaigns": false,
    "marketing.ai": false,
    "marketing.ads": false,
    "marketing.launch": false,
    "conversion.website": false,
    "conversion.ux": false,
    "conversion.copywriting": false,
  },
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
const buttonIsDisabled = computed(() => {
  return (
    state.title === "" ||
    state.place === "" ||
    state.year === ""
    // state.mainImageFile === null ||
    // state.secondaryImagesFiles.length === 0
  )
})

onMounted(() => {
  store.getProjects()
  getProjectDetails()
})

async function getProjectDetails() {
  try {
    const projectName = route.params.name
    const projectData = await store.getProjectDetails(projectName)
    state._id = projectData._id
    state.title = projectData.title
    state.place = projectData.place
    state.year = projectData.year
    state.relatedProjects = projectData.relatedProjects.map(rp => {
      return {
        id: rp._id,
        title: rp.title
      }
    })
    projectData.categories.forEach(category => {
      state.categories[category] = true
    })
    state.imageUrl = projectData.imageUrl
    state.images = projectData.images
  } catch(error) {
    // do something
  }
}

function goToProjects() {
  router.push({ name: "AdminProjects" })
}

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

async function deleteProject() {
  try {
    state.loadingDelete = true
    await store.deleteProject(state._id)
    goToProjects()
  } catch(error) {
    //
  } finally {
    state.loadingDelete = false
  }
}

async function updateProject() {
  try {
    state.loadingUpdate = true
    // await store.deleteProject(state._id)
    goToProjects()
  } catch(error) {
    //
  } finally {
    state.loadingUpdate = false
  }
}
</script>
