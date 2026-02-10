<template>
  <header>
    <TheNavbar />
  </header>

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'

import TheNavbar from './components/organisms/TheNavbar.vue'
import TheFooter from './components/organisms/TheFooter.vue'
</script>
