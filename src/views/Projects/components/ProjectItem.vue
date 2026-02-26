<template>
  <div class="project-item-2" @click="goToProjectDetailView">
    <div class="image" :style="`background: no-repeat center / cover url(${props.imageUrl});`"></div>
    <p class="title-lg">{{ text }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  id: String,
  imageUrl: String,
  text: String,
})

function goToProjectDetailView() {
  router.push({ name: "ProjectDetail", params: { id: props.id }, })
}
</script>