<template>
  <div v-if="file" class="image-preview" :style="`background: no-repeat center / cover url(${src});`"></div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  file: [ File, String ],
})

const src = computed(() => URL.createObjectURL(props.file))
</script>
