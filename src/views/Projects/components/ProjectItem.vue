<template>
  <div class="project-item-2" @click="goToProjectDetailView">
    <div class="image" :style="`background: no-repeat center / cover url(${props.imageUrl});`"></div>
    <p class="title-lg">{{ title }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  name: String,
  imageUrl: String,
  title: String,
})

function goToProjectDetailView() {
  router.push({ name: "ProjectDetail", params: { id: props.name }, })
}
</script>