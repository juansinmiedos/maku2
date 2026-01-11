<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <TheButton>Let’s  Leave A Mark</TheButton>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TheButton from './TheButton.vue'
</script>
