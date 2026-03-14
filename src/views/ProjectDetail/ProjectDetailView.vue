<template>
  <div class="project-detail-view">
    <div class="white-space"></div>
    <div class="header" :style="`background: no-repeat center / cover url(${projectData.imageUrl});`"></div>

    <div class="title">
      <div class="container">
        <p class="title-lg">{{ projectData.place }}<br />{{ projectData.year }}</p>

        <div class="labels-section">
          <div class="top">
            <h2>{{ projectData.title }}</h2>
            <h4>{{ projectData.title }}</h4>

            <div class="labels-container">
              <TheLabel
                v-for="(category, i) in projectData.categories"
                :key="i"
                :value="category"
                isActive
              >{{ category }}</TheLabel>
            </div>
          </div>

          <div class="bottom"></div>
        </div>
      </div>
    </div>

    <div class="scrollable-label-container">
      <TheLabel
        v-for="(category, i) in projectData.categories"
        :key="i"
        :value="category"
        isActive
      >{{ category }}</TheLabel>
    </div>

    <section class="images-section">
      <div v-for="(url, i) in projectData.images" :key="i">
        <img class="image" :src="url" @click="openImageModal(url)" />
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
  relatedProducts: [],
})

const projectData = store.state.projects.find(project => project.name === route.params.id)

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
})

function resizeController() {
  const filteredProducts = store.state.projects.filter(project => project.name !== route.params.id)
  if (window.innerWidth > 830) {
    state.relatedProducts = filteredProducts
  } else {
    state.relatedProducts=  filteredProducts.slice(0, 2)
  }
}

function openImageModal(url) {
  state.selectedImageUrl = url
  state.imageModal = true
}

function goToProjectDetailView(name) {
  router.push({ name: "ProjectDetail", params: { id: name }, })
}
</script>
