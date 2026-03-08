<template>
  <div class="legal-view">
    <div class="w-100 container">
      <div class="title">
        <h2>{{ data.title }}</h2>
        <h4>{{ data.title }}</h4>
      </div>

      <div class="body">Legal text here</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
})
</script>
