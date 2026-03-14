<template>
  <div id="loader" class="loader"></div>
  <header>
    <TheNavbar />
  </header>

  <main>
    <RouterView :key="route.fullPath" />
  </main>

  <TheFooter />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { useMainStore } from './stores/main.store'

import TheNavbar from './components/organisms/TheNavbar.vue'
import TheFooter from './components/organisms/TheFooter.vue'

const route = useRoute()
const store = useMainStore()

onMounted(() => {
  const loader = document.getElementById("loader")
  setTimeout(() => {
    loader.classList.add("slide-up")
    setTimeout(() => loader.remove(), 3000)

  }, 100)
  store.getProjects()
})
</script>
