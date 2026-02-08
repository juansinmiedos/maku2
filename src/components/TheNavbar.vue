<template>
  <nav>
    <div class="container">
      <img src="../assets/maku-logo.svg" alt="logo" @click="goToHome" />

      <div class="testtt">
        <div class="links">
          <RouterLink to="/about-us">About Us</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>

        <TheButton>Let’s  Leave A Mark</TheButton>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'

import { RouterLink } from 'vue-router'
import TheButton from './TheButton.vue'

const router = useRouter()

function goToHome() {
  // router.push home
  router.push({ name: "Home" })
}
</script>
