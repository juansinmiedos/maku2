<template>
  <div class="project-detail-view">
    <div class="white-space"></div>
    <div class="header" :style="`background: no-repeat center / cover url(${state.projectData.imageUrl});`"></div>

    <div class="title">
      <div class="container">
        <p class="title-lg">{{ state.projectData.place }}<br />{{ state.projectData.year }}</p>

        <div class="labels-section">
          <div class="top">
            <h2>{{ state.projectData.title }}</h2>
            <h4>{{ state.projectData.title }}</h4>

            <div class="labels-container">
              <TheLabel
                v-for="(category, i) in state.projectData.categories"
                :key="i"
                :value="category"
                isActive
              >{{ $t(category) }}</TheLabel>
            </div>
          </div>

          <div class="bottom"></div>
        </div>
      </div>
    </div>

    <div class="scrollable-label-container">
      <TheLabel
        v-for="(category, i) in state.projectData.categories"
        :key="i"
        :value="category"
        isActive
      >{{ category }}</TheLabel>
    </div>

    <section class="images-section">
      <div v-for="(image, i) in state.projectData.images" :key="i">
        <img class="image" :src="image.thumbnail ? image.thumbnail : image.url" @click="openImageModal(image.url)" />
      </div>
    </section>

    <ImageModal v-model:show="state.imageModal" v-model:url="state.selectedImageUrl" />

    <section class="related-projects">
      <p class="title-lg">More Projects</p>

      <div class="container">
        <div v-for="(project, i) in state.relatedProducts" :key="i" class="project-card" @click="goToProjectDetailView(project.name)">
          <div class="image" :style="`background: no-repeat center / cover url(${project.imageUrl});`"></div>
          <p class="title-lg">{{ project.title }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMainStore } from '@/stores/main.store'

import TheLabel from '@/components/atoms/TheLabel.vue'
import ImageModal from './components/ImageModal.vue'

const route = useRoute()
const router = useRouter()
const store = useMainStore()

const state = reactive({
  imageModal: false,
  selectedImageUrl: "",
  projectData: {},
  relatedProducts: [],
})

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
  getProjectDetails()
})

function resizeController() {
  const filteredProducts = state.projectData.relatedProjects
  if (window.innerWidth > 830) {
    state.relatedProducts = filteredProducts
  } else {
    state.relatedProducts=  filteredProducts.slice(0, 2)
  }
}

async function getProjectDetails() {
  try {
    const projectName = route.params.name
    const res = await store.getProjectDetails(projectName)
    state.projectData = res
    resizeController()
  } catch(error) {
    // do something
  }
}

function openImageModal(url) {
  state.selectedImageUrl = url
  state.imageModal = true
}

function goToProjectDetailView(name) {
  router.push({ name: "ProjectDetail", params: { name }, })
}
</script>
