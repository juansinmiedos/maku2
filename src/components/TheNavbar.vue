<template>
  <nav>
    <div class="container">
      <img src="../assets/maku-logo.svg" alt="logo" @click="goToHome" />

      <div class="menu">
        <div class="links">
          <RouterLink to="/about-us">About Us</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>

        <TheButton>Let’s  Leave A Mark</TheButton>
      </div>

      <div class="menu-button" :class="{ open: drawerIsOpen }" @click="toggleDrawer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="white"/>
        </svg>
      </div>
    </div>

    <div class="mobile-menu" :class="{ open: drawerIsOpen }">
      <div v-if="drawerIsOpen">
        <span class="title-lg link">About Us</span>
        <span class="title-lg link">Services</span>
        <span class="title-lg link">Projects</span>
        <span class="title-lg link">Contact</span>
      </div>

      <TheButton v-if="drawerIsOpen" :class="{ open: drawerIsOpen }">Let’s  Leave A Mark</TheButton>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from 'vue-router'

import { RouterLink } from 'vue-router'
import TheButton from './TheButton.vue'

const router = useRouter()

const drawerIsOpen = ref(false)

function goToHome() {
  router.push({ name: "Home" })
}

function toggleDrawer() {
  drawerIsOpen.value = !drawerIsOpen.value
}
</script>
