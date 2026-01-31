<template>
  <!-- <header>
    <TheNavbar />
  </header> -->

  <main>
    <RouterView />
  </main>

  <TheFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'

import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>
