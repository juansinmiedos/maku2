<template>
  <div
    v-if="preview"
    class="image-preview"
    :style="`background: no-repeat center / cover url(${preview});`"
  >
    <div class="close" @click="deleteFile">&times;</div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const emit = defineEmits([ "update:file", "update:url" ])

const props = defineProps({
  file: File,
  url: String,
})

const preview = ref(null)

const isVideo = computed(() => props.file?.type?.startsWith('video/'))

watch(
  () => props.file,
  async (file) => {
    if (!file) {
      preview.value = props.url || null
      return
    }

    if (isVideo.value) {
      preview.value = await generateVideoThumbnail(file)
    } else {
      preview.value = URL.createObjectURL(file)
    }
  },
  { immediate: true }
)

function generateVideoThumbnail(file) {
  return new Promise((resolve) => {
    const video = document.createElement('video')
    const canvas = document.createElement('canvas')
    const url = URL.createObjectURL(file)

    video.src = url
    video.currentTime = 1
    video.muted = true
    video.playsInline = true

    video.addEventListener('loadeddata', () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      const thumbnail = canvas.toDataURL('image/jpeg')

      URL.revokeObjectURL(url)
      resolve(thumbnail)
    })
  })
}

function deleteFile() {
  emit("update:file", null)
  emit("update:url", "")
}
</script>
