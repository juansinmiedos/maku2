<template>
  <div class="our-brand-item">
    <div class="image" :class="data.image"></div>
    <div class="body">
      <p class="overline-md">{{ data.subtitle }}</p>
      <p class="title-lg">{{ data.title }}</p>
      <p class="p-md">{{ data.text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
})
</script>
