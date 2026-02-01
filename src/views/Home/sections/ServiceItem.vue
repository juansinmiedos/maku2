<template>
  <div class="service-item">
    <h3>{{ data.title }}</h3>
    <p :class="windowIsMedium ? 'p-md' : 'p-lg'" v-for="(point, i) in data.points" :key="i">{{ point }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  data: Object,
})

const windowIsMedium = ref(false)

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
})

function resizeController() {
  if (window.innerWidth <= 830 && window.innerWidth > 380) {
    windowIsMedium.value = true
  } else {
    windowIsMedium.value = false
  }
}
</script>