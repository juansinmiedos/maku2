<template>
  <div class="project-item" @click="goToProjectDetailView">
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
  console.log(props)
  router.push({ name: "ProjectDetail", params: { name: props.name }, })
}
</script>
