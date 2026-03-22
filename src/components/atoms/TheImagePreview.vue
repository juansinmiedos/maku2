<template>
  <div v-if="file" class="image-preview" :style="`background: no-repeat center / cover url(${src});`">
    <div class="close" @click="deleteFile">&times;</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits([ "update:file" ])

const props = defineProps({
  file: File,
})

const src = computed(() => URL.createObjectURL(props.file))

function deleteFile() {
  emit("update:file", null)
}
</script>
