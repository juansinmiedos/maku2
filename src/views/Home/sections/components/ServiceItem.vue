<template>
  <div class="service-item">
    <h4 v-if="windowIsSmall" style="line-height: normal;">{{ data.title }}</h4>
    <h3 v-else>{{ data.title }}</h3>
    <p :class="windowIsSmall || windowIsMedium ? 'p-md' : 'p-lg'" v-for="(point, i) in data.points" :key="i">{{ point }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  data: Object,
})

const windowIsSmall = ref(false)
const windowIsMedium = ref(false)

onMounted(() => {
  resizeController()
  window.addEventListener("resize", () => resizeController())
})

function resizeController() {
  if (window.innerWidth <= 380) {
    windowIsSmall.value = true
    windowIsMedium.value = false
  } else if (window.innerWidth <= 830 && window.innerWidth > 380) {
    windowIsSmall.value = false
    windowIsMedium.value = true
  } else {
    windowIsSmall.value = false
    windowIsMedium.value = false
  }
}
</script>