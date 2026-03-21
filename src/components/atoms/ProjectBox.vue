<template>
  <div class="project-box">
    <div>
      <p class="title-lg">{{ title }}</p>
    </div>

    <div>
      <TheButton @click="goToDetailView">Administrar proyecto</TheButton>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

import TheButton from './TheButton.vue'

const router = useRouter()

const props = defineProps({
  name: String,
  title: String,
})

function goToDetailView() {
  console.log(props)
  router.push({ name: "AdminProjectDetail", params: { id: props.name }})
}
</script>
