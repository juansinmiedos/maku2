<template>
  <div id="loader" class="loader"></div>
  <header>
    <TheNavbar />
  </header>

  <main>
    <RouterView />
  </main>

  <TheFooter class="reveal" />
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

import TheNavbar from './components/organisms/TheNavbar.vue'
import TheFooter from './components/organisms/TheFooter.vue'

onMounted(() => {
  const loader = document.getElementById("loader")
  setTimeout(() => {
    loader.classList.add("slide-up")
    setTimeout(() => loader.remove(), 3000)

  }, 100);
})
</script>
