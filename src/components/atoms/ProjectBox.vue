<template>
  <div class="project-box">
    <div>
      <p class="title-lg">{{ title }}</p>
    </div>

    <div>
      <TheButton @click="goToDetailView">Manage project</TheButton>
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
  router.push({ name: "AdminProjectDetail", params: { name: props.name }})
}
</script>
