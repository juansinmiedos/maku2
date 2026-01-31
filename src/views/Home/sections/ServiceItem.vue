<template>
  <div class="service-item">
    <h3>{{ data.title }}</h3>
    <p class="p-lg" v-for="(point, i) in data.points" :key="i">{{ point }}</p>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
})
</script>