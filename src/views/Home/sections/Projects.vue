<template>
  <section class="projects-section">
    <div class="container">
      <div class="top">
        <p class="title" :class="windowIsSmall ? 'title-sm' : 'title-lg'">Projects</p>
        <div class="body-wrapper">
          <div class="body-container">
            <p class="title-lg">Most brands come with a specific need. Our role is to understand what the brand actually needs to grow.</p>
            <p class="p-lg">That means looking beyond the initial request and building strategies that strengthen the brand, its connection with customers, and its long-term performance.</p>
          </div>

          <TheButton v-if="!windowIsSmall" @click="goToProjects">View all</TheButton>
        </div>
      </div>

      <div class="bottom">
        <div class="projects">
          <ProjectItem v-for="(project, i) in mainProjects" :key="i" v-bind="project" :style="`min-width: ${project.minWidth}px;`" />
        </div>

        <div class="projects secondary">
          <ProjectItem v-for="(project, i) in secondaryProjects" :key="i" v-bind="project" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import TheButton from '@/components/atoms/TheButton.vue'
import ProjectItem from './components/ProjectItem.vue'

const router = useRouter()

const windowIsSmall = ref(false)
const windowIsMedium = ref(false)
const mainProjects = [
  {
    imageUrl: "https://media.istockphoto.com/id/1446478805/photo/a-chef-is-finishing-the-preparation-of-the-plate.jpg?s=612x612&w=0&k=20&c=OoFoYYJ0_eun72wlt-lDzlYjY-CaLwphDgUyIApDu_I=",
    text: "Chevere"
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1411606505/photo/waiter-adding-sauce-on-mussels-during-catering.jpg?s=612x612&w=0&k=20&c=sLY1ILsEs4knFb7VECSWUBHqr1zEpIg6JK2eE_FWVvA=",
    text: "Arona",
    minWidth: 715,
  },
]
const secondaryProjects = [
{
    imageUrl: "https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?s=612x612&w=0&k=20&c=jwKJmGErrLe2XsTWNYEEyiNicudYVA4j8jvnTiJdp58=",
    text: "Archibald"
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1933259531/photo/variety-of-food-dishes-with-meat-fish-and-steak-served-in-michelin-star-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=uTPNuNanFjgIKOSEygS8Z5FYa5GZIeFFTkXCZvA8QqY=",
    text: "Altitude"
  },
  {
    imageUrl: "https://media.istockphoto.com/id/1388791676/photo/teppanyaki-style.jpg?s=612x612&w=0&k=20&c=j2QXPUQapSE9221h9Hr7XOa5ywcuJUBl3xcv7a63LRE=",
    text: "Atipico"
  },
]

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
})

function resizeController() {
  if (window.innerWidth <= 380) {
    windowIsSmall.value = true
    windowIsMedium.value = false
  } else if (window.innerWidth <= 830 && window.innerWidth > 380) {
    windowIsSmall.value = false
    windowIsMedium.value = true
  } else {
    windowIsSmall.value = false
    windowIsMedium.value = false
  }
}

function goToProjects() {
  router.push({ name: "Projects" })
}
</script>
