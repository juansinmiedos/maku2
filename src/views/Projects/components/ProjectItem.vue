<template>
  <div class="project-item-2">
    <div class="image" :style="`background: no-repeat center / cover url(${props.imageUrl});`"></div>
    <p class="title-lg">{{ text }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  imageUrl: String,
  text: String,
})
</script>