<template>
  <div class="legal-view">
    <div class="w-100 container">
      <div class="title">
        <h2>{{ $t(data.title) }}</h2>
        <h4>{{ $t(data.title) }}</h4>
      </div>

      <div class="body" v-html="$t(data.body)">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
})
</script>
